#include "PlatformLibrary.h"

#include "Misc/FileHelper.h"
#include "Misc/Paths.h"

FString UPlatformLibrary::GetDirectoryName(const FString& Path)
{
	return FPaths::GetPath(Path);
}

FString UPlatformLibrary::CombinePath(const FString& Directory, const FString& File)
{
	return FPaths::Combine(Directory, File);
}

bool UPlatformLibrary::FileExists(const FString& Path)
{
	return FPaths::FileExists(Path);
}

FString UPlatformLibrary::ReadAllText(const FString& Path)
{
	if (!FPaths::FileExists(Path))
	{
		UE_LOG(LogTemp, Warning, TEXT("File not exists, Path:%s"), *Path);
		return FString();
	}
	FString Result;
	if (FFileHelper::LoadFileToString(Result, *Path))
	{
		return Result;
	}
	UE_LOG(LogTemp, Error, TEXT("Read file failed, Path:%s"), *Path);
	return FString();
}
