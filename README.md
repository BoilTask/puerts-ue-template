# 目录说明

UE5客户端项目路径。

# 开发简述

按照`Puerts`的安装说明添加`Puerts`插件，依赖的`PuertsAutoMixin`插件已通过`submodule`的方式引入。

使用`npm install`初始化工程。

日常开发使用`npm run dev`启动监听服务，将在`TypeScript`产生变化时重新生成`JavaScript`。

可以使用`npm run build`来重新生成`JavaScript`。

> 修改Plugins\PuertsAutoMixin\Config\TsTemplates下的模板文件，可以改变生成模板时的文件。

# 说明文档

可参考作者博客：[虚幻引擎（UE5）下 PuerTS 的模板工程](https://boiltask.com/knowledge/ue/ue-puerts-template/)。
