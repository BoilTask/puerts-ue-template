#pragma once

#include "CoreMinimal.h"

#include "JsEnv.h"

#include "PuertsAutoMixinLibrary.h"
#include "SourceFileWatcher.h"

#include "TemplateGameInstance.generated.h"

UCLASS()
class TEMPLATE_API UTemplateGameInstance : public UGameInstance
{
	GENERATED_BODY()

public:
	virtual void OnStart() override;
	virtual void Shutdown() override;

	UFUNCTION(BlueprintCallable, Category = "MetaGame|MetaGameInstance")
	void BindMixin(const FPuertsAutoMixinDelegate& BindCallback);

	void StartJavaScriptEnv();
	void HotReloadJavaScriptEnv(const FString& ModuleName);

	puerts::FJsEnv* GetJsEnv() const { return JsEnv.Get(); }

private:
	TSharedPtr<puerts::FJsEnv> JsEnv;

#if WITH_EDITOR
	TSharedPtr<PUERTS_NAMESPACE::FSourceFileWatcher> SourceFileWatcher;
#endif
};
