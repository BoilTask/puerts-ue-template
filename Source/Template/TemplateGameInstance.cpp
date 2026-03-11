#include "TemplateGameInstance.h"

#include <functional>

#include "SourceFileWatcher.h"

void UTemplateGameInstance::OnStart()
{
	UE_LOG(LogTemp, Display, TEXT("UMetaGameInstance OnStart"));
	StartJavaScriptEnv();
}

void UTemplateGameInstance::Shutdown()
{
	Super::Shutdown();

	if (JsEnv.IsValid())
	{
		JsEnv.Reset();
	}
	if (SourceFileWatcher.IsValid())
	{
		SourceFileWatcher.Reset();
	}
	UE_LOG(LogTemp, Warning, TEXT("UMetaGameInstance Shutdown"));
}

void UTemplateGameInstance::BindMixin(const FPuertsAutoMixinDelegate& BindCallback)
{
	UPuertsAutoMixinSubsystem::GetInstance().RegisterBindDelegate(JsEnv, BindCallback);
}

void UTemplateGameInstance::StartJavaScriptEnv()
{
#if WITH_EDITOR

	std::function<void(const FString&)> SourceLoadedCallback = nullptr;

	SourceFileWatcher = MakeShared<PUERTS_NAMESPACE::FSourceFileWatcher>(
		[this](const FString& InPath)
		{
			HotReloadJavaScriptEnv(InPath);
		});
	SourceLoadedCallback = [this](const FString& InPath)
	{
		if (SourceFileWatcher.IsValid())
		{
			SourceFileWatcher->OnSourceLoaded(InPath);
		}
	};
#endif

	JsEnv = MakeShared<puerts::FJsEnv>(std::make_unique<puerts::DefaultJSModuleLoader>(
										   TEXT("JavaScript")
									   )
									   , std::make_shared<puerts::FDefaultLogger>()
									   , 8080
									   , SourceLoadedCallback

	);
	TArray<TPair<FString, UObject*>> Arguments;
	Arguments.Add(TPair<FString, UObject*>(TEXT("GameInstance"), this));
	// JsEnv->WaitDebugger();
	JsEnv->Start("QuickStart", Arguments);
}

void UTemplateGameInstance::HotReloadJavaScriptEnv(const FString& Path)
{
	if (JsEnv.IsValid())
	{
		TArray<uint8> Source;
		if (FFileHelper::LoadFileToArray(Source, *Path))
		{
			UE_LOG(LogTemp, Display, TEXT("read file success for %s"), *Path);
			JsEnv->ReloadSource(Path, puerts::PString(reinterpret_cast<const char*>(Source.GetData()), Source.Num()));
			UE_LOG(LogTemp, Display, TEXT("read file success for %s"), *Path);
		}
		else
		{
			UE_LOG(LogTemp, Error, TEXT("read file fail for %s"), *Path);
		}
	}
}
