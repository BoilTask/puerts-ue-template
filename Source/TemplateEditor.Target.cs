// Copyright Epic Games, Inc. All Rights Reserved.

using UnrealBuildTool;
using System.Collections.Generic;

public class TemplateEditorTarget : TargetRules
{
	public TemplateEditorTarget( TargetInfo Target) : base(Target)
	{
		Type = TargetType.Editor;
		DefaultBuildSettings = BuildSettingsVersion.V6;
		IncludeOrderVersion = EngineIncludeOrderVersion.Unreal5_7;
		ExtraModuleNames.Add("Template");

		// 每次编译在项目根目录运行npm run build
		string projectRoot = ProjectFile.Directory.FullName;
		string tsCmd = $"cd /D \"{projectRoot}\" && npm run build";
		PostBuildSteps.Add(tsCmd);
	}
}
