#pragma once

#include "CoreMinimal.h"
#include "Kismet/BlueprintFunctionLibrary.h"

#include "PlatformLibrary.generated.h"

/**
 * 提供了一些判断运行环境
 * 以及平台相关的接口
 */
UCLASS()
class TEMPLATE_API UPlatformLibrary : public UBlueprintFunctionLibrary
{
	GENERATED_BODY()

public:
	/**
	 * 获取文件所在目录路径
	 */
	UFUNCTION(BlueprintPure, Category="IO")
	static FString GetDirectoryName(const FString& Path);

	/**
	 * 合并路径
	 */
	UFUNCTION(BlueprintPure, Category="IO")
	static FString CombinePath(const FString& Directory, const FString& File);

	/**
	 * 检查文件是否存在
	 */
	UFUNCTION(BlueprintPure, Category="IO")
	static bool FileExists(const FString& Path);

	/**
	 * 读取文件所有文本内容
	 */
	UFUNCTION(BlueprintCallable, Category="IO")
	static FString ReadAllText(const FString& Path);

};
