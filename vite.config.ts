import { defineConfig } from "vite";
import { resolve, relative } from "path";
import { copyFileSync, mkdirSync, existsSync, readdirSync, statSync } from "fs";
import type { Plugin, OutputChunk } from "rollup";
import { SourceMapConsumer, SourceMapGenerator } from "source-map";
import MagicString from "magic-string";

const projectRoot = resolve(__dirname);
const typescriptDir = resolve(projectRoot, "TypeScript");
const outDir = resolve(projectRoot, "Content/JavaScript");
const puertsJsDir = resolve(projectRoot, "Plugins/Puerts/Content/JavaScript");

// 递归复制目录
function copyDirectoryRecursive(src: string, dest: string): void {
    if (!existsSync(dest)) {
        mkdirSync(dest, { recursive: true });
    }
    const entries = readdirSync(src);
    for (const entry of entries) {
        const srcPath = resolve(src, entry);
        const destPath = resolve(dest, entry);
        if (statSync(srcPath).isDirectory()) {
            copyDirectoryRecursive(srcPath, destPath);
        } else {
            copyFileSync(srcPath, destPath);
        }
    }
}

// 收集所有TypeScript入口文件
function collectEntryFiles(dir: string, baseDir: string): Record<string, string> {
    const entries: Record<string, string> = {};
    const items = readdirSync(dir);
    for (const item of items) {
        const fullPath = resolve(dir, item);
        const stat = statSync(fullPath);
        if (stat.isDirectory()) {
            Object.assign(entries, collectEntryFiles(fullPath, baseDir));
        } else if (item.endsWith(".ts") && !item.endsWith(".d.ts")) {
            const relativePath = relative(baseDir, fullPath).replace(/\.ts$/, "");
            entries[relativePath] = fullPath;
        }
    }
    return entries;
}

// C++注入的外部模块
const externalModules = ["ue", "puerts", "cpp", "ffi"];

// 复制Puerts JS文件的插件
function copyPuertsJs(): Plugin {
    return {
        name: "copy-puerts-js",
        closeBundle() {
            console.log("[vite] Copying Puerts JavaScript files...");
            try {
                copyDirectoryRecursive(puertsJsDir, outDir);
                console.log("[vite] Puerts JavaScript files copied successfully.");
            } catch (error) {
                console.error("[vite] Failed to copy Puerts JavaScript files:", error);
            }
        },
    };
}

// 修复外部模块导入的插件（使用magic-string保持sourcemap正确）
function fixExternalImports(): Plugin {
    return {
        name: "fix-external-imports",
        async renderChunk(code: string, chunk: OutputChunk) {
                const magicString = new MagicString(code);
                let hasChanges = false;

                // 替换 __namespace 引用
                const namespacePattern = /(\w+)__namespace\./g;
                let match;
                while ((match = namespacePattern.exec(code)) !== null) {
                        const start = match.index;
                        const end = start + match[0].length;
                        const replacement = match[1] + ".";
                        magicString.overwrite(start, end, replacement);
                        hasChanges = true;
                }

                // 移除 __namespace 变量声明
                const constPattern = /const\s+\w+__namespace\s*=\s*(?:\/\*[\s\S]*?\*\/\s*)?_interopNamespace\([^)]*\);\s*\n?/g;
                while ((match = constPattern.exec(code)) !== null) {
                        magicString.remove(match.index, match.index + match[0].length);
                        hasChanges = true;
                }

                // 移除 _interopNamespace 函数定义
                const funcPattern = /function _interopNamespace\(e\)\s*\{[\s\S]*?\n\}\s*\n?/g;
                while ((match = funcPattern.exec(code)) !== null) {
                        magicString.remove(match.index, match.index + match[0].length);
                        hasChanges = true;
                }

                // 移除 __name(_interopNamespace, "_interopNamespace");
                const namePattern = /__name\(_interopNamespace,\s*"_interopNamespace"\);\s*\n?/g;
                while ((match = namePattern.exec(code)) !== null) {
                        magicString.remove(match.index, match.index + match[0].length);
                        hasChanges = true;
                }

                if (hasChanges) {
                        return {
                                code: magicString.toString(),
                                map: magicString.generateMap({ hires: true }),
                        };
                }

                return null;
        },
    };
}

const entryFiles = collectEntryFiles(typescriptDir, typescriptDir);
console.log("[vite] Entry files:", Object.keys(entryFiles));

export default defineConfig({
    resolve: {
        alias: {
            "@": typescriptDir,
        },
    },
    build: {
        outDir: outDir,
        emptyOutDir: true,
        sourcemap: true,
        minify: false,
        lib: {
            entry: entryFiles,
            formats: ["cjs"],
        },
        rollupOptions: {
            external: (id: string) => {
                for (const ext of externalModules) {
                    if (id === ext || id.startsWith(ext + "/")) {
                        return true;
                    }
                }
                return false;
            },
            output: {
                preserveModules: true,
                preserveModulesRoot: typescriptDir,
                entryFileNames: "[name].js",
                exports: "named",
                format: "cjs",
                interop: "auto",
                externalLiveBindings: false,
            },
        },
    },
    plugins: [fixExternalImports(), copyPuertsJs()],
    esbuild: {
        target: "esnext",
        keepNames: true,
        sourcemap: true,
        sourcesContent: true,
    },
});
