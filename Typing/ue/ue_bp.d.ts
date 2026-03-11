/// <reference path="puerts.d.ts" />
declare module "ue" {
    import {$Ref, $Nullable} from "puerts"

    import * as cpp from "cpp"

    import * as UE from "ue"

// __TYPE_DECL_START: 72254d18b5d0fe4a97fa5c05e011eaca00000000
    namespace Engine.EngineDamageTypes.DmgTypeBP_Environmental {
        class DmgTypeBP_Environmental_C extends UE.DamageType {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): DmgTypeBP_Environmental_C;
            static Load(InName: string): DmgTypeBP_Environmental_C;
        
            __tid_DmgTypeBP_Environmental_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: d64d14f8a2f10855b95aa8110973c609918bcc1d
    namespace Game.Template.BP_GameMode {
        class BP_GameMode_C extends UE.GameModeBase {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            DefaultSceneRoot: UE.SceneComponent;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_GameMode_C;
            static Load(InName: string): BP_GameMode_C;
        
            __tid_BP_GameMode_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4d4149d519f97d428e43030e72f18e0200000000
    namespace Engine.EditorBlueprintResources.ActorComponentMacros {
        class ActorComponentMacros_C extends UE.ActorComponent {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorComponentMacros_C;
            static Load(InName: string): ActorComponentMacros_C;
        
            __tid_ActorComponentMacros_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 7e69d6672f27fb49bcb7cd78814289c000000000
    namespace Engine.EditorBlueprintResources.StandardMacros {
        class StandardMacros_C extends UE.Object {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): StandardMacros_C;
            static Load(InName: string): StandardMacros_C;
        
            __tid_StandardMacros_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 6a50fbe7a65dd34bb51b777a9781da8400000000
    namespace Engine.EditorBlueprintResources.ActorMacros {
        class ActorMacros_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorMacros_C;
            static Load(InName: string): ActorMacros_C;
        
            __tid_ActorMacros_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: a658288c9b2eeb46bc76101c80360ce800000000
    namespace Engine.ArtTools.RenderToTexture.Macros.RenderToTextureFunctionLibrary {
        class RenderToTextureFunctionLibrary_C extends UE.BlueprintFunctionLibrary {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static ["Array to HLSL Int Array"](Type: UE.Engine.ArtTools.RenderToTexture.Enums.EIntTypes.EIntTypes, VariableName: $Ref<string>, int: $Ref<TArray<number>>, int2: $Ref<TArray<UE.Vector2D>>, int3: $Ref<TArray<UE.Vector>>, int4: $Ref<TArray<UE.LinearColor>>, __WorldContext: $Nullable<UE.Object>, String: $Ref<string>) : void;
            static ["Set Canvas Material Scale and Position"](Size: UE.Vector2D, Position: UE.Vector2D, Scale: number, __WorldContext: $Nullable<UE.Object>, ScreenPosition: $Ref<UE.Vector2D>, ScreenSize: $Ref<UE.Vector2D>) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RenderToTextureFunctionLibrary_C;
            static Load(InName: string): RenderToTextureFunctionLibrary_C;
        
            __tid_RenderToTextureFunctionLibrary_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4ed486f81bee3d4fb7b530b1f3d0d7c000000000
    namespace Engine.ArtTools.RenderToTexture.Macros.RenderToTextureMacros {
        class RenderToTextureMacros_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RenderToTextureMacros_C;
            static Load(InName: string): RenderToTextureMacros_C;
        
            __tid_RenderToTextureMacros_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 113d4311918d4379f16e249e59e00457e60b254d
    namespace Game.Template.BP_HUD {
        class BP_HUD_C extends UE.HUD {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            DefaultSceneRoot: UE.SceneComponent;
            ExecuteUbergraph_BP_HUD(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_HUD_C;
            static Load(InName: string): BP_HUD_C;
        
            __tid_BP_HUD_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4a915788d9157b448a25d6e44fe257d200000000
    namespace Niagara.Enums.ENiagaraRandomnessMode {
        enum ENiagaraRandomnessMode { "Simulation Defaults", Determinisitic, "Non-Deterministic", ENiagaraRandomnessMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 8315749164bbd84eaaf02c4b5e85a01c00000000
    namespace Engine.ArtTools.RenderToTexture.Enums.EIntTypes {
        enum EIntTypes { int, int2, int3, int4, EIntTypes_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 885a669888e31a4f99304a29d1c5f6c900000000
    namespace Engine.ArtTools.RenderToTexture.Enums.EFloatTypes {
        enum EFloatTypes { Float, Float2, Float3, Float4, EFloatTypes_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 53ba906f5819b941bc4fabe2fa2fe79600000000
    namespace ControlRig.Modules.E_SkeletonData {
        enum E_SkeletonData { "UE5 Mannequin", "UE4 Mannequin", Mixamo, AdvancedSkeleton, HumanIK, mGear, Motive, Vicon, XSens, Paragon, E_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4f86f50b355aa64ba35de77a1a6ec76e00000000
    namespace Niagara.Enums.ENiagaraAerodynamicDragPivotMode {
        enum ENiagaraAerodynamicDragPivotMode { Random, Direct, ENiagaraAerodynamicDragPivotMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ffca484cdd4496429f3f92b674e207b800000000
    namespace Niagara.Enums.EniagaraAlternateRendererModes {
        enum EniagaraAlternateRendererModes { Sprite, Mesh, Ribbon, Light, EniagaraAlternateRendererModes_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 1a78474fddc8e846990fb3255dd6cfaa00000000
    namespace Niagara.Enums.ENiagaraAnimTrailWidthMode {
        enum ENiagaraAnimTrailWidthMode { Auto, Manual, ENiagaraAnimTrailWidthMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 3a153479edeaa0419c50e37740c3b77600000000
    namespace Niagara.Enums.ENiagaraArraySamplingMode {
        enum ENiagaraArraySamplingMode { Random, "Direct Set", Interpolate, ENiagaraArraySamplingMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: f358581fd5ba4b46b7e503a4057d797a00000000
    namespace Niagara.Enums.ENiagaraBoneSamplingMode {
        enum ENiagaraBoneSamplingMode { "Random (Filtered Bones)", "Random (Unfiltered Bones)", "Random (All Bones)", "Direct (Filtered Bones)", "Direct (Unfiltered Bones)", "Direct (All Bones)", ENiagaraBoneSamplingMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 944a3bde39d6414da46f6c47a74f36d800000000
    namespace Niagara.Enums.ENiagaraBoneSocketSamplingMode {
        enum ENiagaraBoneSocketSamplingMode { "Random (Filtered Bone or Sockets)", "Direct (Filtered Bone or Sockets)", ENiagaraBoneSocketSamplingMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 18b4dee12941f9488feed6172793ffc700000000
    namespace Niagara.Enums.ENiagaraBooleanLogicOps {
        enum ENiagaraBooleanLogicOps { "Greater Than", "Greater Than Or Equal To", "Equal To", "Not Equal To", ENiagaraBooleanLogicOps_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: bee2e2641d5ff145b62253ccedc80fdd00000000
    namespace Niagara.Enums.ENiagaraBooleanLogicOps_v2 {
        enum ENiagaraBooleanLogicOps_v2 { "A Greater Than B", "A Greater Than Or Equal To B", "A Equal To B", "A Not Equal To B", "A Less Than B", "A Less Than Or Equal To B", ENiagaraBooleanLogicOps_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: cc579f38940acf41b41b0629b6e8a42a00000000
    namespace Niagara.Enums.ENiagaraCalculateRadiusOptions {
        enum ENiagaraCalculateRadiusOptions { Bounds, "Minimum Axis", "Maximum Axis", ENiagaraCalculateRadiusOptions_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 52b2b44346c0da4ab0326fc89f78e15b00000000
    namespace Niagara.Enums.ENiagaraChannelCorrelation {
        enum ENiagaraChannelCorrelation { "Link RGBA", "Link RGB / Link A", "Random Individual Channels", ENiagaraChannelCorrelation_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: e67cfc6762debc488773445777556f0600000000
    namespace Niagara.Enums.ENiagaraCollisionRadiusOptions {
        enum ENiagaraCollisionRadiusOptions { Sprite, Mesh, Custom, ENiagaraCollisionRadiusOptions_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 713ee98bf3f15b40aa03fc83dd3bbd6e00000000
    namespace Niagara.Enums.ENiagaraCurlNoiseQuality {
        enum ENiagaraCurlNoiseQuality { "Baked (Low)", "Baked (Medium)", "Baked (High)", "Evaluated (Ultra)", ENiagaraCurlNoiseQuality_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 5f43135d04a41d4485a9bb5ff95583d900000000
    namespace Niagara.Enums.ENiagaraDecalTransforms {
        enum ENiagaraDecalTransforms { Simulation, World, Local, Decal, ENiagaraDecalTransforms_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: c07d1bb4badabd41b51c994c9e0ddcc400000000
    namespace Niagara.Enums.ENiagaraDragCoefficientShapeMode {
        enum ENiagaraDragCoefficientShapeMode { Exponent, Curve, ENiagaraDragCoefficientShapeMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 88cc83bb6b8d8943b307c44c02f3113a00000000
    namespace Niagara.Enums.ENiagaraDragMethodMode {
        enum ENiagaraDragMethodMode { Linear, Aerodynamic, ENiagaraDragMethodMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 42c7b7e638b94a43bf966d288e41a6e500000000
    namespace Niagara.Enums.ENiagaraEmitterLifeCycleMode {
        enum ENiagaraEmitterLifeCycleMode { System, Self, ENiagaraEmitterLifeCycleMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4c85733e2fbe724da4e909a176afd6e400000000
    namespace Niagara.Enums.ENiagaraEmitterScalabilityMode {
        enum ENiagaraEmitterScalabilityMode { System, Self, None, ENiagaraEmitterScalabilityMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: accb360ba8790a4487a9da27125b1b9500000000
    namespace Niagara.Enums.ENiagaraEmitterScalabilityMode_Limited {
        enum ENiagaraEmitterScalabilityMode_Limited { System, Self, ENiagaraEmitterScalabilityMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 3dbaa235fbfb254d9260f6305c75951000000000
    namespace Niagara.Enums.ENiagaraExpansionMode {
        enum ENiagaraExpansionMode { Inside, Centered, Outside, ENiagaraExpansionMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ac9eda76edffe045b9c1c24e4376726100000000
    namespace Niagara.Enums.ENiagaraFloatFromLinearColorOptions {
        enum ENiagaraFloatFromLinearColorOptions { Red, Green, Blue, Alpha, Hue, Saturation, Value, ENiagaraFloatFromLinearColorOptions_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 3212bb05c59d1048bd93feabba123d9300000000
    namespace Niagara.Enums.ENiagaraFrictionMergeType {
        enum ENiagaraFrictionMergeType { Ignore, Average, Min, Max, ENiagaraFrictionMergeType_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: eeed3c6682cae64dbb2c7ee34925762b00000000
    namespace Niagara.Enums.ENiagaraGBufferList_v2 {
        enum ENiagaraGBufferList_v2 { Off, "Base Color", "Custom Depth", "Custom Stencil", Depth, "Diffuse Color", Metallic, "Partial Depth", Roughness, "Scene Color", "Screen Velocity", "Shading Model ID", Specular, "World Normal", "World Velocity", ENiagaraGBufferList_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 1704a6a121b7914ea5e2fed171b9f9d800000000
    namespace Niagara.Enums.ENiagaraGBufferSnapToDepth {
        enum ENiagaraGBufferSnapToDepth { Off, Depth, "Custom Depth", "Partial Depth", ENiagaraGBufferSnapToDepth_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 30e4835054b0d84eb607bb8129a7846200000000
    namespace Niagara.Enums.ENiagaraGPUDepthResponseType {
        enum ENiagaraGPUDepthResponseType { Kill, Bounce, ENiagaraGPUDepthResponseType_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 83e48e9cf390344ca05cc546a9cb675c00000000
    namespace Niagara.Enums.ENiagaraGridPlacementType {
        enum ENiagaraGridPlacementType { "Padding Per Cell ", "Bounding Box Size", ENiagaraGridPlacementType_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: e89071bfe46d954bb83512dd670f692b00000000
    namespace Niagara.Enums.ENiagaraHSVToRGBInputSelector {
        enum ENiagaraHSVToRGBInputSelector { HSV, "Hue, Saturation, Value, Alpha", ENiagaraHSVToRGBInputSelector_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: cf403383e42d0b45823a1708945dffda00000000
    namespace Niagara.Enums.ENiagaraInactiveMode {
        enum ENiagaraInactiveMode { "Complete (Let Particles Finish then Kill Emitter)", "Kill (Emitter and Particles Die Immediately)", "Continue (Emitter Deactivates But Doesn't Die Until System Does)", ENiagaraInactiveMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4a9d8c9295862d45a7e13b08eb1b6a7c00000000
    namespace Niagara.Enums.ENiagaraKillVolumeOptions {
        enum ENiagaraKillVolumeOptions { Sphere, Box, Plane, Slab, Cone, ENiagaraKillVolumeOptions_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: a0a8c7c27abfd941b8a1fc98054d7c5800000000
    namespace Niagara.Enums.ENiagaraLinearColor_Channels {
        enum ENiagaraLinearColor_Channels { R, G, B, A, ENiagaraLinearColor_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 7c36fe00339e714d9e426e2a8cc812a400000000
    namespace Niagara.Enums.ENiagaraMassByVolume {
        enum ENiagaraMassByVolume { Rock, Steel, Wood, Water, Paper, Styrofoam, ENiagaraMassByVolume_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: dd7f0e129013aa41b7342331c351f5b100000000
    namespace Niagara.Enums.ENiagaraMassCalculationForRendererTypes {
        enum ENiagaraMassCalculationForRendererTypes { Sprite, Mesh, Ribbon, ENiagaraMassCalculationForRendererTypes_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 68105a4c1789ef40a548bae9ebae06b400000000
    namespace Niagara.Enums.ENiagaraMeshOrSprite {
        enum ENiagaraMeshOrSprite { Sprite, Mesh, ENiagaraMeshOrSprite_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 5c12b3afccbb5f4bbed509f50c1562c600000000
    namespace Niagara.Enums.ENiagaraMeshSamplingMode {
        enum ENiagaraMeshSamplingMode { Random, Direct, ENiagaraMeshSamplingMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 67589032c5e0384580018f261cc00a0b00000000
    namespace Niagara.Enums.ENiagaraMeshSurfaceSamplingMode {
        enum ENiagaraMeshSurfaceSamplingMode { Triangles, Vertices, ENiagaraMeshSurfaceSamplingMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 182dc67a0a18a84eb883a4ddf282910800000000
    namespace Niagara.Enums.ENiagaraMeshTransforms {
        enum ENiagaraMeshTransforms { Simulation, World, Local, Mesh, ENiagaraMeshTransforms_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: aa551767c8f6994193e091fbd4af8fed00000000
    namespace Niagara.Enums.ENiagaraMinOrMax {
        enum ENiagaraMinOrMax { Min, Max, ENiagaraMinOrMax_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 8af75c1fc5930c48ba2e7d4cca5ec79500000000
    namespace Niagara.Enums.ENiagaraQuaternionDerivationTechnique {
        enum ENiagaraQuaternionDerivationTechnique { "X Vector", "X And Y Vectors", "X And Z Vectors", ENiagaraQuaternionDerivationTechnique_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 829ba497f1510c40a1bc4fbcc505eb2e00000000
    namespace Niagara.Enums.ENiagaraRandomnessEvaluation {
        enum ENiagaraRandomnessEvaluation { "Spawn Only", "Every Frame", ENiagaraRandomnessEvaluation_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 2b529d72fc6d4540829f7f4c59f22ab400000000
    namespace Niagara.Enums.ENiagaraRestitutionMergeType {
        enum ENiagaraRestitutionMergeType { Ignore, Min, Max, Average, ENiagaraRestitutionMergeType_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: e5020429d163194f890a4596e854db7500000000
    namespace Niagara.Enums.ENiagaraScaleColorMode {
        enum ENiagaraScaleColorMode { "RGB and Alpha Separately", "RGBA Together", "RGBA Linear Color Curve", ENiagaraScaleColorMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 82b546aa679a244b83b525bc79a3a05700000000
    namespace Niagara.Enums.ENiagaraShapeTorusMode {
        enum ENiagaraShapeTorusMode { Torus, TorusKnot, ENiagaraShapeTorusMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 9cc6e6ff622e5a4e87f6f3adac63885f00000000
    namespace Niagara.Enums.ENiagaraSimulationTarget {
        enum ENiagaraSimulationTarget { "CPU Sim", "GPUCompute Sim", ENiagaraSimulationTarget_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: dab76e0a4e961542b0e17e11646b58bb00000000
    namespace Niagara.Enums.ENiagaraSkeletalSpawning {
        enum ENiagaraSkeletalSpawning { Bones, Sockets, "Bones and Sockets", ENiagaraSkeletalSpawning_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: c8636829f0e4074b8c0c6ddf5b1847c800000000
    namespace Niagara.Enums.ENiagaraSkelMeshPositionSamplingMode {
        enum ENiagaraSkelMeshPositionSamplingMode { "Apply (Rigid)", "Apply (Soft)", Output, ENiagaraSkelMeshPositionSamplingMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 26df2bf1bda81d4198215a65bc2b652200000000
    namespace Niagara.Enums.ENiagaraSkelMeshTransforms {
        enum ENiagaraSkelMeshTransforms { Simulation, World, Local, "Sampled Mesh", "Mesh Particle", ENiagaraSkelMeshTransforms_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 95d149f4508ed841b1b5e78e1cd7371800000000
    namespace Niagara.Enums.ENiagaraSkelSamplingFilteringMode {
        enum ENiagaraSkelSamplingFilteringMode { All, Filtered, Unfiltered, ENiagaraSkelSamplingFilteringMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: e5b36b70d237484e96795984af0b8f6200000000
    namespace Niagara.Enums.ENiagaraSkelSamplingModeFull {
        enum ENiagaraSkelSamplingModeFull { "Skeleton (Bones)", "Skeleton (Sockets)", "Skeleton (Bones and Sockets)", "Surface (Triangles)", "Surface (Vertices)", ENiagaraSkelSamplingModeFull_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: e04d58b1ad8e864eb6cdd247dc93b10600000000
    namespace Niagara.Enums.ENiagaraSocketSamplingMode {
        enum ENiagaraSocketSamplingMode { "Random (Filtered Sockets)", "Direct (Filtered Sockets)", ENiagaraSocketSamplingMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 0a1056ebccd1784c925b80a628da12e100000000
    namespace Niagara.Enums.ENiagaraSphereDistributionMode {
        enum ENiagaraSphereDistributionMode { Random, Direct, Uniform, ENiagaraSphereDistributionMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 9feb22a1b9feb247928a60ea2a8755e000000000
    namespace Niagara.Enums.ENiagaraSUbUVAnimationMode {
        enum ENiagaraSUbUVAnimationMode { Linear, Random, ENiagaraSUbUVAnimationMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 6336745fb1a056459c611fee57620ade00000000
    namespace Niagara.Enums.ENiagaraSystemInactiveMode {
        enum ENiagaraSystemInactiveMode { "Complete (Let Emitters Finish then Kill The System)", "Kill (System and Emitters Die Immediately)", ENiagaraSystemInactiveMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 11a837b26df2e7448380d7d31cd94b3e00000000
    namespace Niagara.Enums.ENiagaraTorusDistributionMode {
        enum ENiagaraTorusDistributionMode { Random, Direct, ENiagaraTorusDistributionMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 285a4cf04c65434db15f164711ea684500000000
    namespace Niagara.Enums.ENiagaraTorusMode {
        enum ENiagaraTorusMode { Torus, TorusKnot, Ring, ENiagaraTorusMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 8c42a40e8578ac4ba9993e216b958bef00000000
    namespace Niagara.Enums.ENiagaraTriangleSamplingMode {
        enum ENiagaraTriangleSamplingMode { "Random (All Triangles)", "Random (Sampling Regions)", "Direct (All Triangles)", "Direct (Sampling Regions)", ENiagaraTriangleSamplingMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: f483e82a867b014c9862d58629487ad400000000
    namespace Niagara.Enums.ENiagaraVector2_Channels {
        enum ENiagaraVector2_Channels { X, Y, ENiagaraVector2_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 1c35b83666a882468c9e217ea564605b00000000
    namespace Niagara.Enums.ENiagaraVector3_Channels {
        enum ENiagaraVector3_Channels { X, Y, Z, ENiagaraVector3_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: c7a454a96de610419e00bfdb7df7a81900000000
    namespace Niagara.Enums.ENiagaraVector4_Channels {
        enum ENiagaraVector4_Channels { X, Y, Z, W, ENiagaraVector4_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 3cbd064a297b7744ad1f15da1900efea00000000
    namespace Niagara.Enums.ENiagaraVectorNoiseQuality {
        enum ENiagaraVectorNoiseQuality { "Baked (Low)", "Baked (Medium)", "Baked (High)", "Evaluated (Ultra)", "Vector Field Asset", ENiagaraVectorNoiseQuality_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 80ea0b3846699f44b2e3e16f4b1ae28c00000000
    namespace Niagara.Enums.ENiagaraVertexFilteringMode {
        enum ENiagaraVertexFilteringMode { All, Filtered, ENiagaraVertexFilteringMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: aa8b2440894f914782b48fb948e7684500000000
    namespace Niagara.Enums.ENiagaraVertexSamplingMode {
        enum ENiagaraVertexSamplingMode { "Random (All Vertices)", "Random (Sampling Regions)", "Direct (All Vertices)", "Direct (Sampling Regions)", ENiagaraVertexSamplingMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ae2afaf7c882584faebe0b4140d22c0200000000
    namespace Niagara.Enums.ENiagara_AttributeSamplingApplyOutput {
        enum ENiagara_AttributeSamplingApplyOutput { Apply, Output, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: eec968b8bf76554a9c4a30671ce9815400000000
    namespace Niagara.Enums.ENiagara_AudioParamType {
        enum ENiagara_AudioParamType { Volume, Pitch, Location, Rotation, "Boolean Parameter", "Float Parameter", "Integer Parameter", "Paused State", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: e394aa8eb64e3d4cb16034fa05d6983b00000000
    namespace Niagara.Enums.ENiagara_BankOnTurns {
        enum ENiagara_BankOnTurns { "Add Local Banking Rotation", "Full Orientation Update", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: bfd03858e97e2846b6621afaf9d7241e00000000
    namespace Niagara.Enums.ENiagara_CameraMeshOrientation {
        enum ENiagara_CameraMeshOrientation { "Camera Position", "Camera Plane", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 585f7956a46ca148b3db69b90cf9ca0900000000
    namespace Niagara.Enums.ENiagara_CameraProperties {
        enum ENiagara_CameraProperties { "Camera Position", "Camera Forward Vector", "Camera Up Vector", "Camera Right Vector", "Vector To Camera", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 029ed59347e0464482c925c22985c6bb00000000
    namespace Niagara.Enums.ENiagara_CameraVectors {
        enum ENiagara_CameraVectors { "Camera Forward Vector", "Camera Up Vector", "Camera Right Vector", "Vector To Camera", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 5542e87276e3434b8298a45f82787fd900000000
    namespace Niagara.Enums.ENiagara_CollisionType {
        enum ENiagara_CollisionType { "GPU Depth Buffer", "GPU Distance Fields", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ce9f6866b9b31046a7105550c7f9711c00000000
    namespace Niagara.Enums.ENiagara_ColorInitializationMode {
        enum ENiagara_ColorInitializationMode { Unset, "Direct Set", "Random Range", "Random Hue/Saturation/Value", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: be6e90ec56a62e4a9e4b837703d4434700000000
    namespace Niagara.Enums.ENiagara_ColorInput {
        enum ENiagara_ColorInput { "Particle Color", "Chaos DI Color", "User Color", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 1d1e4202fc8c5f409a132adf5da044a300000000
    namespace Niagara.Enums.ENiagara_CPUCollisionType {
        enum ENiagara_CPUCollisionType { "Ray Traced", "Analytical Planes", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 05ca78d5af1916418572072eea318ce100000000
    namespace Niagara.Enums.ENiagara_DirectReadApplicationMode {
        enum ENiagara_DirectReadApplicationMode { Overwrite, Add, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: dd37218e5f051b4e9fbc6a5fbb66ee1c00000000
    namespace Niagara.Enums.ENiagara_DirectReadParticleIDSampling {
        enum ENiagara_DirectReadParticleIDSampling { Disabled, "Apply Sampled ID as Ribbon ID", "Output Only", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4ad819b9f652424dbfd7dddd3206941e00000000
    namespace Niagara.Enums.ENiagara_DirectReadSamplingMode {
        enum ENiagara_DirectReadSamplingMode { Disabled, "Apply to Attribute", "Output Only", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 1ba0cb754993c244bcc2395b1d1ed46200000000
    namespace Niagara.Enums.ENiagara_EmitterLocSamplingMode {
        enum ENiagara_EmitterLocSamplingMode { Random, Sequential, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 5a138aed9fb62c4aaa227c865d788e4000000000
    namespace Niagara.Enums.ENiagara_EmitterStateOptions {
        enum ENiagara_EmitterStateOptions { Infinite, Once, Multiple, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 0dd51d797e010545a651c0f8f263b5b800000000
    namespace Niagara.Enums.ENiagara_FadeOperationType {
        enum ENiagara_FadeOperationType { Linear, Percentage, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 0aef7c0b513dc440b5d9ad80c40bd0d400000000
    namespace Niagara.Enums.ENiagara_Float4Channel {
        enum ENiagara_Float4Channel { R, G, B, A, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 6b0cdc7dfba8244a9fc353f89a14907300000000
    namespace Niagara.Enums.ENiagara_GPUCollisionType {
        enum ENiagara_GPUCollisionType { "GPU Depth Buffer", "GPU Distance Fields", "GPU Ray Traces (Experimental)", "Analytical Planes", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: a5fca475977a424b996636916de5da3f00000000
    namespace Niagara.Enums.ENiagara_IDAttributes {
        enum ENiagara_IDAttributes { "Particles.UniqueID", "Particles.ID Index", "Particles.ID Acquire Tag", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: f54e9df93ad48041baa25e33c915e77f00000000
    namespace Niagara.Enums.ENiagara_InfiniteLoopDuration {
        enum ENiagara_InfiniteLoopDuration { Fixed, Infinite, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 42b25488717823408e70e1d04a96c07b00000000
    namespace Niagara.Enums.ENiagara_LifetimeInheritanceOptions {
        enum ENiagara_LifetimeInheritanceOptions { Min, Max, Overwrite, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 440dfa5e684a81498020cf784048294000000000
    namespace Niagara.Enums.ENiagara_LifetimeMode {
        enum ENiagara_LifetimeMode { "Direct Set", Random, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 62d7ae284653d34f9a9dada992aafb6000000000
    namespace Niagara.Enums.ENiagara_MassInitializationMode {
        enum ENiagara_MassInitializationMode { "Unset / (Mass of 1)", "Direct Set", Random, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: c41e316b66b98b4aa11029e8da636c5400000000
    namespace Niagara.Enums.ENiagara_MultipleLerpCount {
        enum ENiagara_MultipleLerpCount { ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: b58161bcdb568044b05e6f48dbc3886b00000000
    namespace Niagara.Enums.ENiagara_PositionInitializationMode {
        enum ENiagara_PositionInitializationMode { Unset, "Direct Set", "Simulation Position", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 2b4e9862f84f6a43bc339af33576e2ff00000000
    namespace Niagara.Enums.ENiagara_PositionInput {
        enum ENiagara_PositionInput { "Chaos DI Position", "User Position", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: f8299fc6347dbc4699a4c701001dd18300000000
    namespace Niagara.Enums.ENiagara_SizeScaleMode {
        enum ENiagara_SizeScaleMode { Unset, Uniform, "Random Uniform", "Non-Uniform", "Random Non-Uniform", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 87505aea51f289488e44502a89aa08da00000000
    namespace Niagara.Enums.ENiagara_SpawnBurstMode {
        enum ENiagara_SpawnBurstMode { Timed, Manual, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: b46400a8761c7240b0624744cfb2035500000000
    namespace Niagara.Enums.ENiagara_SpriteRotationMode {
        enum ENiagara_SpriteRotationMode { Unset, Random, "Direct Angle (Degrees)", "Direct Normalized Angle (0-1)", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 8e1ea13037115045bd73c9d1b101f3ee00000000
    namespace Niagara.Enums.ENiagara_SubUVLookupMode {
        enum ENiagara_SubUVLookupMode { Linear, Curve, Random, Infinite, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: fe991d7c0ad4dc4e8398b7dee6244e1d00000000
    namespace Niagara.Enums.ENiagara_SubUVLookupModeV2 {
        enum ENiagara_SubUVLookupModeV2 { Linear, Curve, Random, "Infinite Loop", "Direct Index", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 9b4152a0a2a3f3498fe9f8416f95009300000000
    namespace Niagara.Enums.ENiagara_TransformBaseOptions {
        enum ENiagara_TransformBaseOptions { "Transform Vector", "Transform Position", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 1604e457880986478125d5f6c793e9fa00000000
    namespace Niagara.Enums.ENiagara_TransformMode {
        enum ENiagara_TransformMode { Manual, Matrix, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: d2f53329fd009545830b5eb8db3a688c00000000
    namespace Niagara.Enums.ENiagara_TransformOrientationMode {
        enum ENiagara_TransformOrientationMode { "Yaw/Pitch/Roll", Quaternion, Matrix, "Basis Vectors", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 348c36e88dee804d809bc5f080935eda00000000
    namespace Niagara.Enums.ENiagara_UVFlippingMode {
        enum ENiagara_UVFlippingMode { Unset, "Random X", "Random Y", "Random X / Y", Custom, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 7c04e8cc2fca8e4386989775c0a9e6c100000000
    namespace Niagara.Enums.ENiagara_VelocityInput {
        enum ENiagara_VelocityInput { "Chaos DI Velocity", "User Velocity", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: fdee3e9b26072648886f327f692e317600000000
    namespace Niagara.Enums.ENiagara_WaveformBlendMode {
        enum ENiagara_WaveformBlendMode { Add, Subtract, Multiply, Max, Min, Interpolate, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: b24e47e7c1f16941958aff53cfa9448c00000000
    namespace Niagara.Enums.ENiagara_WaveformCount {
        enum ENiagara_WaveformCount { "[1] One", "[2] Two", "[3] Three", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 1f8254736bc1084796769444a530157700000000
    namespace Niagara.Enums.ENiagara_Waveforms {
        enum ENiagara_Waveforms { Sine, Cosine, "Compound Sin/Cos", Pendulum, Square, Pulse, Triangle, Sawtooth, Random, "Random Blend", "Random Spline", "Random Spline Smooth", "Random Spline Segmented", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: fd28cdca419fa34f8d5dd67563be31da00000000
    namespace Niagara.Enums.ENiagara_WrapClamp {
        enum ENiagara_WrapClamp { Clamp, Wrap, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: c393f0d01cedca41b478d797a202ae5f00000000
    namespace Niagara.Enums.Niagara_Units {
        enum Niagara_Units { Centimeters, Meters, Kilometers, Niagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: b981ddb508f2106cc201521dda5d6b5700b25a25
    namespace BaseMaterial.Materials.Utilities.EColorComponent {
        enum EColorComponent { R, G, B, A, EColorComponent_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: bbaf253716e1f6869082d5b2bb1000f8ceabb536
    namespace BaseMaterial.Materials.Utilities.ENormalFlip {
        enum ENormalFlip { "Don't Flip", "Flip X", "Flip Y", "Flip X & Y", ENormalFlip_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: b3460b819904dab090e4ea38a20cf0d4c7dde2d5
    namespace BaseMaterial.Materials.Utilities.EPlanarAxisIndex {
        enum EPlanarAxisIndex { X, Y, Z, EPlanarAxisIndex_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 6c243730cbc30595a291a76bfb129d02a652da35
    namespace BaseMaterial.Materials.Utilities.ESDFSelect {
        enum ESDFSelect { Capsule, Cube, ESDFSelect_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 891c7ecb1a4d65240aeda2790082f0be6b6331e4
    namespace BaseMaterial.Materials.Utilities.ETriplanarCoordinateFrame {
        enum ETriplanarCoordinateFrame { AbsoluteWorld, InstanceSpace, PeriodicWorld, "PreSkinned/Local", ETriplanarCoordinateFrame_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 0f40d930ce65b75cd5443196cc464b8b53edf666
    namespace BaseMaterial.Materials.Utilities.EUVCoordinateIndex {
        enum EUVCoordinateIndex { "UV 0", "UV 1", "UV 2", "UV 3", EUVCoordinateIndex_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: a8d24e59db28bd4ab113f011ed3a981400000000
    namespace Niagara.Enums.Angles.ENiagara_AngleInput {
        enum ENiagara_AngleInput { Degrees, "Normalized Angle (0-1)", Radians, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: d6b29f0a383e104e99c48d43cb1cad1200000000
    namespace Niagara.Enums.Audio.PlayAudioMode {
        enum PlayAudioMode { "Direct Set", Random, "On Death", PlayAudioMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: c2f5c9b68d06cb459919d062cfb0e49500000000
    namespace Niagara.Enums.CascadeConversion.ECascadeNiagaraOrbitChainMode {
        enum ECascadeNiagaraOrbitChainMode { Add, Scale, Link, NONE, ECascadeNiagaraOrbitChainMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 5b90f111a907254ea5c4b67b083baa7300000000
    namespace Niagara.Enums.CascadeConversion.ECascadeNiagaraTwoVectorChannels {
        enum ECascadeNiagaraTwoVectorChannels { XY, YZ, XZ, ECascadeNiagaraTwoVectorChannels_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 56928219b20e8641a61cd0ed5e5fc53c00000000
    namespace Niagara.Enums.Collision.SceneDepthCollisionQueryMethod {
        enum SceneDepthCollisionQueryMethod { "Scene Depth", "Custom Depth", "Partial Depth", SceneDepthCollisionQueryMethod_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 35b38372d144034796f44a59b78c970b00000000
    namespace Niagara.Enums.Comparison.CompareValues {
        enum CompareValues { "Return Largest", "Return Smallest", CompareValues_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ac799b3cb49fdb489f3f16565242d15700000000
    namespace Niagara.Enums.DistanceFields.ENiagara_BoundsCalculationMethod {
        enum ENiagara_BoundsCalculationMethod { "Emitter Bounds with Padding", "Local Space Bounding Box", "World Space Bounding Box", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 74c0714daabd8142919ae322661d8b7200000000
    namespace Niagara.Enums.DistanceFields.ENiagara_GDFQueryExecutionRate {
        enum ENiagara_GDFQueryExecutionRate { "First Frame", "Every Frame", "On Demand", Never, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4d80b341a5b9d24f8bcd2ba3764fc8ba00000000
    namespace Niagara.Enums.DistanceFields.ENiagara_GlobalVsRigidBodyDistanceFields {
        enum ENiagara_GlobalVsRigidBodyDistanceFields { "Global Distance Field", "Global Distance field + High Quality Rigid Body SDF", "Static Distance Field Volume Texture", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: c2539523d4848c49b2b634712645d4cc00000000
    namespace Niagara.Enums.Events.ENiagara_LocEventType {
        enum ENiagara_LocEventType { "Send Rate", "Send Per Unit Traveled", "Every Frame", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 16ad6444bde3a440ab9817b2987e8e5700000000
    namespace Niagara.Enums.Location.ENiagaraRingDiscMode {
        enum ENiagaraRingDiscMode { Circle, Hexagon, ENiagaraRingDiscMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 06cf9b89c5d8cf488103b3a568a9bf5000000000
    namespace Niagara.Enums.Location.ENiagara_BoxPlaneMode {
        enum ENiagara_BoxPlaneMode { Box, Plane, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: aec4e6781353ae40bfe867f05757b08000000000
    namespace Niagara.Enums.Location.ENiagara_ConeMode {
        enum ENiagara_ConeMode { "Spherical Cone", "Spherical Wedge", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 1f1e470980397243ace36ede67e0b05800000000
    namespace Niagara.Enums.Location.ENiagara_CylinderMode {
        enum ENiagara_CylinderMode { Random, Direct, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 38f7f2043efeb54b92ba3bbbe2ebaa9300000000
    namespace Niagara.Enums.Location.ENiagara_LocationShapes {
        enum ENiagara_LocationShapes { Sphere, Cylinder, "Box / Plane", Torus, "Ring / Disc", Cone, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: b9cbafb88a540843b69f35b79633592500000000
    namespace Niagara.Enums.Ribbons.ENiagara_UnsetDirectSet {
        enum ENiagara_UnsetDirectSet { Unset, "Direct Set", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 19b9f91206ad394c86cc8cfeee6d070200000000
    namespace Niagara.Enums.Ribbons.ENiagara_UnsetDirectSetRandom {
        enum ENiagara_UnsetDirectSetRandom { Unset, "Direct Set", Random, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: c10f16eb5a82da4a8fd2697cdd45cd9800000000
    namespace Niagara.Enums.SpriteRenderer.ENiagara_AutomaticManual {
        enum ENiagara_AutomaticManual { "Automatic (From Renderer SubImage Size)", Manual, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 3ad06dc54708024a9df985c148ae071e00000000
    namespace Niagara.Enums.SpriteRenderer.ENiagara_FPSPlayrate {
        enum ENiagara_FPSPlayrate { "Loops Per Second", "Frames Per Second", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: cb380d6a64c142498ff8c89200a761ef00000000
    namespace Niagara.Enums.SpriteRenderer.ENiagara_ScaleSpriteSize {
        enum ENiagara_ScaleSpriteSize { Uniform, "Uniform Curve", "Non-Uniform", "Non-Uniform Curve", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 31000e1b866fc24faf5528b65d44168700000000
    namespace Niagara.Enums.StaticMesh.ENiagara_MeshLocalBoundsCalcMethod {
        enum ENiagara_MeshLocalBoundsCalcMethod { "Minimum Bounds", "Maximum Bounds", Size, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 858c2581c96d084bb87507f0510c236f00000000
    namespace Niagara.Enums.StaticMesh.ENiagara_StaticSamplingMode {
        enum ENiagara_StaticSamplingMode { Triangles, Sockets, Vertices, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 3a99e5071a66294c9c738f3c8a475e3a00000000
    namespace Niagara.Enums.StaticMesh.ENiagara_StaticSocketMode {
        enum ENiagara_StaticSocketMode { "Random (All Sockets)", "Random (Filtered Sockets)", "Direct (All Sockets)", "Direct (Filtered Sockets)", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: c4c45421b4f8414c85b8a0417ee553ec00000000
    namespace Niagara.Enums.StaticMesh.ENiagara_StaticTriangleMode {
        enum ENiagara_StaticTriangleMode { "Random (All Triangles)", "Random (Section Filter)", "Direct (All Triangles)", "Direct (Section Filter)", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ca5a16c3cc02e846bef9b4d5e78b7a3600000000
    namespace Niagara.Enums.StaticMesh.ENiagara_StaticVertexMode {
        enum ENiagara_StaticVertexMode { "Random Vertex", "Direct Vertex", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: e8b75c78946da94d9263e0e1572d843f00000000
    namespace Niagara.Enums.Transforms.ENiagara_LWCConvertPosToVec {
        enum ENiagara_LWCConvertPosToVec { "Passthrough as a Non Large World Vector", "Convert to Absolute Large World Space", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 9b16760b3a859e4481ed022f1787a84d00000000
    namespace Niagara.Enums.Transforms.ENiagara_LWCConvertVecToPos {
        enum ENiagara_LWCConvertVecToPos { "Passthrough as Non Large World Position", "Interpret as a Large World Position Vector", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: d1970efa5ed6bf3ddb10b0f16eef295c0110139c
    namespace Niagara.Enums.Transforms.ENiagara_MakeQuaternionOptions {
        enum ENiagara_MakeQuaternionOptions { None, "Axis Angle", "Yaw / Pitch / Roll", "XYZ Rotations", "From Axis To Axis", Matrix, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 74d40a187c9f924c89d5e554f62a8a6700000000
    namespace Niagara.Enums.Transforms.ENiagara_MeshOrientationOptions {
        enum ENiagara_MeshOrientationOptions { None, Random, System, "Orient to Vector", "Orient to Matrix", "Orient to Quaternion", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 775bb72321760544975f087f2ddcc5ed00000000
    namespace Niagara.Enums.Transforms.ENiagara_OffsetMode {
        enum ENiagara_OffsetMode { Default, None, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 53e5a4e2c421d041adb015efdea00d3300000000
    namespace Niagara.Enums.Transforms.ENiagara_RotationMode {
        enum ENiagara_RotationMode { Default, "Axis Angle", "Yaw / Pitch / Roll", Quaternion, Matrix, None, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 9c3c2bb45f26734cbe044e8aa476ef4700000000
    namespace Niagara.Enums.Transforms.ENiagara_ScaleMode {
        enum ENiagara_ScaleMode { Default, None, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: e6a195dd2651a24db5875ee89c53e08100000000
    namespace Niagara.Enums.Transforms.ENiagara_TransformOrder {
        enum ENiagara_TransformOrder { "Scale / Rotate / Offset", "Scale / Offset / Rotate", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 3164aff2b39fdf4a81839f2c1eb2826500000000
    namespace Niagara.Enums.Transforms.ENiagara_TransformType {
        enum ENiagara_TransformType { Default, "Custom Matrix", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: d1b980661a07db4fa341443361ab406500000000
    namespace Niagara.Enums.Utility.ENiagaraDebugDrawLineMode {
        enum ENiagaraDebugDrawLineMode { "Start/End Position", Vector, "Direction/Length", ENiagaraDebugDrawLineMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: e14355f7a012164caa2f0f27f51e366000000000
    namespace Niagara.Enums.Utility.ENiagaraDebugDrawMode {
        enum ENiagaraDebugDrawMode { Off, Line, Box, Sphere, ENiagaraDebugDrawMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 1df46e551ec98c45ab5a4eab04ac835c00000000
    namespace Niagara.Enums.Utility.ENiagaraGBufferList {
        enum ENiagaraGBufferList { "Base Color", "Custom Depth", "Custom Stencil", Depth, "Diffuse Color", Metallic, Roughness, "Scene Color", "Screen Velocity", "Shading Model ID", Specular, "World Normal", "World Velocity", ENiagaraGBufferList_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: b21eea7556f87c419ce03e7c76cebdf900000000
    namespace Niagara.Enums.Utility.ENiagaraGBufferQueryType {
        enum ENiagaraGBufferQueryType { Position, "Viewport UV", "Screen UV", ENiagaraGBufferQueryType_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ed983d3c4b00864e97ddcae9062a0c2e00000000
    namespace Niagara.Enums.Utility.ENiagara_CurlNoiseRemapType {
        enum ENiagara_CurlNoiseRemapType { Off, Uniform, "Non-Uniform", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4a9417a5a3b5c44a8987f02936cae0eb00000000
    namespace Niagara.Enums.Utility.ENiagara_DynamicMaterialParametersInputMode {
        enum ENiagara_DynamicMaterialParametersInputMode { Off, Float, "Vector 2D", "Vector + Float", "Vector 4", "Linear Color", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 479b47715612a64c937a01c2592dd3d100000000
    namespace Niagara.Enums.Utility.ENiagara_ImportanceColorMode {
        enum ENiagara_ImportanceColorMode { "RGB Luminance", "RGB Average", "RGB Max", "Individual RGBA Channel", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 45bc6f9c0d7a0e42b3c3561025cbe2aa00000000
    namespace Niagara.Enums.Utility.ENiagara_ImportanceRejectionMode {
        enum ENiagara_ImportanceRejectionMode { "RGB Luminance", "RGB Average", "RGB Max", "R Channel", "G Channel", "B Channel", "A Channel", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: efd9a90d12f7ee4f9e5bac664236ad7300000000
    namespace Niagara.Enums.Utility.ENiagara_IntegerConversion {
        enum ENiagara_IntegerConversion { Truncate, Round, Ceil, Floor, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 2b2fc018d26c41468e003ca94c4eaa3800000000
    namespace Niagara.Enums.Utility.ENiagara_OrientVectorCount {
        enum ENiagara_OrientVectorCount { Facing, "Facing/Up", "Facing/Side", "Facing/Side/Up", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: de0706e204bfb445adb2ce7a6e8889d800000000
    namespace Niagara.Enums.Utility.ENiagara_PartitionMode {
        enum ENiagara_PartitionMode { Alternating, Sequential, "Elapsed Time", Distance, "Float Comparison", Random, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 3d8c6f6b288ed34795d62f70109a6a2700000000
    namespace Niagara.Enums.Utility.ENiagara_PartitionMode_v2 {
        enum ENiagara_PartitionMode_v2 { Alternating, Sequential, "Elapsed Time", Distance, "Float Comparison", Random, "Color Comparison", "Direction Comparison", ENiagara_PartitionMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 998133843baf674fa076c9d9cb0f7d0a00000000
    namespace Niagara.Enums.Utility.ENiagara_SplinePointCount {
        enum ENiagara_SplinePointCount { ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 2ba2c1722d303a47a6f6fe744330cfae00000000
    namespace Niagara.Enums.Utility.ENiagara_TimelineAuthority {
        enum ENiagara_TimelineAuthority { "Play is the Authority", "Rewind is the Authority", Pause, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 123a66e117ca9345b44ea61fbb62613a00000000
    namespace Niagara.Enums.Utility.ENiagara_TImelineMode {
        enum ENiagara_TimelineMode { "Automatic Rewind", "Manual Rewind", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 5aed0dc36337654989ad0fbcbf9db0ee00000000
    namespace Niagara.Enums.Utility.ENiagara_TimelineOutput {
        enum ENiagara_TimelineOutput { None, Float, Vector2D, Vector, "Linear Color", Integer, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 71f28f09ed51874c8df1cc3488a3dcb500000000
    namespace Niagara.Enums.Utility.ENiagara_TimelineOutputMode {
        enum ENiagara_TimelineOutputMode { Array, Curve, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: a16b70347121e24fbcf566f22b7da3d100000000
    namespace Niagara.Enums.Utility.ENiagara_UpdateMeshOrientationMode {
        enum ENiagara_UpdateMeshOrientationMode { "Rotation Rate", "Orient To Vector(s)", "Orient to Position", "Flight Orientation", "Rolling Orientation", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: f72ce2deafb90e4d9463bf43a5630df700000000
    namespace Niagara.Enums.Utility.ENiagara_VelocityMode {
        enum ENiagara_VelocityMode { Linear, "From Point", "In Cone", ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 8f0cd68677b47549aa55d7185a48d0de00000000
    namespace Niagara.Enums.Wind.ENiagaraWindCollisionMode {
        enum ENiagaraWindCollisionMode { None, "From Collision Module", ENiagaraWindCollisionMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 3d6533aba787134a87267c04367338a100000000
    namespace Niagara.Enums.Wind.ENiagaraWindGroundMaskMode {
        enum ENiagaraWindGroundMaskMode { "Direct Set", Landscape, ENiagaraWindGroundMaskMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 31eeb1f563c89b478d824069d53d319800000000
    namespace Niagara.Functions.PivotPainter.PivotPainter16bitTextureAlphaDataTypes {
        enum PivotPainter16bitTextureAlphaDataTypes { "Number of Steps to Root", "Random 0-1", "Origin Extents (16-bit)", "Bounding Box Diameter", "Selection Order (Int as float)", "Normalized 0-1 Hierarchy Position", "Object X Width", "Object Y Depth", "Object Z Height", "Parent Index (Float - Up To 2048)", PivotPainter16bitTextureAlphaDataTypes_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 578b902f3ef46246b93d5559e8ebef6300000000
    namespace Niagara.Functions.PivotPainter.PivotPainter8BitTextureAlphaDataTypes {
        enum PivotPainter8BitTextureAlphaDataTypes { "Normalized 0-1 Hierarchy Position", "Normalized 0-1 Value Per Element", "X Extent Divided by 2048 (2048 max)", "Y Extent Divided by 2048 (2048 max)", "Z Extent Divided by 2048 (2048 max)", PivotPainter8BitTextureAlphaDataTypes_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: a529928060d35d40ba41b6f39f1cebad00000000
    namespace Niagara.Functions.PivotPainter.PivotPainterTextureRGBDataTypes {
        enum PivotPainterTextureRGBDataTypes { "Pivot Position (16-bit)", "Origin Position (16-bit)", "Origin Extents (16-bit)", "X-Vector (8-bit)", "Y-Vector (8-bit)", "Z-Vector (8-bit)", PivotPainterTextureRGBDataTypes_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 920c6b279b36d84685cb2d8c7dc5a59300000000
    namespace Niagara.Modules.Audio.EInitialAudioParamType {
        enum EInitialAudioParamType { Boolean, Integer, Float, EInitialAudioParamType_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 2900d8e64e5c67499790639a84dfd00c00000000
    namespace Engine.ArtTools.RenderToTexture.Enums.RenderToTexture_Enum {
        enum RenderToTexture_Enum { Material, "Unwrapped Mesh", "Depth Map", Lightmaps, "Lightmaps 2-sided", "Flipbook Mesh Animation", "Physics Ground - Tiling Physics Drop of Meshes", "Tiling Material from Hand Placed Meshes", RenderToTexture_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 72948ecd8c9425469be1b69f4a0f56c400000000
    namespace Engine.ArtTools.RenderToTexture.Enums.RenderToTexture_Flipbook_Enum {
        enum RenderToTexture_Flipbook_Enum { "Simple Mesh rotation", "Material Instance Interpolation", "Both Mesh rotation and Material Instance Interpolation", RenderToTexture_Flipbook_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 34a1fab53eb51049803d11801385b17500000000
    namespace Engine.ArtTools.RenderToTexture.Enums.RenderToTexture_Imposter_Enum {
        enum RenderToTexture_Imposter_Enum { "Full 3D Imposter", "Single Rotation Axis", RenderToTexture_Imposter_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 05c56b39bfd9304c9fb80b12e57ccf2500000000
    namespace Engine.EditorResources.FieldNodes._Resources.EFieldActivationType {
        enum EFieldActivationType { Delay, OnTick, OnTickWithDelay, Trigger, EFieldActivationType_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 835fbf01752b3642a5efc2f0e5afca8100000000
    namespace Engine.EditorResources.FieldNodes._Resources.EFieldForceVel {
        enum EFieldForceVel { "Use Force", "Use Velocity", EFieldForceVel_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 7361bdf21180c742b1699aca077d68a900000000
    namespace Engine.EditorResources.FieldNodes._Resources.EFieldNoiseCompMode {
        enum EFieldNoiseCompMode { Add, Multiply, EFieldNoiseCompMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 0ab453c5d6610849b6f17116eb87b7a300000000
    namespace Engine.EditorResources.FieldNodes._Resources.EFieldSleepType {
        enum EFieldSleepType { Sleep, Disable, Kill, EFieldSleepType_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 2b22d2f2d083d448b98e5b9d326a336700000000
    namespace Niagara.Enums.ENiagaraCoordinateSpace {
        enum ENiagaraCoordinateSpace { Simulation, World, Local, ENiagaraCoordinateSpace_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 861bc8f0c148614ea4a8f5ad63a4422600000000
    namespace Niagara.Enums.ENiagaraNumericVariableTypes {
        enum ENiagaraNumericVariableTypes { Float, "Vector 2D", "Vector 3D", "Vector 4D", "Linear Color", Quaternion, Position, ENiagaraNumericVariableTypes_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 0afd46b8752d3e4eaa7fb6463ad6f0bf00000000
    namespace Niagara.Enums.ENiagaraOrientationAxis {
        enum ENiagaraOrientationAxis { "X Axis", "Y Axis", "Z Axis", ENiagaraOrientationAxis_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: fdf113e77fdf1f43936ee7523aa725a900000000
    namespace Niagara.Enums.ENiagaraRegionCoordinateSpace {
        enum ENiagaraRegionCoordinateSpace { World, Local, ENiagaraRegionCoordinateSpace_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 6df9a5ca18fb544ba50e214773db627200000000
    namespace Niagara.Enums.ENiagaraRegionTransformOrder {
        enum ENiagaraRegionTransformOrder { "Offset-Rotation", "Rotation-Offset", ENiagaraRegionTransformOrder_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 54ebb4dda52e4c41ac72184a9696bb2800000000
    namespace Niagara.Enums.ENiagara_RotationDefinitionApproach {
        enum ENiagara_RotationDefinitionApproach { Euler, Quaternion, "Axis Angle ", "Basis Vectors", Matrix, ENiagara_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 29c9cba07f7b784b93a07db0b7ce337300000000
    namespace Niagara.Enums.Masks.ENiagaraDebugDrawShape {
        enum ENiagaraDebugDrawShape { Sphere, Box, Plane, Slab, ENiagaraDebugDrawShape_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 7fca84d95fdadd4588d01e56704cdaa000000000
    namespace Niagara.Enums.Masks.ENiagaraRegionMaskValue {
        enum ENiagaraRegionMaskValue { Float, Vector2D, Vector, "Linear Color", ENiagaraRegionMaskValue_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: f05272f150eef845b3db1a920697a3c400000000
    namespace Niagara.Enums.Recycle.ENiagaraRecycleAttributeMode {
        enum ENiagaraRecycleAttributeMode { "No Change", "Initial Value", Set, ENiagaraRecycleAttributeMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 2487d0ef79203349910587881df3ec9100000000
    namespace Niagara.Enums.Recycle.ENiagaraRecycleColorMode {
        enum ENiagaraRecycleColorMode { "No Change", "Initial Value", Set, "Random Range", "Random Hue/Saturation/Value", ENiagaraRecycleColorMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: a3f60c18f851f3468e653bbd7290778d00000000
    namespace Niagara.Enums.Recycle.ENiagaraRecycleLifetimeMode {
        enum ENiagaraRecycleLifetimeMode { "No Change", "Initial Value", Set, Random, ENiagaraRecycleLifetimeMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: beac2303ac21fe479f32fca4a62017eb00000000
    namespace Niagara.Enums.Recycle.ENiagaraRecycleMassMode {
        enum ENiagaraRecycleMassMode { "No Change", "Initial Value", Set, Random, ENiagaraRecycleMassMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: b0afad28805f8e4e93d04c28e7efef3400000000
    namespace Niagara.Enums.Recycle.ENiagaraRecycleRendererType {
        enum ENiagaraRecycleRendererType { "Set (Diameter)", Sprite, Mesh, ENiagaraRecycleRendererType_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 29664d40a03a074d818dae5b5fd6d3fc00000000
    namespace Niagara.Enums.Recycle.ENiagaraRecycleSpriteRotationMode {
        enum ENiagaraRecycleSpriteRotationMode { "No Change", "Initial Value", Random, "Direct Angle (Degrees)", "Direct Normalized Angle (0-1)", ENiagaraRecycleSpriteRotationMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ec4544aed7453a41b7734d69dec0493c00000000
    namespace Niagara.Enums.Recycle.ENiagaraRecycleSpriteSizeMode {
        enum ENiagaraRecycleSpriteSizeMode { "No Change", "Initial Value", Uniform, "Random Uniform", "Non-Uniform", "Random Non-Uniform", ENiagaraRecycleSpriteSizeMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 0d5755d271e90c4ba4d1daea4f2f456200000000
    namespace Niagara.Enums.Wind.ENiagaraWindCombingMode {
        enum ENiagaraWindCombingMode { None, "Surface Distance", ENiagaraWindCombingMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 036fc09e1a966c449e284c0a75aee55200000000
    namespace Niagara.Enums.Wind.ENiagaraWindFrictionDistanceMode {
        enum ENiagaraWindFrictionDistanceMode { "Distance Limit", "Falloff Start / End", ENiagaraWindFrictionDistanceMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: e0e844bbb4f821458cb734901bda421200000000
    namespace Niagara.Enums.Wind.ENiagaraWindFrictionMode {
        enum ENiagaraWindFrictionMode { None, "Surface Distance", ENiagaraWindFrictionMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: b30cbb0f31bfe64f957c997d4257192400000000
    namespace Niagara.Enums.Wind.ENiagaraWindOffsetMode {
        enum ENiagaraWindOffsetMode { None, "Direct Set", "Time Offset", ENiagaraWindOffsetMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: d60ab24eb976f94db7c1253c3a13829900000000
    namespace Niagara.Enums.Wind.ENiagaraWindTurbulenceContributionMode {
        enum ENiagaraWindTurbulenceContributionMode { "Direct Set", "Speed Range", "Speed Range Curve", ENiagaraWindTurbulenceContributionMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: dfb298d1703eb947bc613cb3f60d471800000000
    namespace Niagara.Enums.Wind.ENiagaraWindTurbulenceFrequencyMode {
        enum ENiagaraWindTurbulenceFrequencyMode { Constant, Varying, ENiagaraWindTurbulenceFrequencyMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 6308850e2fc47746b032dc59bda7cf8300000000
    namespace Niagara.Enums.Wind.ENiagaraWindTurbulenceMode {
        enum ENiagaraWindTurbulenceMode { None, "Curl Noise", ENiagaraWindTurbulenceMode_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: a07dcfd302786b4183eb586ab1bd062d00000000
    namespace Engine.EditorResources.FieldNodes._Resources.EFieldShapeType {
        enum EFieldShapeType { Box, Sphere, Plane, EFieldShapeType_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 1e4260c69bfdb82b124a7d9defb677c6817f3456
    namespace Game.Template.WBP_Main {
        class WBP_Main_C extends UE.UserWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            /*
             *返回模块路径，如果没有export default，那么需要指定类名，比如 "._GameModule:MyClass"
             */
            GetJavaScriptModule() : string;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): WBP_Main_C;
            static Load(InName: string): WBP_Main_C;
        
            __tid_WBP_Main_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: f9d3857deb829143b7ed4543ac9a674600000000
    namespace ChaosVD.BP_CVD_SkySphere {
        class BP_CVD_SkySphere_C extends UE.Engine.EngineSky.BP_Sky_Sphere.BP_Sky_Sphere_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            ExecuteUbergraph_BP_CVD_SkySphere(EntryPoint: number) : void;
            Refresh() : void;
            Refresh_EditorOnly() : void;
            SetDirectionalLightSource(NewLightSource: $Nullable<UE.DirectionalLight>) : void;
            SetDirectionalLightSource_EditorOnly(NewLightSource: $Nullable<UE.DirectionalLight>) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_CVD_SkySphere_C;
            static Load(InName: string): BP_CVD_SkySphere_C;
        
            __tid_BP_CVD_SkySphere_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 330ee8cf78a6a0489ea7237eeb77fd8d00000000
    namespace AudioWidgets.SubmixEffects.SubmixEffectDelayPresetWidget {
        class SubmixEffectDelayPresetWidget_C extends UE.UserWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            LargeKnobTimeInterp: UE.AudioWidgets.AudioKnobLarge.AudioKnobLarge.AudioKnobLarge_C;
            LargeKnobDelayMax: UE.AudioWidgets.AudioKnobLarge.AudioKnobLarge.AudioKnobLarge_C;
            LargeKnobDelay: UE.AudioWidgets.AudioKnobLarge.AudioKnobLarge.AudioKnobLarge_C;
            Preset: UE.SubmixEffectDelayPreset;
            BndEvt__LargeKnobDelay_K2Node_ComponentBoundEvent_0_OnControlValueChanged__DelegateSignature(NewValue: number) : void;
            BndEvt__LargeKnobDelayMax_K2Node_ComponentBoundEvent_1_OnControlValueChanged__DelegateSignature(NewValue: number) : void;
            BndEvt__LargeKnobTimeInterp_K2Node_ComponentBoundEvent_2_OnControlValueChanged__DelegateSignature(NewValue: number) : void;
            ExecuteUbergraph_SubmixEffectDelayPresetWidget(EntryPoint: number) : void;
            /*
             *Returns the class of Preset the widget supports
             */
            GetClass() : UE.Class;
            /**
             * @deprecated Unsupported super overloads.
             */
            GetClass() : Class;
            GetEditorName() : string;
            GetIconBrushName() : string;
            /*
             *Called when the preset widget is constructed
             */
            OnConstructed(Preset: $Nullable<UE.SoundEffectPreset>) : void;
            OnPresetUpdated(Selection: string) : void;
            /*
             *Called when the preset object is changed
             */
            OnPropertyChanged(Preset: $Nullable<UE.SoundEffectPreset>, PropertyName: string) : void;
            SetDelayLength(DelayLength: number) : void;
            SetDelayMaxLength(DelayLengthMax: number) : void;
            SetInterpTime(InterpTime: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): SubmixEffectDelayPresetWidget_C;
            static Load(InName: string): SubmixEffectDelayPresetWidget_C;
        
            __tid_SubmixEffectDelayPresetWidget_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 405146c83b9108418762ea07006687b200000000
    namespace AudioWidgets.AudioTextBox.AudioTextBox {
        class AudioTextBox_C extends UE.UserWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ValueTextBox: UE.EditableText;
            UnitsText: UE.EditableText;
            TextLayer01: UE.Image;
            UnitText: string;
            Get_UnitsText_Text() : string;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AudioTextBox_C;
            static Load(InName: string): AudioTextBox_C;
        
            __tid_AudioTextBox_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 93c6d923367b5548828f8840a20050b400000000
    namespace AudioWidgets.AudioKnobSmall.AudioKnobSmall {
        class AudioKnobSmall_C extends UE.UserWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            ValueTextBox: UE.EditableText;
            UnitsText: UE.EditableText;
            TextLayer01: UE.Image;
            LabelTextBox: UE.TextBlock;
            KnobSlider: UE.RadialSlider;
            KnobLayer02: UE.Image;
            KnobLayer01: UE.Image;
            Background: UE.Image;
            Units: string;
            ToolTip: string;
            Label: string;
            MaxIntegralDigits: number;
            MaxFractionalDigits: number;
            DisplayMin: string;
            DisplayMax: string;
            ControlValueNormalized: number;
            ControlValueMin: number;
            ControlValueMax: number;
            OnControlValueChanged: $MulticastDelegate<(NewValue: number) => void>;
            ControlValue: number;
            BndEvt__KnobSlider_K2Node_ComponentBoundEvent_2_OnFloatValueChangedEvent__DelegateSignature(Value: number) : void;
            BndEvt__ValueTextBox_K2Node_ComponentBoundEvent_0_OnEditableTextCommittedEvent__DelegateSignature(Text: string, CommitMethod: UE.ETextCommit) : void;
            /*
             *Called after the underlying slate widget is constructed.  Depending on how the slate object is used
             *this event may be called multiple times due to adding and removing from the hierarchy.
             *If you need a true called-once-when-created event, use OnInitialized.
             */
            Construct() : void;
            ExecuteUbergraph_AudioKnobSmall(EntryPoint: number) : void;
            OnControlValueChanged__DelegateSignature(NewValue: number) : void;
            SetNewValue(NewValue: number, Normalized: boolean, UpdateText: boolean) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AudioKnobSmall_C;
            static Load(InName: string): AudioKnobSmall_C;
        
            __tid_AudioKnobSmall_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 1a07c5a2f328f44abcfa4d962ee7530400000000
    namespace AudioWidgets.AudioKnobLarge.AudioKnobLarge {
        class AudioKnobLarge_C extends UE.UserWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            ValueTextBox: UE.EditableText;
            UnitsText: UE.EditableText;
            Slider: UE.RadialSlider;
            Layer02: UE.Image;
            Layer01: UE.Image;
            Layer00: UE.Image;
            LabelTextBox: UE.TextBlock;
            DisplayMinTextBox: UE.TextBlock;
            DisplayMaxTextBox: UE.TextBlock;
            Units: string;
            ToolTip: string;
            Label: string;
            MaxIntegralDigits: number;
            MaxFractionalDigits: number;
            DisplayMin: string;
            DisplayMax: string;
            ControlValueNormalized: number;
            ControlValueMin: number;
            ControlValueMax: number;
            OnControlValueChanged: $MulticastDelegate<(NewValue: number) => void>;
            ControlValue: number;
            BndEvt__Slider_K2Node_ComponentBoundEvent_2_OnFloatValueChangedEvent__DelegateSignature(Value: number) : void;
            BndEvt__ValueTextBox_K2Node_ComponentBoundEvent_0_OnEditableTextCommittedEvent__DelegateSignature(Text: string, CommitMethod: UE.ETextCommit) : void;
            /*
             *Called after the underlying slate widget is constructed.  Depending on how the slate object is used
             *this event may be called multiple times due to adding and removing from the hierarchy.
             *If you need a true called-once-when-created event, use OnInitialized.
             */
            Construct() : void;
            ExecuteUbergraph_AudioKnobLarge(EntryPoint: number) : void;
            OnControlValueChanged__DelegateSignature(NewValue: number) : void;
            SetNewValue(NewValue: number, Normalized: boolean, UpdateText: boolean) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AudioKnobLarge_C;
            static Load(InName: string): AudioKnobLarge_C;
        
            __tid_AudioKnobLarge_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 442a9c318f5fa34584707c9dceeaa72c00000000
    namespace AudioWidgets.AudioFader.AudioFader {
        class AudioFader_C extends UE.UserWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            SliderShadow: UE.Image;
            Slider: UE.Slider;
            AudioTextBox: UE.AudioWidgets.AudioTextBox.AudioTextBox.AudioTextBox_C;
            ["Minimum Integral Digits"]: number;
            ["Maximum Integral Digits"]: number;
            ["Minimum Fractional Digits"]: number;
            ["Maximum Fractional Digits"]: number;
            OnValueChanged: $MulticastDelegate<(NewValue: number) => void>;
            LinToDbCurve: UE.CurveFloat;
            DbToLinCurve: UE.CurveFloat;
            BndEvt__Slider_K2Node_ComponentBoundEvent_0_OnFloatValueChangedEvent__DelegateSignature(Value: number) : void;
            /*
             *Called after the underlying slate widget is constructed.  Depending on how the slate object is used
             *this event may be called multiple times due to adding and removing from the hierarchy.
             *If you need a true called-once-when-created event, use OnInitialized.
             */
            Construct() : void;
            ExecuteUbergraph_AudioFader(EntryPoint: number) : void;
            GetDbValue(LinValue: number, DbValue: $Ref<number>) : void;
            GetLinValue(DbValue: number, LinValue: $Ref<number>) : void;
            OnTextCommitted(Text: string, CommitMethod: UE.ETextCommit) : void;
            OnValueChanged__DelegateSignature(NewValue: number) : void;
            SetTextValue(NewValue: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AudioFader_C;
            static Load(InName: string): AudioFader_C;
        
            __tid_AudioFader_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 65478f8282197d46a8bec00731fa43cc00000000
    namespace AudioWidgets.AudioButtonToggle.AudioButtonToggle {
        class AudioButtonToggle_C extends UE.UserWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            WidgetSwitchRightCurveTop: UE.WidgetSwitcher;
            WidgetSwitchRightCurveBottom: UE.WidgetSwitcher;
            WidgetSwitchLeftTop: UE.WidgetSwitcher;
            WidgetSwitchLeftBottom: UE.WidgetSwitcher;
            ValueText: UE.TextBlock;
            TextBorder: UE.Border;
            RightCurveTop: UE.Image;
            RightCurveBottom: UE.Image;
            RightBoxTop: UE.Image;
            RightBoxBottom: UE.Image;
            LeftCurveTop: UE.Image;
            LeftCurveBottom: UE.Image;
            LeftBoxTop: UE.Image;
            LeftBoxBottom: UE.Image;
            Button01: UE.Button;
            OnSelected: $MulticastDelegate<(Button: $Nullable<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>) => void>;
            TextValue: string;
            TextColor: UE.SlateColor;
            TextColorSelected: UE.SlateColor;
            BackgroundColor: UE.LinearColor;
            BackgroundColorSelected: UE.LinearColor;
            OnDeselected: $MulticastDelegate<(Button: $Nullable<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>) => void>;
            CurveTopLeft: boolean;
            CurveTopRight: boolean;
            CurveBottomLeft: boolean;
            CurveBottomRight: boolean;
            Selected: boolean;
            BndEvt__Button01_K2Node_ComponentBoundEvent_0_OnButtonClickedEvent__DelegateSignature() : void;
            /*
             *Called after the underlying slate widget is constructed.  Depending on how the slate object is used
             *this event may be called multiple times due to adding and removing from the hierarchy.
             *If you need a true called-once-when-created event, use OnInitialized.
             */
            Construct() : void;
            ExecuteUbergraph_AudioButtonToggle(EntryPoint: number) : void;
            GetIsSelected(IsSelected: $Ref<boolean>) : void;
            OnDeselected__DelegateSignature(Button: $Nullable<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>) : void;
            OnSelected__DelegateSignature(Button: $Nullable<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>) : void;
            /*
             *Called by both the game and the editor.  Allows users to run initial setup for their widgets to better preview
             *the setup in the designer and since generally that same setup code is required at runtime, it's called there
             *as well.
             *
             ***WARNING**
             *This is intended purely for cosmetic updates using locally owned data, you can not safely access any game related
             *state, if you call something that doesn't expect to be run at editor time, you may crash the editor.
             *
             *In the event you save the asset with blueprint code that causes a crash on evaluation.  You can turn off
             *PreConstruct evaluation in the Widget Designer settings in the Editor Preferences.
             */
            PreConstruct(IsDesignTime: boolean) : void;
            RefreshCorners() : void;
            SetBackgroundColor(NewColor: UE.LinearColor) : void;
            SetDeselected() : void;
            SetSelected(ReportEvent: boolean) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AudioButtonToggle_C;
            static Load(InName: string): AudioButtonToggle_C;
        
            __tid_AudioButtonToggle_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: f59193aabd65564ab3a6c82d970eb43500000000
    namespace AudioWidgets.AudioButtonMatrix.AudioButtonMatrixColumn {
        class AudioButtonMatrixColumn_C extends UE.UserWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ButtonVerticalBox: UE.VerticalBox;
            AddButton(AudioButtonToggle: $Nullable<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>) : void;
            ClearButtons() : void;
            GetButtonAt(Index: number, Button: $Ref<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>) : void;
            GetButtons(ChildButtons: $Ref<TArray<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>>) : void;
            GetNumButtons(NumButtons: $Ref<number>) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AudioButtonMatrixColumn_C;
            static Load(InName: string): AudioButtonMatrixColumn_C;
        
            __tid_AudioButtonMatrixColumn_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4a9ca99f1436f84ba9d8d3e75a0d9e7100000000
    namespace AudioWidgets.AudioButtonMatrix.AudioButtonMatrix {
        class AudioButtonMatrix_C extends UE.UserWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            TitleText: UE.TextBlock;
            HorizontalButtonBox: UE.HorizontalBox;
            DisplayName: string;
            Tooltip: string;
            Values: TArray<string>;
            NumColumns: number;
            ExclusiveSelection: boolean;
            OnMultiSelectionChanged: $MulticastDelegate<(SelectedButtons: $Ref<TArray<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>>) => void>;
            OnExclusiveSelectionChanged: $MulticastDelegate<(Selection: $Nullable<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>) => void>;
            LastExclusive: UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C;
            AddAudioButton(Text: string, ColumnIndex: number, ButtonEnabled: boolean, Button: $Ref<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>) : void;
            /*
             *Called after the underlying slate widget is constructed.  Depending on how the slate object is used
             *this event may be called multiple times due to adding and removing from the hierarchy.
             *If you need a true called-once-when-created event, use OnInitialized.
             */
            Construct() : void;
            CreateStubButtons() : void;
            ExecuteUbergraph_AudioButtonMatrix(EntryPoint: number) : void;
            GetOrAddVerticalBox(ColumnIndex: number, MatrixColumn: $Ref<UE.AudioWidgets.AudioButtonMatrix.AudioButtonMatrixColumn.AudioButtonMatrixColumn_C>) : void;
            OnExclusiveSelectionChanged__DelegateSignature(Selection: $Nullable<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>) : void;
            OnMultiSelectionChanged__DelegateSignature(SelectedButtons: $Ref<TArray<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>>) : void;
            /*
             *Called by both the game and the editor.  Allows users to run initial setup for their widgets to better preview
             *the setup in the designer and since generally that same setup code is required at runtime, it's called there
             *as well.
             *
             ***WARNING**
             *This is intended purely for cosmetic updates using locally owned data, you can not safely access any game related
             *state, if you call something that doesn't expect to be run at editor time, you may crash the editor.
             *
             *In the event you save the asset with blueprint code that causes a crash on evaluation.  You can turn off
             *PreConstruct evaluation in the Widget Designer settings in the Editor Preferences.
             */
            PreConstruct(IsDesignTime: boolean) : void;
            SetButtonDeselected_EventPrivate(Button: $Nullable<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>) : void;
            SetButtonSelected_EventPrivate(Button: $Nullable<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>) : void;
            SetButtonSelectedPrivate(Button: $Nullable<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>) : void;
            SetSelected(Row: number, Column: number) : void;
            SetSelectedByArrayIndex(Index: number) : void;
            SetSelectionChangedPrivate(NewSelection: $Nullable<UE.AudioWidgets.AudioButtonToggle.AudioButtonToggle.AudioButtonToggle_C>, ReportDeselected: boolean) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AudioButtonMatrix_C;
            static Load(InName: string): AudioButtonMatrix_C;
        
            __tid_AudioButtonMatrix_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 89cc37195288aa4085e6e89dbfdd4aed00000000
    namespace DatasmithContent.Materials.StdDecal.BP_DecalTestPOM {
        class BP_DecalTestPOM_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            Decal: UE.DecalComponent;
            DefaultSceneRoot: UE.SceneComponent;
            PreviousRotation: UE.Rotator;
            Decal_MD: UE.MaterialInstanceDynamic;
            DecalMaterialInstance: UE.MaterialInstance;
            AssignNewDecalMaterial() : void;
            ExecuteUbergraph_BP_DecalTestPOM(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            UpdateDynamicDecalMaterial(Force: boolean) : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_DecalTestPOM_C;
            static Load(InName: string): BP_DecalTestPOM_C;
        
            __tid_BP_DecalTestPOM_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: e5977b97afe353468f26b570cfc017e000000000
    namespace DatasmithContent.Datasmith.DatasmithSelector {
        class DatasmithSelector_C extends UE.DatasmithContent.Datasmith.DatasmithLayer.DatasmithLayer_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            SelectedId: number;
            ExecuteUbergraph_DatasmithSelector(EntryPoint: number) : void;
            UpdateHierarchy(Enable: boolean) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): DatasmithSelector_C;
            static Load(InName: string): DatasmithSelector_C;
        
            __tid_DatasmithSelector_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 783178086b16c041b9fbbb58d86ca3ef00000000
    namespace DatasmithContent.Datasmith.DatasmithLayer {
        class DatasmithLayer_C extends UE.SceneComponent {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            EnableHierarchy: boolean;
            ExecuteUbergraph_DatasmithLayer(EntryPoint: number) : void;
            /*
             *Event called every frame if tick is enabled
             */
            ReceiveTick(DeltaSeconds: number) : void;
            UpdateChildStaticMeshVisibility(Enable: boolean, StaticMesh: $Nullable<UE.StaticMeshComponent>) : void;
            UpdateHierarchy(Enable: boolean) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): DatasmithLayer_C;
            static Load(InName: string): DatasmithLayer_C;
        
            __tid_DatasmithLayer_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 8bfb9e9044dcc44e9f75cbed7612c02b00000000
    namespace DatasmithContent.Datasmith.DatasmithArealightMesh {
        class DatasmithAreaLightMesh_C extends UE.DatasmithAreaLightActor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            DefaultSceneRoot: UE.SceneComponent;
            NewVar_0: TArray<string>;
            LightColor(Intensity: number, Color: UE.LinearColor, Emissive: $Ref<UE.LinearColor>) : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): DatasmithAreaLightMesh_C;
            static Load(InName: string): DatasmithAreaLightMesh_C;
        
            __tid_DatasmithAreaLightMesh_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: a20cd1a8fdaa86489f9bc0408bd4962100000000
    namespace DatasmithContent.Datasmith.DatasmithAreaLight {
        class DatasmithAreaLight_C extends UE.DatasmithAreaLightActor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            DefaultSceneRoot: UE.SceneComponent;
            IndirectIntensity: number;
            VolumetricScatteringIntensity: number;
            SpecularScale: number;
            ShadowBias: number;
            ["Cast Shadows"]: boolean;
            LightColor(Intensity: number, Color: UE.LinearColor, Emissive: $Ref<UE.LinearColor>) : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): DatasmithAreaLight_C;
            static Load(InName: string): DatasmithAreaLight_C;
        
            __tid_DatasmithAreaLight_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 5bc8026450bddc47ad787b0ce9ea66e700000000
    namespace DatasmithContent.Datasmith.DatasmithActor {
        class DatasmithActor_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            SceneRoot: UE.SceneComponent;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): DatasmithActor_C;
            static Load(InName: string): DatasmithActor_C;
        
            __tid_DatasmithActor_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 1be3adc4f4d8724487601f4f8b4fca3d00000000
    namespace DatasmithContent.Blueprints.FBXImporter.UI.AnimationSampleUI {
        class AnimationSampleUI_C extends UE.EditorUtilityWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            AnimResetButton: UE.Button;
            AnimPlayerCombobox: UE.ComboBoxString;
            AnimPlayButton: UE.Button;
            AnimClipCombobox: UE.ComboBoxString;
            AnimationPlayerHorizontalBox: UE.HorizontalBox;
            AnimationClipHorizontalBox: UE.HorizontalBox;
            AnimationButtonsHorizontalBox: UE.HorizontalBox;
            ImportedSequencesHelpersNamesToObj: TMap<string, UE.DatasmithContent.Blueprints.FBXImporter.Animation.ImportedSequencesHelper.ImportedSequencesHelper_C>;
            SelectedImportedSequencesHelper: UE.DatasmithContent.Blueprints.FBXImporter.Animation.ImportedSequencesHelper.ImportedSequencesHelper_C;
            SpawnedLevelSequenceActor: UE.LevelSequenceActor;
            SelectedSequence: UE.LevelSequence;
            BndEvt__AnimClipCombobox_K2Node_ComponentBoundEvent_0_OnSelectionChangedEvent__DelegateSignature(SelectedItem: string, SelectionType: UE.ESelectInfo) : void;
            BndEvt__AnimPlayButton_K2Node_ComponentBoundEvent_2_OnButtonClickedEvent__DelegateSignature() : void;
            BndEvt__AnimPlayerCombobox_K2Node_ComponentBoundEvent_0_OnSelectionChangedEvent__DelegateSignature(SelectedItem: string, SelectionType: UE.ESelectInfo) : void;
            BndEvt__AnimResetButton_K2Node_ComponentBoundEvent_3_OnButtonClickedEvent__DelegateSignature() : void;
            /*
             *Called after the underlying slate widget is constructed.  Depending on how the slate object is used
             *this event may be called multiple times due to adding and removing from the hierarchy.
             *If you need a true called-once-when-created event, use OnInitialized.
             */
            Construct() : void;
            ExecuteUbergraph_AnimationSampleUI(EntryPoint: number) : void;
            /*
             *Returns the LevelSequenceActor for the scene. Will spawn a new one if needed. Note: This requires SelectedImportedSequencesHelper to be valid and have at least one LevelSequence
             */
            GetLevelSequenceActor(Actor: $Ref<UE.LevelSequenceActor>) : void;
            /*
             *Resets the playback position to start. Taking advantage of the fact that we set all our LevelSequences to CompletionMode 'KeepState', this will actually scrub back from the end to frame zero, properly resettting all actors.
             */
            RewindAnimationToStart(Player: $Nullable<UE.LevelSequencePlayer>) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AnimationSampleUI_C;
            static Load(InName: string): AnimationSampleUI_C;
        
            __tid_AnimationSampleUI_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 67ed0b60756adf4796dd99af839ec93d00000000
    namespace DatasmithContent.Blueprints.FBXImporter.Animation.ImportedSequencesHelper {
        class ImportedSequencesHelper_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            DefaultSceneRoot: UE.SceneComponent;
            ImportedSequences: TArray<UE.LevelSequence>;
            SampleUIClass: UE.Class;
            SceneAsset: UE.Object;
            /*
             *Add a sample UI that can be used to play imported level sequences
             */
            AddAnimationSampleUI() : void;
            /*
             *Remove the sample UI
             */
            RemoveAnimationSampleUI() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ImportedSequencesHelper_C;
            static Load(InName: string): ImportedSequencesHelper_C;
        
            __tid_ImportedSequencesHelper_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 6966e694bbbfa441a5379a2fc918990200000000
    namespace ChaosNiagara.ChaosDestructionListenerActor {
        class ChaosDestructionListenerActor_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            ChaosDestructionListener: UE.ChaosDestructionListener;
            DefaultSceneRoot: UE.SceneComponent;
            BndEvt__ChaosDestructionListener_K2Node_ComponentBoundEvent_0_OnChaosCollisionEvents__DelegateSignature(CollisionEvents: TArray<UE.ChaosCollisionEventData>) : void;
            BndEvt__ChaosDestructionListener_K2Node_ComponentBoundEvent_1_OnChaosBreakingEvents__DelegateSignature(BreakingEvents: TArray<UE.ChaosBreakingEventData>) : void;
            BndEvt__ChaosDestructionListener_K2Node_ComponentBoundEvent_2_OnChaosTrailingEvents__DelegateSignature(TrailingEvents: TArray<UE.ChaosTrailingEventData>) : void;
            ExecuteUbergraph_ChaosDestructionListenerActor(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ChaosDestructionListenerActor_C;
            static Load(InName: string): ChaosDestructionListenerActor_C;
        
            __tid_ChaosDestructionListenerActor_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 9931f3b3614ec2409332087757f50ce900000000
    namespace GeometryCollectionPlugin.BP_GeometryCollectionPreview {
        class BP_GeometryCollectionPreview_C extends UE.ChaosSolverActor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            GeometryCollectionComponent: UE.GeometryCollectionComponent;
            DataflowAsset: UE.GeometryCollection;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_GeometryCollectionPreview_C;
            static Load(InName: string): BP_GeometryCollectionPreview_C;
        
            __tid_BP_GeometryCollectionPreview_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 00f9721fcb8b5bb21732dad42e810668468458cc
    namespace HairStrands.BP_PreviewGroom {
        class BP_PreviewGroom_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            BodyMesh: UE.SkeletalMeshComponent;
            GroomStrands: UE.GroomComponent;
            GroomSolver: UE.GroomSolverComponent;
            DefaultSceneRoot: UE.SceneComponent;
            DataflowAsset: UE.GroomAsset;
            BindingAsset: UE.GroomBindingAsset;
            AnimationAsset: UE.AnimSequence;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_PreviewGroom_C;
            static Load(InName: string): BP_PreviewGroom_C;
        
            __tid_BP_PreviewGroom_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 729a4ea05d60454d8326065c6be552ba00000000
    namespace Engine.ArtTools.RenderToTexture.Blueprints.RenderToTexture_Game {
        class RenderToTexture_Game_C extends UE.GameMode {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            DefaultSceneRoot: UE.SceneComponent;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RenderToTexture_Game_C;
            static Load(InName: string): RenderToTexture_Game_C;
        
            __tid_RenderToTexture_Game_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: cefae39b9faca2438d101f6c376c965500000000
    namespace Engine.ArtTools.RenderToTexture.Blueprints.RenderToTexture_LevelBP {
        class RenderToTexture_LevelBP_C extends UE.Pawn {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            ["BottomCollision-LargeMeshesOnly"]: UE.BoxComponent;
            ["SceneCapture Motion Position 1"]: UE.SceneCaptureComponent2D;
            TopOutline: UE.BoxComponent;
            PreviewMesh: UE.StaticMeshComponent;
            TilingPreviewCapture: UE.SceneCaptureComponent2D;
            BottomCollision: UE.BoxComponent;
            Box5: UE.BoxComponent;
            Box4: UE.BoxComponent;
            Box3: UE.BoxComponent;
            Box2: UE.BoxComponent;
            PlaneMesh: UE.StaticMeshComponent;
            Debug: UE.TextRenderComponent;
            Camera1: UE.CameraComponent;
            Root: UE.StaticMeshComponent;
            RotationArray: TArray<UE.Rotator>;
            ["Render Type"]: UE.Engine.ArtTools.RenderToTexture.Enums.RenderToTexture_Enum.RenderToTexture_Enum;
            ["Viewport size (see Tooltip)"]: number;
            ResolutionMultiplier: number;
            BaseColor: boolean;
            Specular: boolean;
            Metallic: boolean;
            Normal: boolean;
            Opacity: boolean;
            Roughness: boolean;
            AmbientOcclusion: boolean;
            MaterialAmbientOcclusion: boolean;
            ["Decal Mask"]: boolean;
            ["Lighting Only"]: boolean;
            ["Subsurface Color"]: boolean;
            ["Imposter Static Mesh"]: UE.StaticMesh;
            BufferCommands: string;
            ResCommand: string;
            SheetSize: number;
            ShotCommand: string;
            MeshScale: number;
            ["Imposter MaterialInstanceArray"]: TArray<UE.MaterialInstance>;
            MaterialColor2: UE.LinearColor;
            SectorSize: number;
            InitialOffset: UE.Vector;
            initialscale: number;
            Internalscalefactor: number;
            StaticMeshComponent: UE.StaticMeshComponent;
            LevelStaticMeshActorArray: TArray<UE.Actor>;
            ["Render to Texture Mesh"]: UE.StaticMeshActor;
            ["Use Level Meshes for Depth"]: boolean;
            LightVector: UE.Vector;
            ["Directional Light"]: UE.DirectionalLight;
            ["Opacity Mask Textures"]: TArray<UE.Texture>;
            ["Opacity Mask Channels"]: TArray<UE.LinearColor>;
            ["Frames around Z rotation"]: number;
            ["Aspect Ratio 1 by"]: number;
            ["Use Level Placed Meshes"]: boolean;
            ["Lightmap Mesh"]: UE.StaticMeshActor;
            ["Lightmap Mesh 2-sided, Side 1"]: UE.StaticMeshActor;
            ["Lightmap Mesh 2-sided, Side 2"]: UE.StaticMeshActor;
            ["Depth Map Static Mesh"]: UE.StaticMesh;
            Unwrap: boolean;
            ["Depth Material Mask Textures"]: TArray<UE.Texture2D>;
            ["Flipbook Start Rotation"]: UE.Rotator;
            ["Flipbook Rotation Axis 1"]: UE.Vector;
            ["Flipbook Rotation Axis 2"]: UE.Vector;
            ["Axis 1 Rotations"]: number;
            ["Axis 2 Rotations"]: number;
            ["Flipbook Columns (X)"]: number;
            ["Flipbook Rows (Y)"]: number;
            ["Flipbook MaterialInstance List"]: TArray<UE.MaterialInstance>;
            ["Opacity MaskTextures"]: TArray<UE.Texture>;
            ["Opacity MaskChannels"]: TArray<UE.LinearColor>;
            ["Flipbook Static Mesh"]: UE.StaticMesh;
            ["Flipbook Mesh scale"]: number;
            ["Preview Speed"]: number;
            ImposterEnum: UE.Engine.ArtTools.RenderToTexture.Enums.RenderToTexture_Imposter_Enum.RenderToTexture_Imposter_Enum;
            ["Single Rotation Axis"]: UE.Vector;
            ["Unwrap Lightmap 2sided"]: boolean;
            Unwrap2sidedMIDlistA: TArray<UE.MaterialInstanceDynamic>;
            Unwrap2sidedMIDListB: TArray<UE.MaterialInstanceDynamic>;
            ["Lightmap Unwrap Material"]: UE.MaterialInstanceConstant;
            ["Unwrap Lightmap"]: boolean;
            ["Mask Channel"]: TArray<UE.LinearColor>;
            DepthMeshInitialSize: UE.Vector;
            DepthMID: UE.MaterialInstanceDynamic;
            ["Scale XY"]: number;
            ["Scale Z"]: number;
            ["Fit Vector and scale info onto texture"]: boolean;
            TextSize: number;
            ["Text Locations"]: TArray<UE.Vector>;
            ParticleSystem: UE.ParticleSystem;
            SavedPhysMeshList: TArray<UE.Engine.ArtTools.RenderToTexture.Blueprints.PhysMesh.PhysMesh>;
            ["Simulate Physics"]: boolean;
            ["Keep Tiling Hand Placed Meshes"]: boolean;
            ["Simple Random Placement"]: boolean;
            ["PhysGround Mat"]: UE.MaterialInstanceConstant;
            ["Mesh List"]: TArray<UE.StaticMesh>;
            ["Mesh Size Min"]: number;
            ["Mesh Size Max"]: number;
            ["Size Curve"]: number;
            ["Spawn by Size"]: boolean;
            ["PhysGround Density m^2"]: number;
            Count: number;
            ["Number of Meshes"]: number;
            PhysStaticMeshes: TArray<UE.StaticMeshComponent>;
            ["Debug Displacement Depth"]: boolean;
            ["Displacement Min"]: number;
            ["Displacement Max"]: number;
            ["Kill Above Z Min"]: number;
            ["Kill Above Z Max"]: number;
            ["Copied Mesh Array"]: TArray<UE.StaticMeshComponent>;
            ["Current Component"]: UE.StaticMeshComponent;
            StaticMobilityMeshes: TArray<UE.StaticMeshComponent>;
            SavedMeshComponents: TArray<UE.StaticMeshComponent>;
            ["Material Instance"]: UE.MaterialInstance;
            ["Stadium Offsetting"]: boolean;
            ["TilingMesh List"]: TArray<UE.Engine.ArtTools.RenderToTexture.Blueprints.TilingMesh.TilingMesh>;
            SceneDepthWorldUnits: boolean;
            DisplacementMin: number;
            DisplacementMax: number;
            DebugDisplacementDepth: boolean;
            ["Custom Depth"]: boolean;
            ["Displacement Texture Height"]: number;
            ["Preview Tiling"]: boolean;
            ["Tiling Amount"]: number;
            ImposterArray: TArray<UE.Transform>;
            PreviewLocation: UE.Vector;
            ["Output Depth Maps"]: boolean;
            ImposterMeshComponents: TArray<UE.StaticMeshComponent>;
            BackgroundSheetMID: UE.MaterialInstanceDynamic;
            ["Debug Depth"]: boolean;
            ["Max Pitch/Roll"]: number;
            ["Render Motion Vectors"]: boolean;
            SceneColor: boolean;
            ["Sheet height"]: number;
            ["Background Sheet Color"]: UE.LinearColor;
            FlipbookMeshes: TArray<UE.StaticMeshComponent>;
            ["UV Layout Dilation Amount"]: number;
            OffsetVectors: TArray<UE.Vector>;
            ["Empty Spacer"]: boolean;
            CurrentRenderLoc: UE.Vector;
            ["UV Dilation Steps"]: number;
            MaterialChoice: UE.MaterialInstance;
            MVFloors: TArray<UE.StaticMeshComponent>;
            FlipbookMID: UE.MaterialInstanceDynamic;
            ["Motion Dilation Steps"]: number;
            UnwrappedMotionVectorMeshes: TArray<UE.StaticMeshComponent>;
            MotionVectorIntensityBoost: number;
            sRGB: boolean;
            ["Render MotionVectors"]: boolean;
            ["Large Mesh Sink Height"]: number;
            ["Large Mesh Size Threshold"]: number;
            ["UV DilationPass"]: boolean;
            ["MotionVector Pass"]: boolean;
            MotionVectorMaterial: UE.MaterialInstanceConstant;
            MotionVectorsApplied: UE.MaterialInstanceConstant;
            ["UV Layout DilationAmount"]: number;
            ["UV DilationSteps"]: number;
            ["Motion DilationSteps"]: number;
            ["Motion Vector IntensityBoost"]: number;
            MotionVectorsApplied_Imposter: UE.MaterialInstanceConstant;
            ["Flipbook Preview Mat"]: UE.MaterialInstanceConstant;
            ["Imposter-SingleAxis Preview Mat"]: UE.MaterialInstanceConstant;
            ["Imposter-3D Preview Mat"]: UE.MaterialInstanceConstant;
            MIDList: TArray<UE.MaterialInstanceDynamic>;
            PolyCenter: UE.Vector;
            ["Offst Phase"]: number;
            ["Dilation Phase"]: number;
            ["Ortho FOV"]: number;
            ["Indicies to Delete"]: TArray<number>;
            TilingAmount: number;
            UVIndex: number;
            ["UV Index"]: number;
            NewVar: UE.MaterialInstanceDynamic;
            ["Export images as EXR"]: boolean;
            ["Copy a mesh"](MeshComponent: $Nullable<UE.StaticMeshComponent>, OffsetVector: UE.Vector, ArraytoPlaceMeshesin: $Ref<TArray<UE.StaticMeshComponent>>) : void;
            ExecuteUbergraph_RenderToTexture_LevelBP(EntryPoint: number) : void;
            ["Find Z Bounds"](Meshes: $Ref<TArray<UE.StaticMeshComponent>>, Min: $Ref<number>, Max: $Ref<number>) : void;
            FlipBook() : void;
            ["Imposter Sprites"]() : void;
            ["Match Level Actors to Imposter Array"]() : void;
            ["New Mesh"](Mesh: $Nullable<UE.StaticMesh>, WorldPos: UE.Vector, Material: $Nullable<UE.MaterialInterface>, Scale3d: UE.Vector, MeshComp: $Ref<UE.StaticMeshComponent>) : void;
            ["Particle System Frame Dump"]() : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            ["Render Depth Map"](MID: $Ref<UE.MaterialInstanceDynamic>) : void;
            ["Render Lightmap"]() : void;
            ["Render LIghtmap 2-sided"]() : void;
            ["Render Random Tiling Physics Drop"]() : void;
            ["Render Tiling Material"]() : void;
            ["Render Tiling Material from Meshes"]() : void;
            ["Render Unwrapped Mesh To Textures"]() : void;
            ["Set Buffer Commands"]() : void;
            ["Set up MPC"]() : void;
            ["Setup Collision"](Visible: boolean) : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RenderToTexture_LevelBP_C;
            static Load(InName: string): RenderToTexture_LevelBP_C;
        
            __tid_RenderToTexture_LevelBP_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ce38c12763cec642af8b4ec307ba5e3700000000
    namespace Engine.ArtTools.RenderToTexture.Blueprints.RenderToTexture_Pawn {
        class RenderToTexture_Pawn_C extends UE.Pawn {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            Pawncam: UE.CameraComponent;
            Root: UE.StaticMeshComponent;
            BaseColor: boolean;
            Specular: boolean;
            Normal: boolean;
            Opacity: boolean;
            Roughness: boolean;
            AmbientOcclusion: boolean;
            MaterialAmbientOcclusion: boolean;
            ResolutionMultiplier: number;
            BufferCommands: string;
            ShotCommand: string;
            ["Backface SSS Meshes"]: TArray<UE.StaticMeshActor>;
            MIDArray: TArray<UE.MaterialInstanceDynamic>;
            Generator: UE.Engine.ArtTools.RenderToTexture.Blueprints.RenderToTexture_LevelBP.RenderToTexture_LevelBP_C;
            debugdepth() : void;
            ExecuteUbergraph_RenderToTexture_Pawn(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            renderdepth() : void;
            renderimposter() : void;
            renderlightmaps() : void;
            rendertextures() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RenderToTexture_Pawn_C;
            static Load(InName: string): RenderToTexture_Pawn_C;
        
            __tid_RenderToTexture_Pawn_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 104291f99d7c0e49991a6885d454a42b00000000
    namespace Niagara.Blueprints.NiagaraPreviewAxisLODDistance {
        class NiagaraPreviewAxisLODDistance_C extends UE.NiagaraPreviewAxis {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            Distances: TArray<number>;
            bApplyRealDistances: boolean;
            /*
             *Applies this axis for the preview at PreviewIndex on this axis.
             */
            ApplyToPreview(PreviewComponent: $Nullable<UE.NiagaraComponent>, PreviewIndex: number, bIsXAxis: boolean, OutLabelText: $Ref<string>) : void;
            /*
             *Returns the number of previews for this axis.
             */
            Num() : number;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): NiagaraPreviewAxisLODDistance_C;
            static Load(InName: string): NiagaraPreviewAxisLODDistance_C;
        
            __tid_NiagaraPreviewAxisLODDistance_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 35fba8e1568cbe49bcc72e9c0934844e00000000
    namespace Niagara.Blueprints.NiagaraPreview {
        class NiagaraPreview_C extends UE.NiagaraPreviewBase {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            YLabel: UE.TextRenderComponent;
            XLabel: UE.TextRenderComponent;
            TextBoard: UE.StaticMeshComponent;
            Effect: UE.NiagaraComponent;
            Plinth: UE.StaticMeshComponent;
            Scene: UE.SceneComponent;
            NewVar_0: UE.TextRenderComponent;
            ExecuteUbergraph_NiagaraPreview(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            SetLabelText(InXAxisText: string, InYAxisText: string) : void;
            /*
             *AActor Interface End
             */
            SetSystem(InSystem: $Nullable<UE.NiagaraSystem>) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): NiagaraPreview_C;
            static Load(InName: string): NiagaraPreview_C;
        
            __tid_NiagaraPreview_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 30a1ee4a421a22d4996d27143057cea34e0bacf1
    namespace ControlRigModules.Modules56.Wheel {
        class Wheel_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            Axle: UE.ERigControlAxis;
            Color: UE.LinearColor;
            Control: UE.RigElementKey;
            Null: UE.RigElementKey;
            Radius: number;
            Break: number;
            Gas: number;
            Travel: number;
            Path: TArray<UE.Vector>;
            Simulate: boolean;
            NewTravel: number;
            Invert: boolean;
            MaxSamples: number;
            DirectionAxis: UE.ERigControlAxis;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Wheel_C;
            static Load(InName: string): Wheel_C;
        
            __tid_Wheel_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: d807ffaf2855908bb3bbe5b5046831790c4ee393
    namespace ControlRigModules.Modules56.VehiclePivotProxy {
        class VehiclePivotProxy_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            Scale: number;
            Control: UE.RigElementKey;
            ControlsToRunBackwards: TArray<UE.RigElementKey>;
            ["Ground Contact Adjust"]: number;
            ["Steering Axis"]: UE.ERigControlAxis;
            ["Control Shape"]: string;
            ["Control Transform"]: UE.Transform;
            AutoSteering: boolean;
            ["Suspension Length"]: number;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): VehiclePivotProxy_C;
            static Load(InName: string): VehiclePivotProxy_C;
        
            __tid_VehiclePivotProxy_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 793f7f7089f0a2f01c1d704eedbcdafd0cb67bd1
    namespace ControlRigModules.Modules56.Tail {
        class Tail_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            Debug: boolean;
            ["IK Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["FK Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Local IK Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Add Null"]: boolean;
            ["Create Control per Bone"]: boolean;
            ["Solve with SplineIK"]: boolean;
            Stretch: boolean;
            ["Spline Mode"]: UE.ESplineType;
            ["Primary Axis"]: UE.Vector;
            ["Up Axis"]: UE.Vector;
            ["Secondary Spline Direction"]: UE.Vector;
            ["Number of Controls"]: number;
            Prefix: string;
            Name: string;
            Suffix: string;
            ["Re-Orient Controls"]: boolean;
            Dynamics: boolean;
            ["Default Strength"]: number;
            ["Default Damping"]: number;
            ["Default Blend Start"]: number;
            ["Default Blend End"]: number;
            ["Default Blend Twist"]: number;
            ["Local Spline"]: UE.ControlRigSpline;
            ["Template Spline"]: UE.ControlRigSpline;
            ["Number of Main Controls"]: number;
            ["Main Controls as FK"]: boolean;
            ["Creation Spline Bones"]: TArray<UE.RigElementKey>;
            ["Control Stack at Position_1_Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Default IK or FK"]: boolean;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Tail_C;
            static Load(InName: string): Tail_C;
        
            __tid_Tail_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: cc98350b1966856fb0ee46694a0ed0680b96eb9d
    namespace ControlRigModules.Modules56.Suspension {
        class Suspension_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            PrimaryAxis: UE.ERigControlAxis;
            Color: UE.LinearColor;
            Scale: UE.Vector;
            ["Draw Limits"]: boolean;
            LimitMin: boolean;
            LimitMax: boolean;
            Minimum: number;
            Maximum: number;
            Control: UE.RigElementKey;
            Weight: number;
            ShapeTransform: UE.Transform;
            ["Controlled by Proxy"]: boolean;
            ["Control Shape"]: string;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Suspension_C;
            static Load(InName: string): Suspension_C;
        
            __tid_Suspension_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: bc376700c8b9c972a1c428fa14a5ec27a844ecdb
    namespace ControlRigModules.Modules56.Spine {
        class Spine_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            ["Spine Control Shape Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Body Control Shape Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Hips Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Chest Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Mid IK Control Shape Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Number of Spine Bones"]: number;
            ["Primary Axis"]: UE.Vector;
            ["Secondary Axis"]: UE.Vector;
            ["Secondary Spline Direction"]: UE.Vector;
            Prefix: string;
            Suffix: string;
            ["Body Control Adjustment"]: number;
            ["Default FK or IK"]: boolean;
            Debug: boolean;
            ["Enable Stretch"]: boolean;
            ["Hips at Pelvis"]: boolean;
            ["Even IK Controls"]: boolean;
            ["Local Spline"]: UE.ControlRigSpline;
            ["Template Spline"]: UE.ControlRigSpline;
            ["Output Bones"]: TArray<UE.RigElementKey>;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Spine_C;
            static Load(InName: string): Spine_C;
        
            __tid_Spine_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 0656a2784783fc53ccb2e3d7a3a7959999915f26
    namespace ControlRigModules.Modules56.Shoulder {
        class Shoulder_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            ["Clavicle Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Enable Translation"]: boolean;
            ["Shoulder Primary"]: UE.RigElementKey;
            Found: boolean;
            ["Shoulder Ctrl"]: UE.RigElementKey;
            ["Shoulder Proxy Ctrl"]: UE.RigElementKey;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Shoulder_C;
            static Load(InName: string): Shoulder_C;
        
            __tid_Shoulder_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: b1cf568be466f633b269aacadfc34c047894a5b8
    namespace ControlRigModules.Modules56.PivotProxy {
        class PivotProxy_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            Scale: number;
            Control: UE.RigElementKey;
            ControlsToRunBackwards: TArray<UE.RigElementKey>;
            Local: UE.Transform;
            UseInitial: boolean;
            ProjectDown: boolean;
            MaxProjectionDistance: number;
            Offset: UE.Transform;
            ["Control Shape"]: string;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PivotProxy_C;
            static Load(InName: string): PivotProxy_C;
        
            __tid_PivotProxy_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 5239c2042ede5f147fa3ef017a181184349c70f7
    namespace ControlRigModules.Modules56.Piston {
        class Piston_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            Debug: boolean;
            ["Add Up Vector Ctrl"]: boolean;
            ["Up Vector Axis"]: UE.Vector;
            ["Up Vector Offset Factor"]: number;
            ["Start Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["End Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Up Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Up Control"]: UE.RigElementKey;
            Name: string;
            Sticky: boolean;
            Reverse: boolean;
            ["As Controls"]: boolean;
            ["End Control Position"]: number;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Piston_C;
            static Load(InName: string): Piston_C;
        
            __tid_Piston_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4b74033173ec6cc958d29fcb0aedb2b1a16d287e
    namespace ControlRigModules.Modules56.Neck {
        class Neck_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            ["Head IK Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Head FK Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Neck FK Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["FK IK Default"]: boolean;
            ["Local Spline Out"]: UE.ControlRigSpline;
            ["Template Spline Out"]: UE.ControlRigSpline;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Neck_C;
            static Load(InName: string): Neck_C;
        
            __tid_Neck_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 97a0dcc0884479553e40b79bf579ea6331483236
    namespace ControlRigModules.Modules56.Leg {
        class Leg_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            pv_control: UE.RigElementKey;
            foot_control: UE.RigElementKey;
            follow_null: UE.RigElementKey;
            effector: UE.RigElementKey;
            ["Ankle Bone"]: UE.RigElementKey;
            ["Thigh Bone"]: UE.RigElementKey;
            ["IK Null"]: UE.RigElementKey;
            prefix: string;
            RigVMFunction_MathVectorClampLength_Result: UE.Vector;
            RightSideThreshold: number;
            Subtract_1_Result: number;
            ["Foot Control"]: UE.RigElementKey;
            ["PV Ctrl"]: UE.RigElementKey;
            ["foot ik effector null"]: UE.RigElementKey;
            ["Get Side_Result"]: string;
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            ["IK Shape Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["PV Shape Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["FK Shape Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Auto Determine Axis"]: boolean;
            ["Primary Axis"]: UE.Vector;
            ["Secondary Axis"]: UE.Vector;
            ["FK IK Default"]: boolean;
            ["Orient IK to World"]: boolean;
            ["Pole Vector Position"]: number;
            ["IK Control Offset"]: UE.Transform;
            ["Enable PV Follow"]: boolean;
            ["Enable Softness"]: boolean;
            ["Knee Bone Offset"]: UE.Vector;
            ["Knee Bone Offset Global Space"]: boolean;
            ["Effector Null"]: UE.RigElementKey;
            ["Toe L"]: UE.RigElementKey;
            ["Toe R"]: UE.RigElementKey;
            ["Toe L Metadata Found"]: boolean;
            ["Toe R Metadata Found"]: boolean;
            ["Current Side "]: string;
            ["Foot Socket Target"]: UE.RigElementKey;
            ["Foot L"]: UE.RigElementKey;
            ["Foot R"]: UE.RigElementKey;
            ["Foot L Metadata Found"]: boolean;
            ["Foot R Metadata Found"]: boolean;
            ["Leg PV Position"]: number;
            ["Leg PV Position Metadata Found"]: boolean;
            ["Body Ctrl"]: UE.RigElementKey;
            ["Hips Ctrl"]: UE.RigElementKey;
            ["Knee Bone Offset Metadata"]: UE.Vector;
            ["knee Bone Offset GlobalSpace Metadata"]: boolean;
            ["Twist Bone Axis"]: UE.FilterOptionPerAxis;
            ["Debug Twist Rigs"]: boolean;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Leg_C;
            static Load(InName: string): Leg_C;
        
            __tid_Leg_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 41e878e1b45807d12287ec4b38cbe9f46a9d0aff
    namespace ControlRigModules.Modules56.Hinge {
        class Hinge_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            PrimaryAxis: UE.ERigControlAxis;
            Color: UE.LinearColor;
            LimitMin: boolean;
            LimitMax: boolean;
            Minimum: number;
            Maximum: number;
            Control: UE.RigElementKey;
            Weight: number;
            Scale: number;
            ["Controlled by Proxy"]: boolean;
            ["Proxy Swing"]: boolean;
            ["Control Shape"]: string;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Hinge_C;
            static Load(InName: string): Hinge_C;
        
            __tid_Hinge_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: cc0256f05a67a19f22ad11bbccf28f61ac97d1f0
    namespace ControlRigModules.Modules56.HindLeg {
        class HindLeg_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            Debug: boolean;
            ["IK Foot Shape"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["IK Thigh Shape"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Pole Vector Shape"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["FK Control Shape"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Pole Vector Position"]: number;
            ["IK Control Offset"]: UE.Transform;
            ["Knee Bone Offset"]: UE.Vector;
            ["Knee Bone Offset Global Space"]: boolean;
            ["Auto Determine Axis"]: boolean;
            ["FK IK Default"]: boolean;
            ["Orient IK to World"]: boolean;
            ["Enable PV Follow - version2"]: boolean;
            ["Enable Softness"]: boolean;
            ["Enable Stretch"]: boolean;
            ["Enable PV Follow - version1"]: boolean;
            ["Primary Axis"]: UE.Vector;
            ["Secondary Axis"]: UE.Vector;
            RightSide: boolean;
            SideName: string;
            ModulePrefixName: string;
            PhantomRigBones: TArray<UE.RigElementKey>;
            ThighPhantomRigBones: TArray<UE.RigElementKey>;
            AllBones: TArray<UE.RigElementKey>;
            ThighFKControl: UE.RigElementKey;
            ThighControl: UE.RigElementKey;
            RigBones: TArray<UE.RigElementKey>;
            IKControl: UE.RigElementKey;
            PVControlRotateNull: UE.RigElementKey;
            Effector: UE.RigElementKey;
            LockingBones: TArray<UE.RigElementKey>;
            ["lock null"]: UE.RigElementKey;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): HindLeg_C;
            static Load(InName: string): HindLeg_C;
        
            __tid_HindLeg_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: f53cdb60369c32d046edd705d746b8379a67b3bb
    namespace ControlRigModules.Modules56.Foot {
        class Foot_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            ["Ball IK Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Ball FK Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Foot BK Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Foot Roll Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Heel IK Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Tip Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Force FK Mode"]: boolean;
            ["foot bk control"]: UE.RigElementKey;
            ["Effector Null"]: UE.RigElementKey;
            ["Foot Control"]: UE.RigElementKey;
            ["Foot Control Metadata Found"]: boolean;
            ["FK Parent"]: UE.RigElementKey;
            ["Ball IK Control"]: UE.RigElementKey;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Foot_C;
            static Load(InName: string): Foot_C;
        
            __tid_Foot_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ad97cac93c253157dad9e318ad435f6c1326d285
    namespace ControlRigModules.Modules56.Finger {
        class Finger_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            ["Override Control Settings"]: boolean;
            ["Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Start Connector Default Match"]: UE.RigElementKey;
            ["Parent Control"]: UE.RigElementKey;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Finger_C;
            static Load(InName: string): Finger_C;
        
            __tid_Finger_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 5502703e6a390171e27a77f95c52326f37cdee0a
    namespace ControlRigModules.Modules56.Constraint {
        class Constraint_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            Parent: boolean;
            Position: boolean;
            Rotation: boolean;
            Scale: boolean;
            Aim: boolean;
            AimAxis: UE.Vector;
            AimUpAxis: UE.Vector;
            AimUpKind: UE.EControlRigVectorKind;
            ["Maintain Offset"]: boolean;
            Active: boolean;
            Debug: boolean;
            ParentConstraint_Filter: UE.TransformFilter;
            PositionConstraint_Filter: UE.FilterOptionPerAxis;
            RotationConstraint_Filter: UE.FilterOptionPerAxis;
            ScaleConstraint_Filter: UE.FilterOptionPerAxis;
            AimConstraint_Filter: UE.FilterOptionPerAxis;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Constraint_C;
            static Load(InName: string): Constraint_C;
        
            __tid_Constraint_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 10d7d1619e3cda21a1443f7cca3545166652ccae
    namespace ControlRigModules.Modules56.Chain {
        class Chain_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            Debug: boolean;
            ["Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Add Null"]: boolean;
            ["Create Control per Bone"]: boolean;
            ["Solve with SplineIK"]: boolean;
            Stretch: boolean;
            ["Spline Mode"]: UE.ESplineType;
            ["Primary Axis"]: UE.Vector;
            ["Up Axis"]: UE.Vector;
            ["Secondary Spline Direction"]: UE.Vector;
            ["Number of Controls"]: number;
            Prefix: string;
            Name: string;
            Suffix: string;
            ["Re-Orient Controls"]: boolean;
            Dynamics: boolean;
            ["Default Strength"]: number;
            ["Default Damping"]: number;
            ["Default Blend Start"]: number;
            ["Default Blend End"]: number;
            ["Default Blend Twist"]: number;
            Controls: TArray<UE.RigElementKey>;
            ["Rig Bones"]: TArray<UE.RigElementKey>;
            Bones: TArray<UE.RigElementKey>;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Chain_C;
            static Load(InName: string): Chain_C;
        
            __tid_Chain_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 078f9e43190a730f493c491f8c701a8078e33773
    namespace ControlRigModules.Modules56.Arm {
        class Arm_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            ["IK Shape Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["PV Shape Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["FK Shape Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Offset IK Ctrl"]: UE.Transform;
            ["Offset PV Control"]: UE.Transform;
            ["Elbow Bone Offset"]: UE.Vector;
            ["Pole Vector Position"]: number;
            ["Auto Determine Axis"]: boolean;
            ["Elbow Bone Offset Global Space"]: boolean;
            ["Orient IK to World"]: boolean;
            ["FK IK Default"]: boolean;
            ["Local Default"]: boolean;
            ["Enable Keep Aligned"]: boolean;
            ["Enable PV Follow"]: boolean;
            ["Enable Softness"]: boolean;
            pv_control: UE.RigElementKey;
            foot_control: UE.RigElementKey;
            follow_null: UE.RigElementKey;
            ["Finger Leaf Bones"]: TArray<UE.RigElementKey>;
            ["Shoulder Bone"]: UE.RigElementKey;
            ["Hand Bone"]: UE.RigElementKey;
            ["Elbow Bone"]: UE.RigElementKey;
            prefix: string;
            Array: TArray<UE.RigElementKey>;
            Side: string;
            ["Auto Shoulder - Experiment"]: boolean;
            ["Template Bones"]: TArray<UE.RigElementKey>;
            ["Twist Bone Axis"]: UE.FilterOptionPerAxis;
            ["Is Right Side"]: boolean;
            ["Debug Twist Rigs"]: boolean;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Arm_C;
            static Load(InName: string): Arm_C;
        
            __tid_Arm_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: a875d9f9626dc014406e7a75dadaca644d0eec53
    namespace ControlRigModules.Modules56.AnimalSpine {
        class AnimalSpine_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            ["FK Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Mid IK Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Body Control Shape Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Hips Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Hips Chest Shape Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Chest Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Main Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Primary Axis"]: UE.Vector;
            ["Secondary Axis"]: UE.Vector;
            ["Secondary Spline Direction"]: UE.Vector;
            ["Chest Hips Position"]: UE.Vector;
            Prefix: string;
            Suffix: string;
            ["Body Control Adjustment"]: number;
            ["Number of Spines Bones"]: number;
            ["Local Spline"]: UE.ControlRigSpline;
            ["Aim Spline"]: UE.ControlRigSpline;
            Debug: boolean;
            ["Hips at Pelvis"]: boolean;
            ["Enable Stretch"]: boolean;
            ["Default FK or IK"]: boolean;
            ["Found First Spine"]: boolean;
            ["Found Pelvis"]: boolean;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AnimalSpine_C;
            static Load(InName: string): AnimalSpine_C;
        
            __tid_AnimalSpine_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: c45112dfa531975d5b2d331e9bffdbda7aa38c99
    namespace ControlRigModules.Modules56.AnimalNeck {
        class AnimalNeck_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            ["Add Null"]: boolean;
            ["Create Control per Bone"]: boolean;
            ["Spline Mode"]: UE.ESplineType;
            ["Primary Axis"]: UE.Vector;
            ["Secondary Axis"]: UE.Vector;
            ["Secondary Spline Direction"]: UE.Vector;
            ["Number of Controls"]: number;
            Prefix: string;
            Name: string;
            Suffix: string;
            Dynamics: boolean;
            ["Default Strength"]: number;
            ["Default Damping"]: number;
            ["Default Blend Start"]: number;
            ["Default Blend End"]: number;
            ["Default Blend Twist"]: number;
            ["Headneck Control Pivot Position"]: number;
            ["Number of Neck Bones"]: number;
            ["Inner Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Tangent Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["HeadNeck Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Head Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Head Local Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["FK Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Number of Main Controls"]: number;
            Debug: boolean;
            Stretch: boolean;
            ["Re-Orient Controls"]: boolean;
            ["Default IK or FK"]: boolean;
            ["Main Controls as FK"]: boolean;
            Found: boolean;
            ["Solve with SplineIK"]: boolean;
            ["Curve Points"]: TArray<UE.Vector>;
            ["Template Spline"]: UE.ControlRigSpline;
            ["Local Spline"]: UE.ControlRigSpline;
            ["Creation Spline Bones"]: TArray<UE.RigElementKey>;
            ["Head Local Control"]: UE.RigElementKey;
            ["Dual Spline"]: UE.ControlRigSpline;
            ["Rig Bone Positions"]: TArray<UE.Transform>;
            ["Head Control"]: UE.RigElementKey;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AnimalNeck_C;
            static Load(InName: string): AnimalNeck_C;
        
            __tid_AnimalNeck_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 1be2740d45115b65f31f699d7d87b69feff14d9c
    namespace ControlRigModules.Modules56.AddControl {
        class AddControl_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            the_control: UE.RigElementKey;
            ["Parent Control"]: UE.RigElementKey;
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            ["Control Name"]: string;
            ["Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Secondary Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Control Suffix"]: string;
            ["Null Suffix"]: string;
            ["Add Null Above"]: boolean;
            ["Add Null Below"]: boolean;
            ["Add Secondary Control"]: boolean;
            ["Orient to World"]: boolean;
            ["Offset Control"]: UE.Transform;
            ["Constrain Ctrl to Skeleton"]: boolean;
            ["Drive Skeleton"]: boolean;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AddControl_C;
            static Load(InName: string): AddControl_C;
        
            __tid_AddControl_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 6295052d7abaea2c1dd97ce9b47bf89182bed358
    namespace ControlRigModules.Modules.Wheel {
        class Wheel_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            Axle: UE.ERigControlAxis;
            Color: UE.LinearColor;
            Control: UE.RigElementKey;
            Null: UE.RigElementKey;
            Radius: number;
            Break: number;
            Gas: number;
            Travel: number;
            Path: TArray<UE.Vector>;
            Simulate: boolean;
            NewTravel: number;
            Invert: boolean;
            MaxSamples: number;
            DirectionAxis: UE.ERigControlAxis;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Wheel_C;
            static Load(InName: string): Wheel_C;
        
            __tid_Wheel_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: d6301708eb90cc12814c504b62a6f9a04675414a
    namespace ControlRigModules.Modules.VehiclePivotProxy {
        class VehiclePivotProxy_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            Scale: number;
            Control: UE.RigElementKey;
            ControlsToRunBackwards: TArray<UE.RigElementKey>;
            ["Ground Contact Adjust"]: number;
            ["Steering Axis"]: UE.ERigControlAxis;
            ["Control Shape"]: string;
            ["Control Transform"]: UE.Transform;
            AutoSteering: boolean;
            ["Suspension Length"]: number;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): VehiclePivotProxy_C;
            static Load(InName: string): VehiclePivotProxy_C;
        
            __tid_VehiclePivotProxy_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: cc5431235bc4353f13a9cb2b07e725e55ae4314f
    namespace ControlRigModules.Modules.Tail {
        class Tail_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            Debug: boolean;
            ["IK Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["FK Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Local IK Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Add Null"]: boolean;
            ["Create Control per Bone"]: boolean;
            ["Solve with SplineIK"]: boolean;
            Stretch: boolean;
            ["Spline Mode"]: UE.ESplineType;
            ["Primary Axis"]: UE.Vector;
            ["Up Axis"]: UE.Vector;
            ["Secondary Spline Direction"]: UE.Vector;
            ["Number of Controls"]: number;
            Prefix: string;
            Name: string;
            Suffix: string;
            ["Re-Orient Controls"]: boolean;
            Dynamics: boolean;
            ["Default Strength"]: number;
            ["Default Damping"]: number;
            ["Default Blend Start"]: number;
            ["Default Blend End"]: number;
            ["Default Blend Twist"]: number;
            ["Local Spline"]: UE.ControlRigSpline;
            ["Template Spline"]: UE.ControlRigSpline;
            ["Number of Main Controls"]: number;
            ["Main Controls as FK"]: boolean;
            ["Creation Spline Bones"]: TArray<UE.RigElementKey>;
            ["Control Stack at Position_1_Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Default IK or FK"]: boolean;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Tail_C;
            static Load(InName: string): Tail_C;
        
            __tid_Tail_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ea46bc36a695c91472e20bb7da18a43da165d91d
    namespace ControlRigModules.Modules.Suspension {
        class Suspension_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            PrimaryAxis: UE.ERigControlAxis;
            Color: UE.LinearColor;
            Scale: UE.Vector;
            ["Draw Limits"]: boolean;
            LimitMin: boolean;
            LimitMax: boolean;
            Minimum: number;
            Maximum: number;
            Control: UE.RigElementKey;
            Weight: number;
            ShapeTransform: UE.Transform;
            ["Controlled by Proxy"]: boolean;
            ["Control Shape"]: string;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Suspension_C;
            static Load(InName: string): Suspension_C;
        
            __tid_Suspension_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: e64c936de7ea1f6b02c216178afd93ede847130e
    namespace ControlRigModules.Modules.Spine {
        class Spine_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            ["Spine Control Shape Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Body Control Shape Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Hips Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Chest Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Mid IK Control Shape Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Number of Spine Bones"]: number;
            ["Primary Axis"]: UE.Vector;
            ["Secondary Axis"]: UE.Vector;
            ["Secondary Spline Direction"]: UE.Vector;
            Prefix: string;
            Suffix: string;
            ["Body Control Adjustment"]: number;
            ["Default FK or IK"]: boolean;
            Debug: boolean;
            ["Enable Stretch"]: boolean;
            ["Hips at Pelvis"]: boolean;
            ["Even IK Controls"]: boolean;
            ["Local Spline"]: UE.ControlRigSpline;
            ["Template Spline"]: UE.ControlRigSpline;
            ["Output Bones"]: TArray<UE.RigElementKey>;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Spine_C;
            static Load(InName: string): Spine_C;
        
            __tid_Spine_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 1fbb70f39cc76359d470fca6f6808f0b2cc3063c
    namespace ControlRigModules.Modules.Shoulder {
        class Shoulder_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            ["Clavicle Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Enable Translation"]: boolean;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Shoulder_C;
            static Load(InName: string): Shoulder_C;
        
            __tid_Shoulder_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 3c16e0f99b59cfd13503fda361469040fa22b2c4
    namespace ControlRigModules.Modules.PivotProxy {
        class PivotProxy_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            Scale: number;
            Control: UE.RigElementKey;
            ControlsToRunBackwards: TArray<UE.RigElementKey>;
            Local: UE.Transform;
            UseInitial: boolean;
            ProjectDown: boolean;
            MaxProjectionDistance: number;
            Offset: UE.Transform;
            ["Control Shape"]: string;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PivotProxy_C;
            static Load(InName: string): PivotProxy_C;
        
            __tid_PivotProxy_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 1d2f1ea9ac9f96c76a189566cf927bf14bfacb0c
    namespace ControlRigModules.Modules.Piston {
        class Piston_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            Debug: boolean;
            ["Add Up Vector Ctrl"]: boolean;
            ["Up Vector Axis"]: UE.Vector;
            ["Up Vector Offset Factor"]: number;
            ["Start Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["End Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Up Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Up Control"]: UE.RigElementKey;
            Name: string;
            Sticky: boolean;
            Reverse: boolean;
            ["As Controls"]: boolean;
            ["End Control Position"]: number;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Piston_C;
            static Load(InName: string): Piston_C;
        
            __tid_Piston_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 697d7e3c110d47f2ec0f66f3dcb9403efa64348d
    namespace ControlRigModules.Modules.Neck {
        class Neck_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            ["Head IK Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Head FK Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Neck FK Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["FK IK Default"]: boolean;
            ["Local Spline Out"]: UE.ControlRigSpline;
            ["Template Spline Out"]: UE.ControlRigSpline;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Neck_C;
            static Load(InName: string): Neck_C;
        
            __tid_Neck_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: d6da21ae281a8249a99df14e8da9a98400000000
    namespace ControlRigModules.Modules.ModuleSettings {
        class ModuleSettings {
            constructor();
            constructor(OverrideColor: boolean, LeftColor: UE.LinearColor, RightColor: UE.LinearColor, CenterColor: UE.LinearColor, ControlSize: number, Prefix: string, ControlSuffix: string, LeftSideSuffix: string, RightSideSuffix: string, CharacterFacingDownAxis: UE.Vector, MirrorAxis: UE.Vector, PrimaryBoneAxis: UE.Vector, SecondaryAxis: UE.Vector);
            ["Override Color"]: boolean;
            ["Left Color"]: UE.LinearColor;
            ["Right Color"]: UE.LinearColor;
            ["Center Color"]: UE.LinearColor;
            ["Control Size"]: number;
            Prefix: string;
            ["Control Suffix"]: string;
            ["Left Side Suffix"]: string;
            ["Right Side Suffix"]: string;
            ["Character Facing Down Axis"]: UE.Vector;
            ["Mirror Axis"]: UE.Vector;
            ["Primary Bone Axis"]: UE.Vector;
            ["Secondary Axis"]: UE.Vector;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_ModuleSettings_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: b240f3ae76fe0f18fbeaf3a029f55c94cba500b4
    namespace ControlRigModules.Modules.Leg {
        class Leg_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            pv_control: UE.RigElementKey;
            foot_control: UE.RigElementKey;
            follow_null: UE.RigElementKey;
            effector: UE.RigElementKey;
            ["Ankle Bone"]: UE.RigElementKey;
            ["Thigh Bone"]: UE.RigElementKey;
            ["IK Null"]: UE.RigElementKey;
            prefix: string;
            RigVMFunction_MathVectorClampLength_Result: UE.Vector;
            RightSideThreshold: number;
            Subtract_1_Result: number;
            ["Foot Control"]: UE.RigElementKey;
            ["PV Ctrl"]: UE.RigElementKey;
            ["foot ik effector null"]: UE.RigElementKey;
            ["Get Side_Result"]: string;
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            ["IK Shape Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["PV Shape Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["FK Shape Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Auto Determine Axis"]: boolean;
            ["Primary Axis"]: UE.Vector;
            ["Secondary Axis"]: UE.Vector;
            ["FK IK Default"]: boolean;
            ["Orient IK to World"]: boolean;
            ["Pole Vector Position"]: number;
            ["IK Control Offset"]: UE.Transform;
            ["Enable PV Follow"]: boolean;
            ["Enable Softness"]: boolean;
            ["Knee Bone Offset"]: UE.Vector;
            ["Knee Bone Offset Global Space"]: boolean;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Leg_C;
            static Load(InName: string): Leg_C;
        
            __tid_Leg_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 83ca18e4e4612a470af042ed8b4344f45ac18743
    namespace ControlRigModules.Modules.Hinge {
        class Hinge_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            PrimaryAxis: UE.ERigControlAxis;
            Color: UE.LinearColor;
            LimitMin: boolean;
            LimitMax: boolean;
            Minimum: number;
            Maximum: number;
            Control: UE.RigElementKey;
            Weight: number;
            Scale: number;
            ["Controlled by Proxy"]: boolean;
            ["Proxy Swing"]: boolean;
            ["Control Shape"]: string;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Hinge_C;
            static Load(InName: string): Hinge_C;
        
            __tid_Hinge_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 493cff4bd56be85b8e180b78fad40719a0891ad1
    namespace ControlRigModules.Modules.HindLeg {
        class HindLeg_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            Debug: boolean;
            ["IK Foot Shape"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["IK Thigh Shape"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Pole Vector Shape"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["FK Control Shape"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Pole Vector Position"]: number;
            ["IK Control Offset"]: UE.Transform;
            ["Knee Bone Offset"]: UE.Vector;
            ["Knee Bone Offset Global Space"]: boolean;
            ["Auto Determine Axis"]: boolean;
            ["FK IK Default"]: boolean;
            ["Orient IK to World"]: boolean;
            ["Enable PV Follow - version2"]: boolean;
            ["Enable Softness"]: boolean;
            ["Enable Stretch"]: boolean;
            ["Enable PV Follow - version1"]: boolean;
            ["Primary Axis"]: UE.Vector;
            ["Secondary Axis"]: UE.Vector;
            RightSide: boolean;
            SideName: string;
            ModulePrefixName: string;
            PhantomRigBones: TArray<UE.RigElementKey>;
            ThighPhantomRigBones: TArray<UE.RigElementKey>;
            AllBones: TArray<UE.RigElementKey>;
            ThighFKControl: UE.RigElementKey;
            ThighControl: UE.RigElementKey;
            RigBones: TArray<UE.RigElementKey>;
            IKControl: UE.RigElementKey;
            PVControlRotateNull: UE.RigElementKey;
            Effector: UE.RigElementKey;
            LockingBones: TArray<UE.RigElementKey>;
            ["lock null"]: UE.RigElementKey;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): HindLeg_C;
            static Load(InName: string): HindLeg_C;
        
            __tid_HindLeg_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: be71c513a5e22a3c231ab52d433fa09821e648e8
    namespace ControlRigModules.Modules.Foot {
        class Foot_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            ["Ball IK Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Ball FK Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Foot BK Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Foot Roll Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Heel IK Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Tip Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Foot_C;
            static Load(InName: string): Foot_C;
        
            __tid_Foot_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 573aace3ac8a2cf7d2a1ed1c8e2adf462970de1c
    namespace ControlRigModules.Modules.Finger {
        class Finger_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            ["Override Control Settings"]: boolean;
            ["Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Start Connector Default Match"]: UE.RigElementKey;
            ["Parent Control"]: UE.RigElementKey;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Finger_C;
            static Load(InName: string): Finger_C;
        
            __tid_Finger_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 9ee2d204c78a3c5c0e9607d0aac485b9387bf1de
    namespace ControlRigModules.Modules.Constraint {
        class Constraint_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            Parent: boolean;
            Position: boolean;
            Rotation: boolean;
            Scale: boolean;
            Aim: boolean;
            AimAxis: UE.Vector;
            AimUpAxis: UE.Vector;
            AimUpKind: UE.EControlRigVectorKind;
            ["Maintain Offset"]: boolean;
            Active: boolean;
            Debug: boolean;
            ParentConstraint_Filter: UE.TransformFilter;
            PositionConstraint_Filter: UE.FilterOptionPerAxis;
            RotationConstraint_Filter: UE.FilterOptionPerAxis;
            ScaleConstraint_Filter: UE.FilterOptionPerAxis;
            AimConstraint_Filter: UE.FilterOptionPerAxis;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Constraint_C;
            static Load(InName: string): Constraint_C;
        
            __tid_Constraint_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 0f19198c3c492bc3a4ea7ae6a33be870b228a2f6
    namespace ControlRigModules.Modules.Chain {
        class Chain_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            Debug: boolean;
            ["Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Add Null"]: boolean;
            ["Create Control per Bone"]: boolean;
            ["Solve with SplineIK"]: boolean;
            Stretch: boolean;
            ["Spline Mode"]: UE.ESplineType;
            ["Primary Axis"]: UE.Vector;
            ["Up Axis"]: UE.Vector;
            ["Secondary Spline Direction"]: UE.Vector;
            ["Number of Controls"]: number;
            Prefix: string;
            Name: string;
            Suffix: string;
            ["Re-Orient Controls"]: boolean;
            Dynamics: boolean;
            ["Default Strength"]: number;
            ["Default Damping"]: number;
            ["Default Blend Start"]: number;
            ["Default Blend End"]: number;
            ["Default Blend Twist"]: number;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Chain_C;
            static Load(InName: string): Chain_C;
        
            __tid_Chain_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: e34b2437a700828ff82bdf7904439d3fb4062297
    namespace ControlRigModules.Modules.Arm {
        class Arm_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            ["IK Shape Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["PV Shape Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["FK Shape Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Offset IK Ctrl"]: UE.Transform;
            ["Offset PV Control"]: UE.Transform;
            ["Elbow Bone Offset"]: UE.Vector;
            ["Pole Vector Position"]: number;
            ["Auto Determine Axis"]: boolean;
            ["Elbow Bone Offset Global Space"]: boolean;
            ["Orient IK to World"]: boolean;
            ["FK IK Default"]: boolean;
            ["Local Default"]: boolean;
            ["Enable Keep Aligned"]: boolean;
            ["Enable PV Follow"]: boolean;
            ["Enable Softness"]: boolean;
            pv_control: UE.RigElementKey;
            foot_control: UE.RigElementKey;
            follow_null: UE.RigElementKey;
            ["Finger Leaf Bones"]: TArray<UE.RigElementKey>;
            ["Shoulder Bone"]: UE.RigElementKey;
            ["Hand Bone"]: UE.RigElementKey;
            ["Elbow Bone"]: UE.RigElementKey;
            prefix: string;
            Array: TArray<UE.RigElementKey>;
            Side: string;
            ["Auto Shoulder - Experiment"]: boolean;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Arm_C;
            static Load(InName: string): Arm_C;
        
            __tid_Arm_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 7f3915c62c5eb3ffb97f7a7545db34716178fd4c
    namespace ControlRigModules.Modules.AnimalSpine {
        class AnimalSpine_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            ["FK Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Mid IK Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Body Control Shape Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Hips Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Hips Chest Shape Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Chest Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Main Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Primary Axis"]: UE.Vector;
            ["Secondary Axis"]: UE.Vector;
            ["Secondary Spline Direction"]: UE.Vector;
            ["Chest Hips Position"]: UE.Vector;
            Prefix: string;
            Suffix: string;
            ["Body Control Adjustment"]: number;
            ["Number of Spines Bones"]: number;
            ["Local Spline"]: UE.ControlRigSpline;
            ["Aim Spline"]: UE.ControlRigSpline;
            Debug: boolean;
            ["Hips at Pelvis"]: boolean;
            ["Enable Stretch"]: boolean;
            ["Default FK or IK"]: boolean;
            ["Found First Spine"]: boolean;
            ["Found Pelvis"]: boolean;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AnimalSpine_C;
            static Load(InName: string): AnimalSpine_C;
        
            __tid_AnimalSpine_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 5caa4c6efab8f879a6e71babda1db5897df42e36
    namespace ControlRigModules.Modules.AnimalNeck {
        class AnimalNeck_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            ["Add Null"]: boolean;
            ["Create Control per Bone"]: boolean;
            ["Spline Mode"]: UE.ESplineType;
            ["Primary Axis"]: UE.Vector;
            ["Secondary Axis"]: UE.Vector;
            ["Secondary Spline Direction"]: UE.Vector;
            ["Number of Controls"]: number;
            Prefix: string;
            Name: string;
            Suffix: string;
            Dynamics: boolean;
            ["Default Strength"]: number;
            ["Default Damping"]: number;
            ["Default Blend Start"]: number;
            ["Default Blend End"]: number;
            ["Default Blend Twist"]: number;
            ["Headneck Control Pivot Position"]: number;
            ["Number of Neck Bones"]: number;
            ["Inner Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Tangent Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["HeadNeck Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Head Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Head Local Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["FK Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Number of Main Controls"]: number;
            Debug: boolean;
            Stretch: boolean;
            ["Re-Orient Controls"]: boolean;
            ["Default IK or FK"]: boolean;
            ["Main Controls as FK"]: boolean;
            Found: boolean;
            ["Solve with SplineIK"]: boolean;
            ["Curve Points"]: TArray<UE.Vector>;
            ["Template Spline"]: UE.ControlRigSpline;
            ["Local Spline"]: UE.ControlRigSpline;
            ["Creation Spline Bones"]: TArray<UE.RigElementKey>;
            ["Head Local Control"]: UE.RigElementKey;
            ["Dual Spline"]: UE.ControlRigSpline;
            ["Rig Bone Positions"]: TArray<UE.Transform>;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AnimalNeck_C;
            static Load(InName: string): AnimalNeck_C;
        
            __tid_AnimalNeck_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 18c8d2be7cd66fb131ec28f2c9a2a4d729a7edec
    namespace ControlRigModules.Modules.AddControl {
        class AddControl_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            the_control: UE.RigElementKey;
            ["Parent Control"]: UE.RigElementKey;
            ["Module Settings"]: UE.ControlRigModules.Modules.ModuleSettings.ModuleSettings;
            ["Control Name"]: string;
            ["Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Secondary Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Control Suffix"]: string;
            ["Null Suffix"]: string;
            ["Add Null Above"]: boolean;
            ["Add Null Below"]: boolean;
            ["Add Secondary Control"]: boolean;
            ["Orient to World"]: boolean;
            ["Offset Control"]: UE.Transform;
            ["Constrain Ctrl to Skeleton"]: boolean;
            ["Drive Skeleton"]: boolean;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AddControl_C;
            static Load(InName: string): AddControl_C;
        
            __tid_AddControl_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 55e495eb5801396e16843e80064de515090103b8
    namespace ControlRig.StandardFunctionLibrary.StandardFunctionLibrary {
        class StandardFunctionLibrary_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): StandardFunctionLibrary_C;
            static Load(InName: string): StandardFunctionLibrary_C;
        
            __tid_StandardFunctionLibrary_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: d5b445f7614c862d96dcbb913e09173a77f4d4b4
    namespace ControlRig.Modules.Modules56.Root {
        class Root_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Root Module Settings"]: UE.ControlRig.Modules.RootModuleSettings.RootModuleSettings;
            ["Generate Sockets"]: boolean;
            ["Global Control Name"]: string;
            ["Root Control Name"]: string;
            ["Body Offset Control Name"]: string;
            ["Root Ctrl Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Global Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Body Offset Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Spine Names"]: TArray<string>;
            ["Orient to World"]: boolean;
            Debug: boolean;
            ["body offset control"]: UE.RigElementKey;
            ["global control"]: UE.RigElementKey;
            ["Root Control Scale"]: number;
            ["Auto Find Skeleton"]: boolean;
            Skeleton: UE.ControlRig.Modules.E_SkeletonData.E_SkeletonData;
            ["Root Control"]: UE.RigElementKey;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Root_C;
            static Load(InName: string): Root_C;
        
            __tid_Root_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: fbb9d30a5b092e4f8addef887cf9882300000000
    namespace ControlRig.Modules.RootModuleSettings {
        class RootModuleSettings {
            constructor();
            constructor(LeftColor: UE.LinearColor, RightColor: UE.LinearColor, CenterColor: UE.LinearColor, ControlSize: number, Prefix: string, ControlSuffix: string, LeftSideSuffix: string, RightSideSuffix: string, LeftAxis: UE.Vector, PrimaryBoneAxis: UE.Vector);
            ["Left Color"]: UE.LinearColor;
            ["Right Color"]: UE.LinearColor;
            ["Center Color"]: UE.LinearColor;
            ["Control Size"]: number;
            Prefix: string;
            ["Control Suffix"]: string;
            ["Left Side Suffix"]: string;
            ["Right Side Suffix"]: string;
            ["Left Axis"]: UE.Vector;
            ["Primary Bone Axis"]: UE.Vector;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_RootModuleSettings_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 048c941dba872025eda7eebf3830d3663deab661
    namespace ControlRig.Modules.Root {
        class Root_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            ["Root Module Settings"]: UE.ControlRig.Modules.RootModuleSettings.RootModuleSettings;
            ["Generate Sockets"]: boolean;
            ["Global Control Name"]: string;
            ["Root Control Name"]: string;
            ["Body Offset Control Name"]: string;
            ["Root Ctrl Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Global Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Body Offset Control Settings"]: UE.RigUnit_HierarchyAddControlTransform_Settings;
            ["Spine Names"]: TArray<string>;
            ["Orient to World"]: boolean;
            Debug: boolean;
            ["body offset control"]: UE.RigElementKey;
            ["global control"]: UE.RigElementKey;
            ["Root Control Scale"]: number;
            ["Auto Find Skeleton"]: boolean;
            Skeleton: UE.ControlRig.Modules.E_SkeletonData.E_SkeletonData;
            ["Root Control"]: UE.RigElementKey;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Root_C;
            static Load(InName: string): Root_C;
        
            __tid_Root_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 282b179322b0b7439bca828c6d359eb200000000
    namespace ControlRigSpline.SplineFunctionLibrary.SplineFunctionLibrary {
        class SplineFunctionLibrary_C extends UE.ControlRig {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): SplineFunctionLibrary_C;
            static Load(InName: string): SplineFunctionLibrary_C;
        
            __tid_SplineFunctionLibrary_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 99cf224cf69c6448a3e595acf8324afd00000000
    namespace Takes.UMG.DefaultRecordingOverlay {
        class DefaultRecordingOverlay_C extends UE.TakeRecorderOverlayWidget {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            Crosshair_V: UE.Image;
            Crosshair_H: UE.Image;
            CountdownText: UE.TextBlock;
            CountdownBorder: UE.Border;
            Circles: UE.Image;
            CanvasPanel_0: UE.CanvasPanel;
            MID_Countdown: UE.MaterialInstanceDynamic;
            ExecuteUbergraph_DefaultRecordingOverlay(EntryPoint: number) : void;
            GetCountdownText() : string;
            GetCountdownVisibility() : UE.ESlateVisibility;
            /*
             *Called by both the game and the editor.  Allows users to run initial setup for their widgets to better preview
             *the setup in the designer and since generally that same setup code is required at runtime, it's called there
             *as well.
             *
             ***WARNING**
             *This is intended purely for cosmetic updates using locally owned data, you can not safely access any game related
             *state, if you call something that doesn't expect to be run at editor time, you may crash the editor.
             *
             *In the event you save the asset with blueprint code that causes a crash on evaluation.  You can turn off
             *PreConstruct evaluation in the Widget Designer settings in the Editor Preferences.
             */
            PreConstruct(IsDesignTime: boolean) : void;
            /*
             *Ticks this widget.  Override in derived classes, but always call the parent implementation.
             *
             *@param  MyGeometry The space allotted for this widget
             *@param  InDeltaTime  Real time passed since last tick
             */
            Tick(MyGeometry: UE.Geometry, InDeltaTime: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): DefaultRecordingOverlay_C;
            static Load(InName: string): DefaultRecordingOverlay_C;
        
            __tid_DefaultRecordingOverlay_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: eadc883a4db9b649b8bb3cd750c39bdc00000000
    namespace Takes.Sequencer.DefaultTakeBurnIn {
        class DefaultTakeBurnIn_C extends UE.LevelSequenceBurnIn {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            Watermark: UE.Image;
            TopRight: UE.TextBlock;
            TopLeft: UE.TextBlock;
            TopCenter: UE.TextBlock;
            BottomRight: UE.TextBlock;
            BottomLeft: UE.TextBlock;
            BottomCenter: UE.TextBlock;
            Border_3: UE.Border;
            Border_0: UE.Border;
            ["Foreground Color"]: UE.LinearColor;
            ["Background Color"]: UE.LinearColor;
            Date: string;
            Options: UE.Engine.Sequencer.DefaultBurnInOptions.DefaultBurnInOptions_C;
            hh: string;
            mm: string;
            ss: string;
            ff: string;
            MasterFrame: string;
            ShotFrame: string;
            MasterName: string;
            ShotName: string;
            FocalLength: string;
            FocusDistance: string;
            Aperture: string;
            SensorWidth: string;
            SensorHeight: string;
            SensorAspectRatio: string;
            Translation: UE.Vector;
            Rotation: UE.Rotator;
            bCached: boolean;
            EngineVersion: string;
            SourceTimecode: string;
            Slate: string;
            TakeNumber: string;
            Time: string;
            CacheData() : void;
            /*
             *Called after the underlying slate widget is constructed.  Depending on how the slate object is used
             *this event may be called multiple times due to adding and removing from the hierarchy.
             *If you need a true called-once-when-created event, use OnInitialized.
             */
            Construct() : void;
            ExecuteUbergraph_DefaultTakeBurnIn(EntryPoint: number) : void;
            Get_BottomCenter_Text_0() : string;
            Get_BottomLeft_Text_0() : string;
            Get_BottomRight_Text_0() : string;
            Get_TopCenter_Text_0() : string;
            Get_TopLeft_Text_0() : string;
            Get_TopRight_Text_0() : string;
            /*
             *Get the settings class to use for this burn in
             */
            GetSettingsClass() : UE.Class;
            /*
             *Called when this burn in is receiving its settings
             */
            SetSettings(InSettings: $Nullable<UE.Object>) : void;
            /*
             *Ticks this widget.  Override in derived classes, but always call the parent implementation.
             *
             *@param  MyGeometry The space allotted for this widget
             *@param  InDeltaTime  Real time passed since last tick
             */
            Tick(MyGeometry: UE.Geometry, InDeltaTime: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): DefaultTakeBurnIn_C;
            static Load(InName: string): DefaultTakeBurnIn_C;
        
            __tid_DefaultTakeBurnIn_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 248354545c0b514095e359701fddf70600000000
    namespace Fab.Actors.GlobalFoliageActor.BP_GlobalFoliageActor_UE5 {
        class BP_GlobalFoliageActor_UE5_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            Icon_Sock: UE.StaticMeshComponent;
            Icon_Arrow_Test: UE.StaticMeshComponent;
            Icon_Base: UE.StaticMeshComponent;
            Icon_Root: UE.StaticMeshComponent;
            ["Wind Noise Trees"]: number;
            ["Wind Strength Trees"]: number;
            ["Wind Speed Trees"]: number;
            ["Wind Tiling Trees"]: number;
            ["Season Strength"]: number;
            ["Season Brightness"]: number;
            ["Season Saturation"]: number;
            Health: number;
            ["Variation Tiling"]: number;
            ["Macro Variation Tiling"]: number;
            ["Random Color Variation Amount"]: number;
            ["Overall Color Variation Amount"]: number;
            ["Flip Wind Direction"]: boolean;
            ["Wind Speed Plants"]: number;
            ["Wind Strength Plants"]: number;
            ["Wind Tiling Plants"]: number;
            ["Wind Noise Plants"]: number;
            ExecuteUbergraph_BP_GlobalFoliageActor_UE5(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            /*
             *Event called every frame, if ticking is enabled
             */
            ReceiveTick(DeltaSeconds: number) : void;
            RunGlobalFoliageActor() : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_GlobalFoliageActor_UE5_C;
            static Load(InName: string): BP_GlobalFoliageActor_UE5_C;
        
            __tid_BP_GlobalFoliageActor_UE5_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4849775d2f18be4590fc806f7512b9a200000000
    namespace Engine.Tutorial.SubEditors.TutorialAssets.Character.TutorialTPP_AnimBlueprint {
        class AnimBlueprintGeneratedMutableData extends UE.AnimBlueprintMutableData {
            constructor();
            constructor(__FloatProperty: number);
            __FloatProperty: number;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_AnimBlueprintGeneratedMutableData_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4849775d2f18be4590fc806f7512b9a200000000
    namespace Engine.Tutorial.SubEditors.TutorialAssets.Character.TutorialTPP_AnimBlueprint {
        class TutorialTPP_AnimBlueprint_C extends UE.AnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            __AnimBlueprintMutables: UE.Engine.Tutorial.SubEditors.TutorialAssets.Character.TutorialTPP_AnimBlueprint.AnimBlueprintGeneratedMutableData;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystemInstance;
            AnimBlueprintExtension_Base: UE.AnimSubsystemInstance;
            AnimGraphNode_Root: UE.AnimNode_Root;
            AnimGraphNode_BlendSpacePlayer: UE.AnimNode_BlendSpacePlayer;
            Speed: number;
            AnimGraph(AnimGraph: $Ref<UE.PoseLink>) : void;
            /*
             *Executed when the Animation is updated
             */
            BlueprintUpdateAnimation(DeltaTimeX: number) : void;
            ExecuteUbergraph_TutorialTPP_AnimBlueprint(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TutorialTPP_AnimBlueprint_C;
            static Load(InName: string): TutorialTPP_AnimBlueprint_C;
        
            __tid_TutorialTPP_AnimBlueprint_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: f0633d678ac29a42a5ca726f8f3cf1ba00000000
    namespace Engine.Tutorial.SubEditors.TutorialAssets.Character.TutorialCharacter {
        class TutorialCharacter_C extends UE.Character {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TutorialCharacter_C;
            static Load(InName: string): TutorialCharacter_C;
        
            __tid_TutorialCharacter_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: bbcc05429f1f4a458eeeb882f736bd4d00000000
    namespace Engine.Tutorial.SubEditors.TutorialAssets.TutorialAnimationBlueprint {
        class TutorialAnimationBlueprint_C extends UE.AnimInstance {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            AnimBlueprintExtension_PropertyAccess: UE.AnimSubsystemInstance;
            AnimBlueprintExtension_Base: UE.AnimSubsystemInstance;
            AnimGraphNode_Root: UE.AnimNode_Root;
            AnimGraphNode_StateResult: UE.AnimNode_StateResult;
            AnimGraphNode_StateMachine: UE.AnimNode_StateMachine;
            SomeBoolean: boolean;
            SomeFloat: number;
            AnimGraph(AnimGraph: $Ref<UE.PoseLink>) : void;
            /*
             *Executed when the Animation is updated
             */
            BlueprintUpdateAnimation(DeltaTimeX: number) : void;
            ExecuteUbergraph_TutorialAnimationBlueprint(EntryPoint: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TutorialAnimationBlueprint_C;
            static Load(InName: string): TutorialAnimationBlueprint_C;
        
            __tid_TutorialAnimationBlueprint_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 95eceaed39667a418e3dc1d0b90b174e00000000
    namespace Engine.Tutorial.BlueprintTutorials.TutorialAssets.Tutorial_BP_Interface {
        class Tutorial_BP_Interface_C extends UE.Interface {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            TutorialSampleFunction() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Tutorial_BP_Interface_C;
            static Load(InName: string): Tutorial_BP_Interface_C;
        
            __tid_Tutorial_BP_Interface_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 846141a08dd3a042b16d40b29f4bea8000000000
    namespace Engine.Tutorial.BlueprintTutorials.TutorialAssets.Tutorial_BP_Class {
        class Tutorial_BP_Class_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            DefaultSceneRoot: UE.SceneComponent;
            SampleVariable: boolean;
            StoredGameMode: UE.GameModeBase;
            ExecuteUbergraph_Tutorial_BP_Class(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            /*
             *Event called every frame, if ticking is enabled
             */
            ReceiveTick(DeltaSeconds: number) : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Tutorial_BP_Class_C;
            static Load(InName: string): Tutorial_BP_Class_C;
        
            __tid_Tutorial_BP_Class_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 6f995ee2478a1543aefdde966344841700000000
    namespace Engine.Sequencer.DefaultBurnInOptions {
        class DefaultBurnInOptions_C extends UE.LevelSequenceBurnInInitSettings {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            TopLeftText: string;
            TopCenterText: string;
            TopRightText: string;
            BottomLeftText: string;
            BottomCenterText: string;
            BottomRightText: string;
            Watermark: UE.Texture2D;
            WatermarkTint: UE.LinearColor;
            Font: UE.SlateFontInfo;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): DefaultBurnInOptions_C;
            static Load(InName: string): DefaultBurnInOptions_C;
        
            __tid_DefaultBurnInOptions_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 773cdc88df44948331e555f93e8d43732237159e
    namespace Engine.Sequencer.DefaultBurnIn {
        class DefaultBurnIn_C extends UE.LevelSequenceBurnIn {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            Watermark: UE.Image;
            TopRight: UE.TextBlock;
            TopLeft: UE.TextBlock;
            TopCenter: UE.TextBlock;
            BottomRight: UE.TextBlock;
            BottomLeft: UE.TextBlock;
            BottomCenter: UE.TextBlock;
            Border_3: UE.Border;
            Border_0: UE.Border;
            ["Foreground Color"]: UE.LinearColor;
            ["Background Color"]: UE.LinearColor;
            Date: string;
            Options: UE.Engine.Sequencer.DefaultBurnInOptions.DefaultBurnInOptions_C;
            hh: string;
            mm: string;
            ss: string;
            ff: string;
            RootFrame: string;
            ShotFrame: string;
            RootName: string;
            ShotName: string;
            FocalLength: string;
            FocusDistance: string;
            Aperture: string;
            SensorWidth: string;
            SensorHeight: string;
            SensorAspectRatio: string;
            Translation: UE.Vector;
            Rotation: UE.Rotator;
            bCached: boolean;
            EngineVersion: string;
            SourceTimecode: string;
            CacheData() : void;
            /*
             *Called after the underlying slate widget is constructed.  Depending on how the slate object is used
             *this event may be called multiple times due to adding and removing from the hierarchy.
             *If you need a true called-once-when-created event, use OnInitialized.
             */
            Construct() : void;
            ExecuteUbergraph_DefaultBurnIn(EntryPoint: number) : void;
            Get_BottomCenter_Text_0() : string;
            Get_BottomLeft_Text_0() : string;
            Get_BottomRight_Text_0() : string;
            Get_TopCenter_Text_0() : string;
            Get_TopLeft_Text_0() : string;
            Get_TopRight_Text_0() : string;
            /*
             *Get the settings class to use for this burn in
             */
            GetSettingsClass() : UE.Class;
            /*
             *Called when this burn in is receiving its settings
             */
            SetSettings(InSettings: $Nullable<UE.Object>) : void;
            /*
             *Ticks this widget.  Override in derived classes, but always call the parent implementation.
             *
             *@param  MyGeometry The space allotted for this widget
             *@param  InDeltaTime  Real time passed since last tick
             */
            Tick(MyGeometry: UE.Geometry, InDeltaTime: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): DefaultBurnIn_C;
            static Load(InName: string): DefaultBurnIn_C;
        
            __tid_DefaultBurnIn_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: a0ae76b0b4e0614c9349f2a6876e9a1d00000000
    namespace Engine.FunctionalTesting.Blueprints.AITesting_MoveGoal {
        class AITesting_MoveGoal_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            MySpriteComponent: UE.BillboardComponent;
            CollisionBox: UE.BoxComponent;
            ObservedPawn: UE.Object;
            CurrentTest: UE.FunctionalTest;
            bStartEnabled: boolean;
            ExecuteUbergraph_AITesting_MoveGoal(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            SetCollisionEnabled(bShouldBeEnabled: boolean) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AITesting_MoveGoal_C;
            static Load(InName: string): AITesting_MoveGoal_C;
        
            __tid_AITesting_MoveGoal_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: a0773a2037524e4b83a42ef9b8ddb8c400000000
    namespace Engine.EngineSky.BP_Sky_Sphere {
        class BP_Sky_Sphere_C extends UE.Actor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            SkySphereMesh: UE.StaticMeshComponent;
            Base: UE.SceneComponent;
            ["Sky material"]: UE.MaterialInstanceDynamic;
            ["Refresh material"]: boolean;
            ["Directional light actor"]: UE.DirectionalLight;
            ["Colors determined by sun position"]: boolean;
            ["Sun height"]: number;
            ["Sun brightness"]: number;
            ["Horizon Falloff"]: number;
            ["Zenith Color"]: UE.LinearColor;
            ["Horizon color"]: UE.LinearColor;
            ["Cloud color"]: UE.LinearColor;
            ["Overall Color"]: UE.LinearColor;
            ["Cloud speed"]: number;
            ["Cloud opacity"]: number;
            ["Stars brightness"]: number;
            ["Horizon color curve"]: UE.CurveLinearColor;
            ["Zenith color curve"]: UE.CurveLinearColor;
            ["Cloud color curve"]: UE.CurveLinearColor;
            RefreshMaterial() : void;
            UpdateSunDirection() : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BP_Sky_Sphere_C;
            static Load(InName: string): BP_Sky_Sphere_C;
        
            __tid_BP_Sky_Sphere_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: a1684b89f951654b9e69f2b518d0fa1300000000
    namespace Engine.EditorResources.FieldNodes.Niagara.FS_WaveScalarField {
        class FS_WaveScalarField_C extends UE.Engine.EditorResources.FieldNodes.Niagara.FS_BaseField.FS_BaseField_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            ["Enable Field"]: boolean;
            ["Physics Scalar"]: UE.EFieldScalarType;
            ["Field Magnitude"]: number;
            ["Force Physics Dynamic"]: boolean;
            ScalarField: UE.FieldNodeBase;
            ["Wave Length"]: number;
            ["Wave Period"]: number;
            ["Wave Function"]: UE.EWaveFunctionType;
            ["Wave Falloff Type"]: UE.EFieldFalloffType;
            ["Physics Type"]: UE.EFieldPhysicsType;
            ExecuteUbergraph_FS_WaveScalarField(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            /*
             *Event called every frame, if ticking is enabled
             */
            ReceiveTick(DeltaSeconds: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FS_WaveScalarField_C;
            static Load(InName: string): FS_WaveScalarField_C;
        
            __tid_FS_WaveScalarField_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: c015a02eb59a1a429fa95d74f402332500000000
    namespace Engine.EditorResources.FieldNodes.Niagara.FS_UniformVectorField {
        class FS_UniformVectorField_C extends UE.Engine.EditorResources.FieldNodes.Niagara.FS_BaseField.FS_BaseField_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            Arrow: UE.ArrowComponent;
            ["Enable Field"]: boolean;
            ["Physics Vector"]: UE.EFieldVectorType;
            ["Field Magnitude"]: number;
            ["Force Physics Dynamic"]: boolean;
            VectorField: UE.FieldNodeBase;
            ["Physics Type"]: UE.EFieldPhysicsType;
            ExecuteUbergraph_FS_UniformVectorField(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            /*
             *Event called every frame, if ticking is enabled
             */
            ReceiveTick(DeltaSeconds: number) : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FS_UniformVectorField_C;
            static Load(InName: string): FS_UniformVectorField_C;
        
            __tid_FS_UniformVectorField_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: c476336394dba140a6db35faec04fe4a00000000
    namespace Engine.EditorResources.FieldNodes.Niagara.FS_UniformScalarField {
        class FS_UniformScalarField_C extends UE.Engine.EditorResources.FieldNodes.Niagara.FS_BaseField.FS_BaseField_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            ["Enable Field"]: boolean;
            ["Physics Scalar"]: UE.EFieldScalarType;
            ["Field Magnitude"]: number;
            ["Force Physics Dynamic"]: boolean;
            ["Physics Type"]: UE.EFieldPhysicsType;
            ScalarField: UE.FieldNodeBase;
            ExecuteUbergraph_FS_UniformScalarField(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            /*
             *Event called every frame, if ticking is enabled
             */
            ReceiveTick(DeltaSeconds: number) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FS_UniformScalarField_C;
            static Load(InName: string): FS_UniformScalarField_C;
        
            __tid_FS_UniformScalarField_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 4ec347773c8a614587e92d22458651c200000000
    namespace Engine.EditorResources.FieldNodes.Niagara.FS_RadialField {
        class FS_RadialField_C extends UE.Engine.EditorResources.FieldNodes.Niagara.FS_BaseField.FS_BaseField_C {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            InnerSphere: UE.SphereComponent;
            ["Enable Field"]: boolean;
            ["Physics Vector"]: UE.EFieldVectorType;
            ["Field Magnitude"]: number;
            ["Force Physics Dynamic"]: boolean;
            VectorField: UE.FieldNodeBase;
            ["Physics Type"]: UE.EFieldPhysicsType;
            ExecuteUbergraph_FS_RadialField(EntryPoint: number) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            /*
             *Event called every frame, if ticking is enabled
             */
            ReceiveTick(DeltaSeconds: number) : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FS_RadialField_C;
            static Load(InName: string): FS_RadialField_C;
        
            __tid_FS_RadialField_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: e3c6b888c7af7145a6541abc8ae6d79a00000000
    namespace Engine.EditorResources.FieldNodes.Niagara.FS_BaseField {
        class FS_BaseField_C extends UE.FieldSystemActor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            DynamicStateCullingField: UE.CullingField;
            DynamicStateField: UE.UniformInteger;
            NoiseApplyOperatorField: UE.OperatorField;
            FalloffCullingField: UE.CullingField;
            FalloffApplyOperatorField: UE.OperatorField;
            NoiseXYOperatorField: UE.OperatorField;
            NoiseZOperatorField: UE.OperatorField;
            NoiseYOperatorField: UE.OperatorField;
            NoiseXOperatorField: UE.OperatorField;
            NoiseZDirectionField: UE.UniformVector;
            NoiseYDirectionField: UE.UniformVector;
            NoiseXDirectionField: UE.UniformVector;
            VectorNoiseField: UE.OperatorField;
            NoiseZField: UE.NoiseField;
            NoiseYField: UE.NoiseField;
            NoiseXField: UE.NoiseField;
            PlaneCullingFalloffField: UE.PlaneFalloff;
            PlaneFalloffField: UE.PlaneFalloff;
            BoxCullingFalloffField: UE.BoxFalloff;
            BoxFalloffField: UE.BoxFalloff;
            RadialCullingFalloffField: UE.RadialFalloff;
            RadialFalloffField: UE.RadialFalloff;
            Box: UE.BoxComponent;
            Sphere: UE.SphereComponent;
            ["Falloff Shape"]: UE.Engine.EditorResources.FieldNodes._Resources.EFieldShapeType.EFieldShapeType;
            ["Falloff Type"]: UE.EFieldFalloffType;
            ["Min Falloff"]: number;
            ["Max Falloff"]: number;
            ["Cull Outside Falloff"]: boolean;
            ["Noise Mode"]: UE.Engine.EditorResources.FieldNodes._Resources.EFieldNoiseCompMode.EFieldNoiseCompMode;
            ["Add Noise Gain"]: number;
            ["Mult Noise Min"]: number;
            ["Mult Noise Max"]: number;
            ["Noise Use Actor Location"]: boolean;
            ["Noise Use Actor Rotation"]: boolean;
            ["Noise Use Actor Scale"]: boolean;
            ["Noise Scale Mult"]: number;
            ["Noise Gain Range"]: UE.Vector2D;
            NoiseLocationInternal: UE.Vector;
            NoiseRotationInternal: UE.Rotator;
            NoiseScaleInternal: UE.Vector;
            NoiseScaleInternalBase: number;
            Debug: boolean;
            DynamicState: UE.EObjectStateTypeEnum;
            ApplyFalloff(FieldIn: $Nullable<UE.FieldNodeBase>, FieldOut: $Ref<UE.FieldNodeBase>) : void;
            ApplyNoise(FieldIn: $Nullable<UE.FieldNodeBase>, FieldOut: $Ref<UE.FieldNodeBase>) : void;
            BoxFalloff(BoxFalloff: $Ref<UE.FieldNodeBase>, BoxCullingFalloff: $Ref<UE.FieldNodeBase>) : void;
            ExecuteUbergraph_FS_BaseField(EntryPoint: number) : void;
            GetCullingFalloffField(CullingFalloffField: $Ref<UE.FieldNodeBase>) : void;
            GetDynamicStateField(DynamicStateField: $Ref<UE.FieldNodeBase>) : void;
            GetFalloffField(FalloffField: $Ref<UE.FieldNodeBase>) : void;
            PlaneFalloff(PlaneFalloff: $Ref<UE.FieldNodeBase>, PlaneCullingFalloff: $Ref<UE.FieldNodeBase>) : void;
            ["Radial Falloff"](RadialFalloff: $Ref<UE.FieldNodeBase>, RadialCullingFalloff: $Ref<UE.FieldNodeBase>) : void;
            /*
             *Event called every frame, if ticking is enabled
             */
            ReceiveTick(DeltaSeconds: number) : void;
            ScalarNoise(ScalarNoiseField: $Ref<UE.FieldNodeBase>) : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            VectorNoise(VectorNoiseField: $Ref<UE.FieldNodeBase>) : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FS_BaseField_C;
            static Load(InName: string): FS_BaseField_C;
        
            __tid_FS_BaseField_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 55b22a777741d242806ab5e715e2fdad00000000
    namespace Engine.EditorResources.FieldNodes.Linear_Velocity_for_Cloth {
        class Linear_Velocity_for_Cloth_C extends UE.FieldSystemActor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            FieldSystemMetaDataProcessingResolution: UE.FieldSystemMetaDataProcessingResolution;
            SM_PlanarNormal_Arrow2: UE.StaticMeshComponent;
            PlaneVolumeFalloffDistance: UE.StaticMeshComponent;
            PlaneVolumeBox: UE.BoxComponent;
            PlaneVolume: UE.StaticMeshComponent;
            SM_DirectionArrow: UE.StaticMeshComponent;
            DirectionalArrowNull: UE.SphereComponent;
            SphereVolumeCol: UE.SphereComponent;
            SM_RadialArrow: UE.StaticMeshComponent;
            SM_RadialArrow4: UE.StaticMeshComponent;
            SM_RadialArrow3: UE.StaticMeshComponent;
            SM_RadialArrow2: UE.StaticMeshComponent;
            SM_RadialArrow1: UE.StaticMeshComponent;
            SM_RadialArrow5: UE.StaticMeshComponent;
            SM_PlanarNormal_Arrow1: UE.StaticMeshComponent;
            SM_DirectionArrow1: UE.StaticMeshComponent;
            SM_DirectionArrow2: UE.StaticMeshComponent;
            NoiseMaxValueText: UE.TextRenderComponent;
            NoiseMinValueText: UE.TextRenderComponent;
            TorqueValueText: UE.TextRenderComponent;
            ["Noise MinMaxTitle Text"]: UE.TextRenderComponent;
            TorqueTitleText: UE.TextRenderComponent;
            DirectionalValueText: UE.TextRenderComponent;
            DirectionalMagTitleText: UE.TextRenderComponent;
            RadialValueText: UE.TextRenderComponent;
            ["Radial Mag Title Text"]: UE.TextRenderComponent;
            StrainValueText: UE.TextRenderComponent;
            StrainTitleText: UE.TextRenderComponent;
            DelayTitleText: UE.TextRenderComponent;
            ActiveTitleText: UE.TextRenderComponent;
            DelayValueText: UE.TextRenderComponent;
            SphereVolume: UE.StaticMeshComponent;
            ActiveValueText: UE.TextRenderComponent;
            FieldTitleText: UE.TextRenderComponent;
            BoxVolume: UE.StaticMeshComponent;
            ["Field Text"]: UE.TextRenderComponent;
            BoxVolumeCol: UE.BoxComponent;
            ReturnResultsTerminal: UE.ReturnResultsTerminal;
            ["Field Active"]: boolean;
            OperatorFIeld_Input: UE.OperatorField;
            Debug: boolean;
            ActivationType: UE.Engine.EditorResources.FieldNodes._Resources.EFieldActivationType.EFieldActivationType;
            ["Field Falloff Shape"]: UE.Engine.EditorResources.FieldNodes._Resources.EFieldShapeType.EFieldShapeType;
            UseTick: boolean;
            DelayAmount: number;
            ["Use External Strain"]: boolean;
            ["Strain Magnitude"]: number;
            StrainFalloffType: UE.EFieldFalloffType;
            StrainFalloffMinMax: UE.Vector2D;
            NumStrainHits: number;
            UseRadialVector: boolean;
            ["Radial Magnitude"]: number;
            UseDirectionalVector: boolean;
            DirectionalMagnitude: number;
            UseTorque: boolean;
            TorqueMult: number;
            VelocityFieldFalloffType: UE.EFieldFalloffType;
            VelocityFalloffMinMax: UE.Vector2D;
            UseNoise: boolean;
            NoiseMinMax: UE.Vector2D;
            UseDecay: boolean;
            DecayAmount: number;
            DecayFalloffType: UE.EFieldFalloffType;
            DecayFalloffMinMax: UE.Vector2D;
            FieldVolume: UE.StaticMeshComponent;
            DecayDelay: number;
            MaxDecayAmount: number;
            RadialPositionOffset: UE.Vector;
            OverideDIrectionalVector: boolean;
            DIrectionalVectorOveride: UE.Vector;
            TorqueVectorOveride: UE.Vector;
            ["Force/Velocity Vector Switch"]: UE.Engine.EditorResources.FieldNodes._Resources.EFieldForceVel.EFieldForceVel;
            ForceMult: number;
            BoxCullingOnPlanar: boolean;
            PlanarFalloffDistOveride: number;
            ["Force Dynamic Switch"]: boolean;
            ActivateTaggedStaticAndSkeletal: boolean;
            ["Chaos Field Name"]: string;
            FieldColour: UE.LinearColor;
            ShowDebugText: boolean;
            ShowWireFrame: boolean;
            ShowSolidShapes: boolean;
            DirectionalDisplayScale: number;
            RadialDisplayScale: number;
            ["Text Vertical Offset"]: number;
            LinearPhysicsType: UE.EFieldPhysicsType;
            AngularPhysicsType: UE.EFieldPhysicsType;
            FieldFalloffType: UE.EFieldFalloffType;
            ["Field Falloff Noise"]: UE.EFieldFalloffType;
            ["Field Falloff Torque"]: UE.EFieldFalloffType;
            UseLifespan: boolean;
            FieldLifespan: number;
            UseFramesForTiming: boolean;
            FPS: number;
            ["Dynamic State"]: UE.EObjectStateTypeEnum;
            PlanarFalloffDist: number;
            TotalDecay: number;
            FalloffMinMax: UE.Vector2D;
            PlanarFalloffExtentColor: UE.LinearColor;
            DIrectionalVelocityVector: UE.Vector;
            upVector: UE.Vector;
            worldLocation: UE.Vector;
            forwardVector: UE.Vector;
            rightVector: UE.Vector;
            skel: UE.SkeletalMeshComponent;
            SimmableStaticMeshes: TArray<UE.StaticMeshActor>;
            SimmableSkelMeshes: TArray<UE.SkeletalMeshActor>;
            PulseLevel: string;
            TextDisplay: TArray<string>;
            AllText: TArray<UE.TextRenderComponent>;
            ArrowColour_Dir: UE.LinearColor;
            ArrowColour_Normal: UE.LinearColor;
            DeactivatedColour: UE.LinearColor;
            DeactivatedTextColour: UE.LinearColor;
            ["Preview Material"]: UE.MaterialInstanceDynamic;
            TimeElapsed: number;
            NoiseScaleMult: number;
            NewVar_0: UE.Transform;
            isTriggered: boolean;
            NoiseScaleBase: number;
            DestroyActor: boolean;
            FieldFalloffType_Input: UE.EFieldFalloffType;
            FalloffMinMax_Input: UE.Vector2D;
            Magnitude_Input: number;
            CalculateNoise(OutputPin: $Ref<UE.NoiseField>) : void;
            CE_Trigger() : void;
            DisplayTextSetup() : void;
            ExecuteUbergraph_Linear_Velocity_for_Cloth(EntryPoint: number) : void;
            FalloffAndCullSwitch_Main(Magnitude: number, FalloffType: UE.EFieldFalloffType, FalloffMinMax: UE.Vector2D, OperatorField: $Nullable<UE.OperatorField>, CullingField: $Ref<UE.CullingField>) : void;
            FalloffShapeSwitch(falloffType: UE.EFieldFalloffType, falloffMinMax: UE.Vector2D, OperatorFieldOut: $Ref<UE.OperatorField>) : void;
            ForceMultiplier() : void;
            InitializeFieldVariables() : void;
            MakeDynamic_EnableNonGC() : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            /*
             *Event called every frame, if ticking is enabled
             */
            ReceiveTick(DeltaSeconds: number) : void;
            SetVisibility() : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Linear_Velocity_for_Cloth_C;
            static Load(InName: string): Linear_Velocity_for_Cloth_C;
        
            __tid_Linear_Velocity_for_Cloth_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: a769d069ef7bfe49ae2f004ef6c7d7d600000000
    namespace Engine.EditorResources.FieldNodes.Linear_Force_for_Cloth {
        class Linear_Force_for_Cloth_C extends UE.FieldSystemActor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            FieldSystemMetaDataProcessingResolution: UE.FieldSystemMetaDataProcessingResolution;
            SM_PlanarNormal_Arrow2: UE.StaticMeshComponent;
            PlaneVolumeFalloffDistance: UE.StaticMeshComponent;
            PlaneVolumeBox: UE.BoxComponent;
            PlaneVolume: UE.StaticMeshComponent;
            SM_DirectionArrow: UE.StaticMeshComponent;
            DirectionalArrowNull: UE.SphereComponent;
            SphereVolumeCol: UE.SphereComponent;
            SM_RadialArrow: UE.StaticMeshComponent;
            SM_RadialArrow4: UE.StaticMeshComponent;
            SM_RadialArrow3: UE.StaticMeshComponent;
            SM_RadialArrow2: UE.StaticMeshComponent;
            SM_RadialArrow1: UE.StaticMeshComponent;
            SM_RadialArrow5: UE.StaticMeshComponent;
            SM_PlanarNormal_Arrow1: UE.StaticMeshComponent;
            SM_DirectionArrow1: UE.StaticMeshComponent;
            SM_DirectionArrow2: UE.StaticMeshComponent;
            NoiseMaxValueText: UE.TextRenderComponent;
            NoiseMinValueText: UE.TextRenderComponent;
            TorqueValueText: UE.TextRenderComponent;
            ["Noise MinMaxTitle Text"]: UE.TextRenderComponent;
            TorqueTitleText: UE.TextRenderComponent;
            DirectionalValueText: UE.TextRenderComponent;
            DirectionalMagTitleText: UE.TextRenderComponent;
            RadialValueText: UE.TextRenderComponent;
            ["Radial Mag Title Text"]: UE.TextRenderComponent;
            StrainValueText: UE.TextRenderComponent;
            StrainTitleText: UE.TextRenderComponent;
            DelayTitleText: UE.TextRenderComponent;
            ActiveTitleText: UE.TextRenderComponent;
            DelayValueText: UE.TextRenderComponent;
            SphereVolume: UE.StaticMeshComponent;
            ActiveValueText: UE.TextRenderComponent;
            FieldTitleText: UE.TextRenderComponent;
            BoxVolume: UE.StaticMeshComponent;
            ["Field Text"]: UE.TextRenderComponent;
            BoxVolumeCol: UE.BoxComponent;
            ReturnResultsTerminal: UE.ReturnResultsTerminal;
            ["Field Active"]: boolean;
            OperatorFIeld_Input: UE.OperatorField;
            Debug: boolean;
            ActivationType: UE.Engine.EditorResources.FieldNodes._Resources.EFieldActivationType.EFieldActivationType;
            ["Field Falloff Shape"]: UE.Engine.EditorResources.FieldNodes._Resources.EFieldShapeType.EFieldShapeType;
            UseTick: boolean;
            DelayAmount: number;
            ["Use External Strain"]: boolean;
            ["Strain Magnitude"]: number;
            StrainFalloffType: UE.EFieldFalloffType;
            StrainFalloffMinMax: UE.Vector2D;
            NumStrainHits: number;
            UseRadialVector: boolean;
            ["Radial Magnitude"]: number;
            UseDirectionalVector: boolean;
            DirectionalMagnitude: number;
            UseTorque: boolean;
            TorqueMult: number;
            VelocityFieldFalloffType: UE.EFieldFalloffType;
            VelocityFalloffMinMax: UE.Vector2D;
            UseNoise: boolean;
            NoiseMinMax: UE.Vector2D;
            UseDecay: boolean;
            DecayAmount: number;
            DecayFalloffType: UE.EFieldFalloffType;
            DecayFalloffMinMax: UE.Vector2D;
            FieldVolume: UE.StaticMeshComponent;
            DecayDelay: number;
            MaxDecayAmount: number;
            RadialPositionOffset: UE.Vector;
            OverideDIrectionalVector: boolean;
            DIrectionalVectorOveride: UE.Vector;
            TorqueVectorOveride: UE.Vector;
            ["Force/Velocity Vector Switch"]: UE.Engine.EditorResources.FieldNodes._Resources.EFieldForceVel.EFieldForceVel;
            ForceMult: number;
            BoxCullingOnPlanar: boolean;
            PlanarFalloffDistOveride: number;
            ["Force Dynamic Switch"]: boolean;
            ActivateTaggedStaticAndSkeletal: boolean;
            ["Chaos Field Name"]: string;
            FieldColour: UE.LinearColor;
            ShowDebugText: boolean;
            ShowWireFrame: boolean;
            ShowSolidShapes: boolean;
            DirectionalDisplayScale: number;
            RadialDisplayScale: number;
            ["Text Vertical Offset"]: number;
            LinearPhysicsType: UE.EFieldPhysicsType;
            AngularPhysicsType: UE.EFieldPhysicsType;
            FieldFalloffType: UE.EFieldFalloffType;
            ["Field Falloff Noise"]: UE.EFieldFalloffType;
            ["Field Falloff Torque"]: UE.EFieldFalloffType;
            UseLifespan: boolean;
            FieldLifespan: number;
            UseFramesForTiming: boolean;
            FPS: number;
            ["Dynamic State"]: UE.EObjectStateTypeEnum;
            PlanarFalloffDist: number;
            TotalDecay: number;
            FalloffMinMax: UE.Vector2D;
            PlanarFalloffExtentColor: UE.LinearColor;
            DIrectionalVelocityVector: UE.Vector;
            upVector: UE.Vector;
            worldLocation: UE.Vector;
            forwardVector: UE.Vector;
            rightVector: UE.Vector;
            skel: UE.SkeletalMeshComponent;
            SimmableStaticMeshes: TArray<UE.StaticMeshActor>;
            SimmableSkelMeshes: TArray<UE.SkeletalMeshActor>;
            PulseLevel: string;
            TextDisplay: TArray<string>;
            AllText: TArray<UE.TextRenderComponent>;
            ArrowColour_Dir: UE.LinearColor;
            ArrowColour_Normal: UE.LinearColor;
            DeactivatedColour: UE.LinearColor;
            DeactivatedTextColour: UE.LinearColor;
            ["Preview Material"]: UE.MaterialInstanceDynamic;
            TimeElapsed: number;
            NoiseScaleMult: number;
            NewVar_0: UE.Transform;
            isTriggered: boolean;
            NoiseScaleBase: number;
            DestroyActor: boolean;
            FieldFalloffType_Input: UE.EFieldFalloffType;
            FalloffMinMax_Input: UE.Vector2D;
            Magnitude_Input: number;
            CalculateNoise(OutputPin: $Ref<UE.NoiseField>) : void;
            CE_Trigger() : void;
            DisplayTextSetup() : void;
            ExecuteUbergraph_Linear_Force_for_Cloth(EntryPoint: number) : void;
            FalloffAndCullSwitch_Main(Magnitude: number, FalloffType: UE.EFieldFalloffType, FalloffMinMax: UE.Vector2D, OperatorField: $Nullable<UE.OperatorField>, CullingField: $Ref<UE.CullingField>) : void;
            FalloffShapeSwitch(falloffType: UE.EFieldFalloffType, falloffMinMax: UE.Vector2D, OperatorFieldOut: $Ref<UE.OperatorField>) : void;
            ForceMultiplier() : void;
            InitializeFieldVariables() : void;
            MakeDynamic_EnableNonGC() : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            /*
             *Event called every frame, if ticking is enabled
             */
            ReceiveTick(DeltaSeconds: number) : void;
            SetVisibility() : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Linear_Force_for_Cloth_C;
            static Load(InName: string): Linear_Force_for_Cloth_C;
        
            __tid_Linear_Force_for_Cloth_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: 6a9ff1a8827e0846b6a2505e26a891a600000000
    namespace Engine.EditorResources.FieldNodes.FS_SleepDisable_Generic {
        class FS_SleepDisable_Generic_C extends UE.FieldSystemActor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            PlaneVolumeBoxCol: UE.BoxComponent;
            TresholdTitleText: UE.TextRenderComponent;
            ActiveTitleText: UE.TextRenderComponent;
            UniformScalar: UE.UniformScalar;
            ThresholdValueText: UE.TextRenderComponent;
            ActiveValueText: UE.TextRenderComponent;
            PlaneFalloff_Magnitude: UE.PlaneFalloff;
            RadialFalloff_Magnitude: UE.RadialFalloff;
            CullingField_Plane: UE.CullingField;
            RadialFalloff: UE.RadialFalloff;
            CullingField_Box: UE.CullingField;
            PlaneFalloff: UE.PlaneFalloff;
            RadialVector: UE.RadialVector;
            UniformInteger: UE.UniformInteger;
            BoxFalloff_Magnitude: UE.BoxFalloff;
            CullingField_Sphere: UE.CullingField;
            Arrow: UE.ArrowComponent;
            BoxVolume: UE.StaticMeshComponent;
            SphereVolume: UE.StaticMeshComponent;
            PlaneVolume: UE.StaticMeshComponent;
            BoxVolumeCol: UE.BoxComponent;
            SphereVolumeCol: UE.SphereComponent;
            SleepTitleText: UE.TextRenderComponent;
            ["Sleep Text"]: UE.TextRenderComponent;
            CullingField: UE.CullingField;
            BoxFalloff: UE.BoxFalloff;
            ["Field Active"]: boolean;
            Threshold: number;
            ["Field Falloff Shape"]: UE.Engine.EditorResources.FieldNodes._Resources.EFieldShapeType.EFieldShapeType;
            ["Field Behavior"]: UE.Engine.EditorResources.FieldNodes._Resources.EFieldSleepType.EFieldSleepType;
            Debug: boolean;
            FaloffType: UE.EFieldFalloffType;
            FalloffMinMax: UE.Vector2D;
            PhysicsType: UE.EFieldPhysicsType;
            Deactivated: UE.LinearColor;
            ShowDebugText: boolean;
            ShowWireFrame: boolean;
            FieldVolume: UE.StaticMeshComponent;
            DeactivatedText: UE.LinearColor;
            SleepText: string;
            DisableText: string;
            KillText: string;
            ShowSolidShapes: boolean;
            ["Sleep Colour Def"]: UE.LinearColor;
            DisableColour: UE.LinearColor;
            KillColour: UE.LinearColor;
            ["Sleep Colour"]: UE.LinearColor;
            ["Text Vertical Offset"]: number;
            TextScaleMult: number;
            ExecuteUbergraph_FS_SleepDisable_Generic(EntryPoint: number) : void;
            ["Falloff Field Switch"](Magnitude: number, FaloffType: UE.EFieldFalloffType, CullingField: $Ref<UE.CullingField>) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            /*
             *Event called every frame, if ticking is enabled
             */
            ReceiveTick(DeltaSeconds: number) : void;
            SetFalloffVisibility() : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FS_SleepDisable_Generic_C;
            static Load(InName: string): FS_SleepDisable_Generic_C;
        
            __tid_FS_SleepDisable_Generic_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: cf13d457f44076428556ec66aca68a0f00000000
    namespace Engine.EditorResources.FieldNodes.FS_MasterField {
        class FS_MasterField_C extends UE.FieldSystemActor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            FieldSystemMetaDataProcessingResolution: UE.FieldSystemMetaDataProcessingResolution;
            SM_PlanarNormal_Arrow2: UE.StaticMeshComponent;
            PlaneVolumeFalloffDistance: UE.StaticMeshComponent;
            PlaneVolumeBox: UE.BoxComponent;
            PlaneVolume: UE.StaticMeshComponent;
            SM_DirectionArrow: UE.StaticMeshComponent;
            DirectionalArrowNull: UE.SphereComponent;
            SphereVolumeCol: UE.SphereComponent;
            SM_RadialArrow: UE.StaticMeshComponent;
            SM_RadialArrow4: UE.StaticMeshComponent;
            SM_RadialArrow3: UE.StaticMeshComponent;
            SM_RadialArrow2: UE.StaticMeshComponent;
            SM_RadialArrow1: UE.StaticMeshComponent;
            SM_RadialArrow5: UE.StaticMeshComponent;
            SM_PlanarNormal_Arrow1: UE.StaticMeshComponent;
            SM_DirectionArrow1: UE.StaticMeshComponent;
            SM_DirectionArrow2: UE.StaticMeshComponent;
            NoiseMaxValueText: UE.TextRenderComponent;
            NoiseMinValueText: UE.TextRenderComponent;
            TorqueValueText: UE.TextRenderComponent;
            ["Noise MinMaxTitle Text"]: UE.TextRenderComponent;
            TorqueTitleText: UE.TextRenderComponent;
            DirectionalValueText: UE.TextRenderComponent;
            DirectionalMagTitleText: UE.TextRenderComponent;
            RadialValueText: UE.TextRenderComponent;
            ["Radial Mag Title Text"]: UE.TextRenderComponent;
            StrainValueText: UE.TextRenderComponent;
            StrainTitleText: UE.TextRenderComponent;
            DelayTitleText: UE.TextRenderComponent;
            ActiveTitleText: UE.TextRenderComponent;
            DelayValueText: UE.TextRenderComponent;
            SphereVolume: UE.StaticMeshComponent;
            ActiveValueText: UE.TextRenderComponent;
            FieldTitleText: UE.TextRenderComponent;
            BoxVolume: UE.StaticMeshComponent;
            ["Field Text"]: UE.TextRenderComponent;
            BoxVolumeCol: UE.BoxComponent;
            ReturnResultsTerminal: UE.ReturnResultsTerminal;
            ["Field Active"]: boolean;
            OperatorFIeld_Input: UE.OperatorField;
            Debug: boolean;
            ActivationType: UE.Engine.EditorResources.FieldNodes._Resources.EFieldActivationType.EFieldActivationType;
            ["Field Falloff Shape"]: UE.Engine.EditorResources.FieldNodes._Resources.EFieldShapeType.EFieldShapeType;
            UseTick: boolean;
            DelayAmount: number;
            ["Use External Strain"]: boolean;
            ["Strain Magnitude"]: number;
            StrainFalloffType: UE.EFieldFalloffType;
            StrainFalloffMinMax: UE.Vector2D;
            NumStrainHits: number;
            UseRadialVector: boolean;
            ["Radial Magnitude"]: number;
            UseDirectionalVector: boolean;
            DirectionalMagnitude: number;
            UseTorque: boolean;
            TorqueMult: number;
            VelocityFieldFalloffType: UE.EFieldFalloffType;
            VelocityFalloffMinMax: UE.Vector2D;
            UseNoise: boolean;
            NoiseMinMax: UE.Vector2D;
            UseDecay: boolean;
            DecayAmount: number;
            DecayFalloffType: UE.EFieldFalloffType;
            DecayFalloffMinMax: UE.Vector2D;
            FieldVolume: UE.StaticMeshComponent;
            DecayDelay: number;
            MaxDecayAmount: number;
            RadialPositionOffset: UE.Vector;
            OverideDIrectionalVector: boolean;
            DIrectionalVectorOveride: UE.Vector;
            TorqueVectorOveride: UE.Vector;
            ["Force/Velocity Vector Switch"]: UE.Engine.EditorResources.FieldNodes._Resources.EFieldForceVel.EFieldForceVel;
            ForceMult: number;
            BoxCullingOnPlanar: boolean;
            PlanarFalloffDistOveride: number;
            ["Force Dynamic Switch"]: boolean;
            ActivateTaggedStaticAndSkeletal: boolean;
            ["Chaos Field Name"]: string;
            FieldColour: UE.LinearColor;
            ShowDebugText: boolean;
            ShowWireFrame: boolean;
            ShowSolidShapes: boolean;
            DirectionalDisplayScale: number;
            RadialDisplayScale: number;
            ["Text Vertical Offset"]: number;
            LinearPhysicsType: UE.EFieldPhysicsType;
            AngularPhysicsType: UE.EFieldPhysicsType;
            FieldFalloffType: UE.EFieldFalloffType;
            ["Field Falloff Noise"]: UE.EFieldFalloffType;
            ["Field Falloff Torque"]: UE.EFieldFalloffType;
            UseLifespan: boolean;
            FieldLifespan: number;
            UseFramesForTiming: boolean;
            FPS: number;
            ["Dynamic State"]: UE.EObjectStateTypeEnum;
            PlanarFalloffDist: number;
            TotalDecay: number;
            FalloffMinMax: UE.Vector2D;
            PlanarFalloffExtentColor: UE.LinearColor;
            DIrectionalVelocityVector: UE.Vector;
            upVector: UE.Vector;
            worldLocation: UE.Vector;
            forwardVector: UE.Vector;
            rightVector: UE.Vector;
            skel: UE.SkeletalMeshComponent;
            SimmableStaticMeshes: TArray<UE.StaticMeshActor>;
            SimmableSkelMeshes: TArray<UE.SkeletalMeshActor>;
            PulseLevel: string;
            TextDisplay: TArray<string>;
            AllText: TArray<UE.TextRenderComponent>;
            ArrowColour_Dir: UE.LinearColor;
            ArrowColour_Normal: UE.LinearColor;
            DeactivatedColour: UE.LinearColor;
            DeactivatedTextColour: UE.LinearColor;
            ["Preview Material"]: UE.MaterialInstanceDynamic;
            TimeElapsed: number;
            NoiseScaleMult: number;
            NewVar_0: UE.Transform;
            isTriggered: boolean;
            NoiseScaleBase: number;
            DestroyActor: boolean;
            FieldFalloffType_Input: UE.EFieldFalloffType;
            FalloffMinMax_Input: UE.Vector2D;
            Magnitude_Input: number;
            CalculateNoise(OutputPin: $Ref<UE.NoiseField>) : void;
            CE_Trigger() : void;
            DisplayTextSetup() : void;
            ExecuteUbergraph_FS_MasterField(EntryPoint: number) : void;
            FalloffAndCullSwitch_Main(Magnitude: number, FalloffType: UE.EFieldFalloffType, FalloffMinMax: UE.Vector2D, OperatorField: $Nullable<UE.OperatorField>, CullingField: $Ref<UE.CullingField>) : void;
            FalloffShapeSwitch(falloffType: UE.EFieldFalloffType, falloffMinMax: UE.Vector2D, OperatorFieldOut: $Ref<UE.OperatorField>) : void;
            ForceMultiplier() : void;
            InitializeFieldVariables() : void;
            MakeDynamic_EnableNonGC() : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            /*
             *Event called every frame, if ticking is enabled
             */
            ReceiveTick(DeltaSeconds: number) : void;
            SetVisibility() : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FS_MasterField_C;
            static Load(InName: string): FS_MasterField_C;
        
            __tid_FS_MasterField_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: e9249fa0b09f4b47b3ac1b9bbabf14eb00000000
    namespace Engine.EditorResources.FieldNodes.FS_BombField_Prototype {
        class FS_BombField_Prototype_C extends UE.FieldSystemActor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            FieldSystemMetaDataProcessingResolution: UE.FieldSystemMetaDataProcessingResolution;
            SphereVolumeCol: UE.SphereComponent;
            bomb: UE.SphereComponent;
            bombVolume: UE.StaticMeshComponent;
            PlaneFalloff_ForceDynamic: UE.PlaneFalloff;
            RadialFalloff_ForceDynamic: UE.RadialFalloff;
            OperatorField_ForceDynamic: UE.OperatorField;
            BoxFalloff_ForceDynamic: UE.BoxFalloff;
            PlaneFalloff_InternalStrain: UE.PlaneFalloff;
            BoxFalloff_InternalStrain: UE.BoxFalloff;
            OperatorField_InternalStrain: UE.OperatorField;
            RadialFalloff_InternalStrain: UE.RadialFalloff;
            UniformIntegerFalloff: UE.UniformInteger;
            SM_PlanarNormal_Arrow2: UE.StaticMeshComponent;
            PlaneVolumeFalloffDistance: UE.StaticMeshComponent;
            PlaneVolumeBox: UE.BoxComponent;
            PlaneVolume: UE.StaticMeshComponent;
            SM_DirectionArrow: UE.StaticMeshComponent;
            DirectionalArrowNull: UE.SphereComponent;
            SM_RadialArrow: UE.StaticMeshComponent;
            SM_RadialArrow4: UE.StaticMeshComponent;
            SM_RadialArrow3: UE.StaticMeshComponent;
            SM_RadialArrow2: UE.StaticMeshComponent;
            SM_RadialArrow1: UE.StaticMeshComponent;
            SM_RadialArrow5: UE.StaticMeshComponent;
            CullingField_Plane2: UE.CullingField;
            SM_PlanarNormal_Arrow1: UE.StaticMeshComponent;
            SM_DirectionArrow1: UE.StaticMeshComponent;
            SM_DirectionArrow2: UE.StaticMeshComponent;
            NoiseMaxValueText: UE.TextRenderComponent;
            NoiseMinValueText: UE.TextRenderComponent;
            TorqueValueText: UE.TextRenderComponent;
            ["Noise MinMaxTitle Text"]: UE.TextRenderComponent;
            TorqueTitleText: UE.TextRenderComponent;
            DirectionalValueText: UE.TextRenderComponent;
            DirectionalMagTitleText: UE.TextRenderComponent;
            RadialValueText: UE.TextRenderComponent;
            ["Radial Mag Title Text"]: UE.TextRenderComponent;
            StrainValueText: UE.TextRenderComponent;
            StrainTitleText: UE.TextRenderComponent;
            DelayTitleText: UE.TextRenderComponent;
            ActiveTitleText: UE.TextRenderComponent;
            DelayValueText: UE.TextRenderComponent;
            OperatorField_FalloffSwitch_Plane: UE.OperatorField;
            OperatorField_FalloffSwitch_Sph: UE.OperatorField;
            OperatorField_FalloffSwitch_Box: UE.OperatorField;
            CullingField_Plane: UE.CullingField;
            PlaneFalloff_Magnitude: UE.PlaneFalloff;
            PlaneFalloff: UE.PlaneFalloff;
            CullingField_Box: UE.CullingField;
            BoxFalloff_Culling: UE.BoxFalloff;
            BoxFalloff: UE.BoxFalloff;
            BoxFalloff_Magnitude: UE.BoxFalloff;
            SphereVolume: UE.StaticMeshComponent;
            ActiveValueText: UE.TextRenderComponent;
            FieldTitleText: UE.TextRenderComponent;
            BoxVolume: UE.StaticMeshComponent;
            ["Field Text"]: UE.TextRenderComponent;
            BoxVolumeCol: UE.BoxComponent;
            UniformScalarDecay: UE.UniformScalar;
            OperatorFieldDecay1: UE.OperatorField;
            OperatorFieldDecay2: UE.OperatorField;
            ReturnResultsTerminal: UE.ReturnResultsTerminal;
            OperatorField_torqueC: UE.OperatorField;
            OperatorField_dirNoise: UE.OperatorField;
            OperatorField_radNoise: UE.OperatorField;
            NoiseField_Torque: UE.NoiseField;
            OperatorField_torque_A: UE.OperatorField;
            UniformScalar_torque: UE.UniformScalar;
            CullingField_DynamicState: UE.CullingField;
            UniformInteger: UE.UniformInteger;
            ["CullingField-Decay"]: UE.CullingField;
            CullingFieldSphere: UE.CullingField;
            RadialFalloffMagnitude: UE.RadialFalloff;
            RadialFalloff_cullVolume: UE.RadialFalloff;
            OperatorFieldDecay4: UE.OperatorField;
            CullingField: UE.CullingField;
            RadialFalloff: UE.RadialFalloff;
            OperatorField_torque_B: UE.OperatorField;
            UniformVector_torque: UE.UniformVector;
            RandomVector_torque: UE.RandomVector;
            NoiseField_dir: UE.NoiseField;
            NoiseField_rad: UE.NoiseField;
            UniformVector_dir: UE.UniformVector;
            RadialVector_rad: UE.RadialVector;
            ["Field Active"]: boolean;
            Debug: boolean;
            ActivationType: UE.Engine.EditorResources.FieldNodes._Resources.EFieldActivationType.EFieldActivationType;
            ["Field Falloff Shape"]: UE.Engine.EditorResources.FieldNodes._Resources.EFieldShapeType.EFieldShapeType;
            UseTick: boolean;
            DelayAmount: number;
            ["Use External Strain"]: boolean;
            ["Strain Magnitude"]: number;
            StrainFalloffType: UE.EFieldFalloffType;
            StrainFalloffMinMax: UE.Vector2D;
            NumStrainHits: number;
            UseRadialVector: boolean;
            ["Radial Magnitude"]: number;
            UseDirectionalVector: boolean;
            DirectionalMagnitude: number;
            UseTorque: boolean;
            TorqueMult: number;
            VelocityFieldFalloffType: UE.EFieldFalloffType;
            VelocityFalloffMinMax: UE.Vector2D;
            UseNoise: boolean;
            NoiseMinMax: UE.Vector2D;
            UseDecay: boolean;
            DecayAmount: number;
            DecayFalloffType: UE.EFieldFalloffType;
            DecayFalloffMinMax: UE.Vector2D;
            FieldVolume: UE.StaticMeshComponent;
            DecayDelay: number;
            MaxDecayAmount: number;
            RadialPositionOffset: UE.Vector;
            OverideDIrectionalVector: boolean;
            DIrectionalVectorOveride: UE.Vector;
            TorqueVectorOveride: UE.Vector;
            ["Force/Velocity Vector Switch"]: UE.Engine.EditorResources.FieldNodes._Resources.EFieldForceVel.EFieldForceVel;
            ForceMult: number;
            BoxCullingOnPlanar: boolean;
            PlanarFalloffDistOveride: number;
            ["Force Dynamic Switch"]: boolean;
            ActivateTaggedStaticAndSkeletal: boolean;
            ["Chaos Field Name"]: string;
            FieldColour: UE.LinearColor;
            ShowDebugText: boolean;
            ShowWireFrame: boolean;
            ShowSolidShapes: boolean;
            DirectionalDisplayScale: number;
            RadialDisplayScale: number;
            ["Text Vertical Offset"]: number;
            LinearPhysicsType: UE.EFieldPhysicsType;
            AngularPhysicsType: UE.EFieldPhysicsType;
            FieldFalloffType: UE.EFieldFalloffType;
            ["Field Falloff Noise"]: UE.EFieldFalloffType;
            ["Field Falloff Torque"]: UE.EFieldFalloffType;
            UseLifespan: boolean;
            FieldLifespan: number;
            UseFramesForTiming: boolean;
            FPS: number;
            ["Dynamic State"]: UE.EObjectStateTypeEnum;
            PlanarFalloffDist: number;
            TotalDecay: number;
            FalloffMinMax: UE.Vector2D;
            PlanarFalloffExtentColor: UE.LinearColor;
            DIrectionalVelocityVector: UE.Vector;
            upVector: UE.Vector;
            worldLocation: UE.Vector;
            forwardVector: UE.Vector;
            rightVector: UE.Vector;
            skel: UE.SkeletalMeshComponent;
            SimmableStaticMeshes: TArray<UE.StaticMeshActor>;
            SimmableSkelMeshes: TArray<UE.SkeletalMeshActor>;
            PulseLevel: string;
            TextDisplay: TArray<string>;
            AllText: TArray<UE.TextRenderComponent>;
            ArrowColour_Dir: UE.LinearColor;
            ArrowColour_Normal: UE.LinearColor;
            DeactivatedColour: UE.LinearColor;
            DeactivatedTextColour: UE.LinearColor;
            ["Preview Material"]: UE.MaterialInstanceDynamic;
            TimeElapsed: number;
            NoiseScaleMult: number;
            NewVar_0: UE.Transform;
            isTriggered: boolean;
            NoiseScaleBase: number;
            DestroyActor: boolean;
            useBomb: boolean;
            bombMinScale: number;
            bombMaxScale: number;
            bombDuration: number;
            bombSize: number;
            bombpos: UE.Vector;
            bombxloc: number;
            bombPosOrig: UE.Vector;
            bombScaleOrig: UE.Vector;
            delta: number;
            totalElapsedTime: number;
            totalDistance: number;
            oldPos: number;
            ["New Location"]: UE.Vector;
            bombExtraDistance: number;
            useBombLocationOffset: boolean;
            useBombPhysics: boolean;
            currentPos: number;
            velocity: number;
            useDynScale: boolean;
            useDynFieldPos: boolean;
            falloffMinMax_Input: UE.Vector2D;
            FieldFalloffType_Input: UE.EFieldFalloffType;
            OperatorField_Input: UE.OperatorField;
            Magnitude_Input: number;
            bombMass: number;
            useProjectile: boolean;
            projectileFired: boolean;
            projectileVelocity: number;
            oldPosVec: UE.Vector;
            currentPosVec: UE.Vector;
            velocityVec: UE.Vector;
            projectileVelocityMult: number;
            projectileMaxScale: number;
            projectileMinMaxVelRange: UE.Vector2D;
            useCCD: boolean;
            CalculateNoise(OutputPin: $Ref<UE.NoiseField>) : void;
            CE_Trigger() : void;
            DisplayTextSetup() : void;
            ExecuteUbergraph_FS_BombField_Prototype(EntryPoint: number) : void;
            FalloffAndCullingSwitch(FalloffType: UE.EFieldFalloffType, OperatorFieldIn: $Nullable<UE.OperatorField>, falloffMinMax: UE.Vector2D, CullingFieldOut: $Ref<UE.CullingField>) : void;
            FalloffAndCullSwitch_Main(Magnitude: number, FalloffType: UE.EFieldFalloffType, FalloffMinMax: UE.Vector2D, OperatorField: $Nullable<UE.OperatorField>, CullingField: $Ref<UE.CullingField>) : void;
            FalloffShapeSwitch(falloffType: UE.EFieldFalloffType, falloffMinMax: UE.Vector2D, falloffMinMax_X: number, falloffMinMax_Y: number, OperatorFieldOut: $Ref<UE.OperatorField>) : void;
            FalloffSwitch(falloffType: UE.EFieldFalloffType, falloffMinMax: UE.Vector2D, OperatorFieldOut: $Ref<UE.OperatorField>, NewParam: $Ref<UE.RadialFalloff>) : void;
            ["FalloffSwitch - Strain"](Magnitude: number, FalloffType: UE.EFieldFalloffType, CullingField: $Ref<UE.CullingField>) : void;
            FalloffSwitch_ForceDynamic(falloffType: UE.EFieldFalloffType, falloffMinMax: UE.Vector2D, OperatorFieldOut: $Ref<UE.OperatorField>) : void;
            FalloffSwitch_InternalStrain(falloffType: UE.EFieldFalloffType, falloffMinMax: UE.Vector2D, OperatorFieldOut: $Ref<UE.OperatorField>) : void;
            ForceMultiplier() : void;
            InitializeFieldVariables() : void;
            MakeDynamic_EnableNonGC() : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            /*
             *Event called every frame, if ticking is enabled
             */
            ReceiveTick(DeltaSeconds: number) : void;
            SetColliderLocation() : void;
            SetVisibility() : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FS_BombField_Prototype_C;
            static Load(InName: string): FS_BombField_Prototype_C;
        
            __tid_FS_BombField_Prototype_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: f5267b36b911d343870e6434675e4e7100000000
    namespace Engine.EditorResources.FieldNodes.FS_AnchorField_Generic {
        class FS_AnchorField_Generic_C extends UE.FieldSystemActor {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            UberGraphFrame: UE.PointerToUberGraphFrame;
            PlaneVolumeCol: UE.BoxComponent;
            ActiveTitleText: UE.TextRenderComponent;
            ["Anchor Title Text"]: UE.TextRenderComponent;
            ActiveValueText: UE.TextRenderComponent;
            ["Anchor Text"]: UE.TextRenderComponent;
            SphereVolume: UE.StaticMeshComponent;
            BoxVolume: UE.StaticMeshComponent;
            Arrow: UE.ArrowComponent;
            SphereVolumeCol: UE.SphereComponent;
            CullingField_Plane: UE.CullingField;
            CullingField_Sphere: UE.CullingField;
            RadialFalloff: UE.RadialFalloff;
            PlaneVolume: UE.StaticMeshComponent;
            PlaneFalloff: UE.PlaneFalloff;
            CullingField_Box: UE.CullingField;
            BoxVolumeCol: UE.BoxComponent;
            BoxFalloff: UE.BoxFalloff;
            UniformInteger: UE.UniformInteger;
            RadialVector: UE.RadialVector;
            ["Dynamic State"]: UE.EObjectStateTypeEnum;
            ["Anchor Active"]: boolean;
            ["Anchor Falloff Shape"]: UE.Engine.EditorResources.FieldNodes._Resources.EFieldShapeType.EFieldShapeType;
            Debug: boolean;
            AnchorColour: UE.LinearColor;
            Deactivated: UE.LinearColor;
            AnchorVolume: UE.StaticMeshComponent;
            AnchorTextDisplay: string;
            ViewDebugText: boolean;
            ViewWireFrame: boolean;
            ViewSolidShapes: boolean;
            TextVerticalOffset: number;
            DeactivatedText: UE.LinearColor;
            TextScaleMult: number;
            AnchorDebugSetup() : void;
            ExecuteUbergraph_FS_AnchorField_Generic(EntryPoint: number) : void;
            ["Falloff Field Switch"](UniformInt: $Nullable<UE.UniformInteger>, CullingField: $Ref<UE.CullingField>) : void;
            /*
             *Event when play begins for this actor.
             */
            ReceiveBeginPlay() : void;
            SetFalloffVisibility() : void;
            /*
             *Construction script, the place to spawn components and do other setup.
             *@note Name used in CreateBlueprint function
             */
            UserConstructionScript() : void;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FS_AnchorField_Generic_C;
            static Load(InName: string): FS_AnchorField_Generic_C;
        
            __tid_FS_AnchorField_Generic_C_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AchievementWriteCompleteDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AchievementWriteCompleteDelegate__PythonCallable;
            static Load(InName: string): AchievementWriteCompleteDelegate__PythonCallable;
        
            __tid_AchievementWriteCompleteDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AchievementWriteDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AchievementWriteDelegate__PythonCallable;
            static Load(InName: string): AchievementWriteDelegate__PythonCallable;
        
            __tid_AchievementWriteDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorBeginCursorOverSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorBeginCursorOverSignature__PythonCallable;
            static Load(InName: string): ActorBeginCursorOverSignature__PythonCallable;
        
            __tid_ActorBeginCursorOverSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorBeginOverlapSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorBeginOverlapSignature__PythonCallable;
            static Load(InName: string): ActorBeginOverlapSignature__PythonCallable;
        
            __tid_ActorBeginOverlapSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorBeginTouchOverSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorBeginTouchOverSignature__PythonCallable;
            static Load(InName: string): ActorBeginTouchOverSignature__PythonCallable;
        
            __tid_ActorBeginTouchOverSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorComponentActivatedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorComponentActivatedSignature__PythonCallable;
            static Load(InName: string): ActorComponentActivatedSignature__PythonCallable;
        
            __tid_ActorComponentActivatedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorComponentDeactivateSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorComponentDeactivateSignature__PythonCallable;
            static Load(InName: string): ActorComponentDeactivateSignature__PythonCallable;
        
            __tid_ActorComponentDeactivateSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorDestroyedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorDestroyedSignature__PythonCallable;
            static Load(InName: string): ActorDestroyedSignature__PythonCallable;
        
            __tid_ActorDestroyedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorEndCursorOverSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorEndCursorOverSignature__PythonCallable;
            static Load(InName: string): ActorEndCursorOverSignature__PythonCallable;
        
            __tid_ActorEndCursorOverSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorEndOverlapSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorEndOverlapSignature__PythonCallable;
            static Load(InName: string): ActorEndOverlapSignature__PythonCallable;
        
            __tid_ActorEndOverlapSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorEndPlaySignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorEndPlaySignature__PythonCallable;
            static Load(InName: string): ActorEndPlaySignature__PythonCallable;
        
            __tid_ActorEndPlaySignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorEndTouchOverSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorEndTouchOverSignature__PythonCallable;
            static Load(InName: string): ActorEndTouchOverSignature__PythonCallable;
        
            __tid_ActorEndTouchOverSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorHitSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorHitSignature__PythonCallable;
            static Load(InName: string): ActorHitSignature__PythonCallable;
        
            __tid_ActorHitSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorOnClickedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorOnClickedSignature__PythonCallable;
            static Load(InName: string): ActorOnClickedSignature__PythonCallable;
        
            __tid_ActorOnClickedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorOnInputTouchBeginSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorOnInputTouchBeginSignature__PythonCallable;
            static Load(InName: string): ActorOnInputTouchBeginSignature__PythonCallable;
        
            __tid_ActorOnInputTouchBeginSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorOnInputTouchEndSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorOnInputTouchEndSignature__PythonCallable;
            static Load(InName: string): ActorOnInputTouchEndSignature__PythonCallable;
        
            __tid_ActorOnInputTouchEndSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorOnReleasedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorOnReleasedSignature__PythonCallable;
            static Load(InName: string): ActorOnReleasedSignature__PythonCallable;
        
            __tid_ActorOnReleasedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorPerceptionForgetUpdatedDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorPerceptionForgetUpdatedDelegate__PythonCallable;
            static Load(InName: string): ActorPerceptionForgetUpdatedDelegate__PythonCallable;
        
            __tid_ActorPerceptionForgetUpdatedDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorPerceptionInfoUpdatedDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorPerceptionInfoUpdatedDelegate__PythonCallable;
            static Load(InName: string): ActorPerceptionInfoUpdatedDelegate__PythonCallable;
        
            __tid_ActorPerceptionInfoUpdatedDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ActorPerceptionUpdatedDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ActorPerceptionUpdatedDelegate__PythonCallable;
            static Load(InName: string): ActorPerceptionUpdatedDelegate__PythonCallable;
        
            __tid_ActorPerceptionUpdatedDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AdvancedCopyCompletedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AdvancedCopyCompletedEvent__PythonCallable;
            static Load(InName: string): AdvancedCopyCompletedEvent__PythonCallable;
        
            __tid_AdvancedCopyCompletedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AIMoveCompletedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AIMoveCompletedSignature__PythonCallable;
            static Load(InName: string): AIMoveCompletedSignature__PythonCallable;
        
            __tid_AIMoveCompletedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AndroidPermissionDynamicDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AndroidPermissionDynamicDelegate__PythonCallable;
            static Load(InName: string): AndroidPermissionDynamicDelegate__PythonCallable;
        
            __tid_AndroidPermissionDynamicDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AnimDataModelModifiedDynamicEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AnimDataModelModifiedDynamicEvent__PythonCallable;
            static Load(InName: string): AnimDataModelModifiedDynamicEvent__PythonCallable;
        
            __tid_AnimDataModelModifiedDynamicEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AppleImageConversionDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AppleImageConversionDelegate__PythonCallable;
            static Load(InName: string): AppleImageConversionDelegate__PythonCallable;
        
            __tid_AppleImageConversionDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ApplicationLifecycleComponent_ApplicationLifetimeDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ApplicationLifecycleComponent_ApplicationLifetimeDelegate__PythonCallable;
            static Load(InName: string): ApplicationLifecycleComponent_ApplicationLifetimeDelegate__PythonCallable;
        
            __tid_ApplicationLifecycleComponent_ApplicationLifetimeDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ApplicationLifecycleComponent_ApplicationStartupArgumentsDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ApplicationLifecycleComponent_ApplicationStartupArgumentsDelegate__PythonCallable;
            static Load(InName: string): ApplicationLifecycleComponent_ApplicationStartupArgumentsDelegate__PythonCallable;
        
            __tid_ApplicationLifecycleComponent_ApplicationStartupArgumentsDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ApplicationLifecycleComponent_OnLowPowerModeDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ApplicationLifecycleComponent_OnLowPowerModeDelegate__PythonCallable;
            static Load(InName: string): ApplicationLifecycleComponent_OnLowPowerModeDelegate__PythonCallable;
        
            __tid_ApplicationLifecycleComponent_OnLowPowerModeDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ApplicationLifecycleComponent_OnTemperatureChangeDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ApplicationLifecycleComponent_OnTemperatureChangeDelegate__PythonCallable;
            static Load(InName: string): ApplicationLifecycleComponent_OnTemperatureChangeDelegate__PythonCallable;
        
            __tid_ApplicationLifecycleComponent_OnTemperatureChangeDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AssetCreateCancelledDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AssetCreateCancelledDynamic__PythonCallable;
            static Load(InName: string): AssetCreateCancelledDynamic__PythonCallable;
        
            __tid_AssetCreateCancelledDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AssetCreateCompleteDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AssetCreateCompleteDynamic__PythonCallable;
            static Load(InName: string): AssetCreateCompleteDynamic__PythonCallable;
        
            __tid_AssetCreateCompleteDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AssetRegistryHelpers_SortingPredicate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AssetRegistryHelpers_SortingPredicate__PythonCallable;
            static Load(InName: string): AssetRegistryHelpers_SortingPredicate__PythonCallable;
        
            __tid_AssetRegistryHelpers_SortingPredicate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AsyncDelayComplete__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AsyncDelayComplete__PythonCallable;
            static Load(InName: string): AsyncDelayComplete__PythonCallable;
        
            __tid_AsyncDelayComplete__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AsyncEditorWaitForGameWorldEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AsyncEditorWaitForGameWorldEvent__PythonCallable;
            static Load(InName: string): AsyncEditorWaitForGameWorldEvent__PythonCallable;
        
            __tid_AsyncEditorWaitForGameWorldEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AsyncNiagaraCaptureSimCache_OnCaptureComplete__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AsyncNiagaraCaptureSimCache_OnCaptureComplete__PythonCallable;
            static Load(InName: string): AsyncNiagaraCaptureSimCache_OnCaptureComplete__PythonCallable;
        
            __tid_AsyncNiagaraCaptureSimCache_OnCaptureComplete__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AudioMaterialMeter_GetMeterChannelInfo__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AudioMaterialMeter_GetMeterChannelInfo__PythonCallable;
            static Load(InName: string): AudioMaterialMeter_GetMeterChannelInfo__PythonCallable;
        
            __tid_AudioMaterialMeter_GetMeterChannelInfo__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AudioMeter_GetMeterChannelInfo__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AudioMeter_GetMeterChannelInfo__PythonCallable;
            static Load(InName: string): AudioMeter_GetMeterChannelInfo__PythonCallable;
        
            __tid_AudioMeter_GetMeterChannelInfo__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AudioOscilloscope_GetOscilloscopeAudioSamples__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AudioOscilloscope_GetOscilloscopeAudioSamples__PythonCallable;
            static Load(InName: string): AudioOscilloscope_GetOscilloscopeAudioSamples__PythonCallable;
        
            __tid_AudioOscilloscope_GetOscilloscopeAudioSamples__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class AudioVectorscope_GetVectorscopeAudioSamples__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): AudioVectorscope_GetVectorscopeAudioSamples__PythonCallable;
            static Load(InName: string): AudioVectorscope_GetVectorscopeAudioSamples__PythonCallable;
        
            __tid_AudioVectorscope_GetVectorscopeAudioSamples__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class BlueprintFindSessionsResultDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BlueprintFindSessionsResultDelegate__PythonCallable;
            static Load(InName: string): BlueprintFindSessionsResultDelegate__PythonCallable;
        
            __tid_BlueprintFindSessionsResultDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class BreakEventSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): BreakEventSignature__PythonCallable;
            static Load(InName: string): BreakEventSignature__PythonCallable;
        
            __tid_BreakEventSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class CharacterMovementUpdatedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): CharacterMovementUpdatedSignature__PythonCallable;
            static Load(InName: string): CharacterMovementUpdatedSignature__PythonCallable;
        
            __tid_CharacterMovementUpdatedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class CharacterReachedApexSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): CharacterReachedApexSignature__PythonCallable;
            static Load(InName: string): CharacterReachedApexSignature__PythonCallable;
        
            __tid_CharacterReachedApexSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class CheckCanCompleteDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): CheckCanCompleteDelegate__PythonCallable;
            static Load(InName: string): CheckCanCompleteDelegate__PythonCallable;
        
            __tid_CheckCanCompleteDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class CollisionEventSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): CollisionEventSignature__PythonCallable;
            static Load(InName: string): CollisionEventSignature__PythonCallable;
        
            __tid_CollisionEventSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComboBoxKey_GenerateWidgetEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComboBoxKey_GenerateWidgetEvent__PythonCallable;
            static Load(InName: string): ComboBoxKey_GenerateWidgetEvent__PythonCallable;
        
            __tid_ComboBoxKey_GenerateWidgetEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComboBoxKey_OnOpeningEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComboBoxKey_OnOpeningEvent__PythonCallable;
            static Load(InName: string): ComboBoxKey_OnOpeningEvent__PythonCallable;
        
            __tid_ComboBoxKey_OnOpeningEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComboBoxKey_OnSelectionChangedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComboBoxKey_OnSelectionChangedEvent__PythonCallable;
            static Load(InName: string): ComboBoxKey_OnSelectionChangedEvent__PythonCallable;
        
            __tid_ComboBoxKey_OnSelectionChangedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComboBoxString_OnOpeningEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComboBoxString_OnOpeningEvent__PythonCallable;
            static Load(InName: string): ComboBoxString_OnOpeningEvent__PythonCallable;
        
            __tid_ComboBoxString_OnOpeningEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComboBoxString_OnSelectionChangedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComboBoxString_OnSelectionChangedEvent__PythonCallable;
            static Load(InName: string): ComboBoxString_OnSelectionChangedEvent__PythonCallable;
        
            __tid_ComboBoxString_OnSelectionChangedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentBeginCursorOverSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentBeginCursorOverSignature__PythonCallable;
            static Load(InName: string): ComponentBeginCursorOverSignature__PythonCallable;
        
            __tid_ComponentBeginCursorOverSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentBeginOverlapSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentBeginOverlapSignature__PythonCallable;
            static Load(InName: string): ComponentBeginOverlapSignature__PythonCallable;
        
            __tid_ComponentBeginOverlapSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentBeginTouchOverSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentBeginTouchOverSignature__PythonCallable;
            static Load(InName: string): ComponentBeginTouchOverSignature__PythonCallable;
        
            __tid_ComponentBeginTouchOverSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentCollisionSettingsChangedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentCollisionSettingsChangedSignature__PythonCallable;
            static Load(InName: string): ComponentCollisionSettingsChangedSignature__PythonCallable;
        
            __tid_ComponentCollisionSettingsChangedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentEndCursorOverSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentEndCursorOverSignature__PythonCallable;
            static Load(InName: string): ComponentEndCursorOverSignature__PythonCallable;
        
            __tid_ComponentEndCursorOverSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentEndOverlapSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentEndOverlapSignature__PythonCallable;
            static Load(InName: string): ComponentEndOverlapSignature__PythonCallable;
        
            __tid_ComponentEndOverlapSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentEndTouchOverSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentEndTouchOverSignature__PythonCallable;
            static Load(InName: string): ComponentEndTouchOverSignature__PythonCallable;
        
            __tid_ComponentEndTouchOverSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentHitSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentHitSignature__PythonCallable;
            static Load(InName: string): ComponentHitSignature__PythonCallable;
        
            __tid_ComponentHitSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentOnClickedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentOnClickedSignature__PythonCallable;
            static Load(InName: string): ComponentOnClickedSignature__PythonCallable;
        
            __tid_ComponentOnClickedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentOnInputTouchBeginSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentOnInputTouchBeginSignature__PythonCallable;
            static Load(InName: string): ComponentOnInputTouchBeginSignature__PythonCallable;
        
            __tid_ComponentOnInputTouchBeginSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentOnInputTouchEndSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentOnInputTouchEndSignature__PythonCallable;
            static Load(InName: string): ComponentOnInputTouchEndSignature__PythonCallable;
        
            __tid_ComponentOnInputTouchEndSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentOnReleasedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentOnReleasedSignature__PythonCallable;
            static Load(InName: string): ComponentOnReleasedSignature__PythonCallable;
        
            __tid_ComponentOnReleasedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentPhysicsStateChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentPhysicsStateChanged__PythonCallable;
            static Load(InName: string): ComponentPhysicsStateChanged__PythonCallable;
        
            __tid_ComponentPhysicsStateChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentSleepSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentSleepSignature__PythonCallable;
            static Load(InName: string): ComponentSleepSignature__PythonCallable;
        
            __tid_ComponentSleepSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ComponentWakeSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ComponentWakeSignature__PythonCallable;
            static Load(InName: string): ComponentWakeSignature__PythonCallable;
        
            __tid_ComponentWakeSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ConstraintBrokenSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ConstraintBrokenSignature__PythonCallable;
            static Load(InName: string): ConstraintBrokenSignature__PythonCallable;
        
            __tid_ConstraintBrokenSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ConstraintsManager_OnConstraintAdded__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ConstraintsManager_OnConstraintAdded__PythonCallable;
            static Load(InName: string): ConstraintsManager_OnConstraintAdded__PythonCallable;
        
            __tid_ConstraintsManager_OnConstraintAdded__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ConstraintsManager_OnConstraintRemoved__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ConstraintsManager_OnConstraintRemoved__PythonCallable;
            static Load(InName: string): ConstraintsManager_OnConstraintRemoved__PythonCallable;
        
            __tid_ConstraintsManager_OnConstraintRemoved__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ConstraintSubsystem_OnConstraintAddedToSystem__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ConstraintSubsystem_OnConstraintAddedToSystem__PythonCallable;
            static Load(InName: string): ConstraintSubsystem_OnConstraintAddedToSystem__PythonCallable;
        
            __tid_ConstraintSubsystem_OnConstraintAddedToSystem__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ConstraintSubsystem_OnConstraintRemovedFromSystem__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ConstraintSubsystem_OnConstraintRemovedFromSystem__PythonCallable;
            static Load(InName: string): ConstraintSubsystem_OnConstraintRemovedFromSystem__PythonCallable;
        
            __tid_ConstraintSubsystem_OnConstraintRemovedFromSystem__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ControlRig_OnControlSelectedBP__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ControlRig_OnControlSelectedBP__PythonCallable;
            static Load(InName: string): ControlRig_OnControlSelectedBP__PythonCallable;
        
            __tid_ControlRig_OnControlSelectedBP__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ControlRigComponentDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ControlRigComponentDelegate__PythonCallable;
            static Load(InName: string): ControlRigComponentDelegate__PythonCallable;
        
            __tid_ControlRigComponentDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ControlRigEditModeInteractionEndedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ControlRigEditModeInteractionEndedEvent__PythonCallable;
            static Load(InName: string): ControlRigEditModeInteractionEndedEvent__PythonCallable;
        
            __tid_ControlRigEditModeInteractionEndedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ControlRigEditModeInteractionStartedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ControlRigEditModeInteractionStartedEvent__PythonCallable;
            static Load(InName: string): ControlRigEditModeInteractionStartedEvent__PythonCallable;
        
            __tid_ControlRigEditModeInteractionStartedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ControlRigEditModeInteractionUpdatedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ControlRigEditModeInteractionUpdatedEvent__PythonCallable;
            static Load(InName: string): ControlRigEditModeInteractionUpdatedEvent__PythonCallable;
        
            __tid_ControlRigEditModeInteractionUpdatedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class CrumblingEventSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): CrumblingEventSignature__PythonCallable;
            static Load(InName: string): CrumblingEventSignature__PythonCallable;
        
            __tid_CrumblingEventSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class CustomWidgetNavigationDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): CustomWidgetNavigationDelegate__PythonCallable;
            static Load(InName: string): CustomWidgetNavigationDelegate__PythonCallable;
        
            __tid_CustomWidgetNavigationDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class DataDrivenCVarEngineSubsystem_OnDataDrivenCVarChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): DataDrivenCVarEngineSubsystem_OnDataDrivenCVarChanged__PythonCallable;
            static Load(InName: string): DataDrivenCVarEngineSubsystem_OnDataDrivenCVarChanged__PythonCallable;
        
            __tid_DataDrivenCVarEngineSubsystem_OnDataDrivenCVarChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class DirectoryWatcherCallback__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): DirectoryWatcherCallback__PythonCallable;
            static Load(InName: string): DirectoryWatcherCallback__PythonCallable;
        
            __tid_DirectoryWatcherCallback__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class DownloadImageDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): DownloadImageDelegate__PythonCallable;
            static Load(InName: string): DownloadImageDelegate__PythonCallable;
        
            __tid_DownloadImageDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class EditableText_OnEditableTextChangedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): EditableText_OnEditableTextChangedEvent__PythonCallable;
            static Load(InName: string): EditableText_OnEditableTextChangedEvent__PythonCallable;
        
            __tid_EditableText_OnEditableTextChangedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class EditableText_OnEditableTextCommittedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): EditableText_OnEditableTextCommittedEvent__PythonCallable;
            static Load(InName: string): EditableText_OnEditableTextCommittedEvent__PythonCallable;
        
            __tid_EditableText_OnEditableTextCommittedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class EditableTextBox_OnEditableTextBoxChangedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): EditableTextBox_OnEditableTextBoxChangedEvent__PythonCallable;
            static Load(InName: string): EditableTextBox_OnEditableTextBoxChangedEvent__PythonCallable;
        
            __tid_EditableTextBox_OnEditableTextBoxChangedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class EditableTextBox_OnEditableTextBoxCommittedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): EditableTextBox_OnEditableTextBoxCommittedEvent__PythonCallable;
            static Load(InName: string): EditableTextBox_OnEditableTextBoxCommittedEvent__PythonCallable;
        
            __tid_EditableTextBox_OnEditableTextBoxCommittedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class EditorAssetSubsystem_OnExtractAssetFromFileDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): EditorAssetSubsystem_OnExtractAssetFromFileDynamic__PythonCallable;
            static Load(InName: string): EditorAssetSubsystem_OnExtractAssetFromFileDynamic__PythonCallable;
        
            __tid_EditorAssetSubsystem_OnExtractAssetFromFileDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class EmptyOnlineDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): EmptyOnlineDelegate__PythonCallable;
            static Load(InName: string): EmptyOnlineDelegate__PythonCallable;
        
            __tid_EmptyOnlineDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class EnhancedInputActionHandlerDynamicSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): EnhancedInputActionHandlerDynamicSignature__PythonCallable;
            static Load(InName: string): EnhancedInputActionHandlerDynamicSignature__PythonCallable;
        
            __tid_EnhancedInputActionHandlerDynamicSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class EnhancedInputLocalPlayerSubsystem_OnControlMappingsRebuilt__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): EnhancedInputLocalPlayerSubsystem_OnControlMappingsRebuilt__PythonCallable;
            static Load(InName: string): EnhancedInputLocalPlayerSubsystem_OnControlMappingsRebuilt__PythonCallable;
        
            __tid_EnhancedInputLocalPlayerSubsystem_OnControlMappingsRebuilt__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class EnhancedInputLocalPlayerSubsystem_OnMappingContextAdded__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): EnhancedInputLocalPlayerSubsystem_OnMappingContextAdded__PythonCallable;
            static Load(InName: string): EnhancedInputLocalPlayerSubsystem_OnMappingContextAdded__PythonCallable;
        
            __tid_EnhancedInputLocalPlayerSubsystem_OnMappingContextAdded__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class EnhancedInputLocalPlayerSubsystem_OnMappingContextRemoved__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): EnhancedInputLocalPlayerSubsystem_OnMappingContextRemoved__PythonCallable;
            static Load(InName: string): EnhancedInputLocalPlayerSubsystem_OnMappingContextRemoved__PythonCallable;
        
            __tid_EnhancedInputLocalPlayerSubsystem_OnMappingContextRemoved__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class EnhancedInputLocalPlayerSubsystem_OnUserSettingsPostInitialized__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): EnhancedInputLocalPlayerSubsystem_OnUserSettingsPostInitialized__PythonCallable;
            static Load(InName: string): EnhancedInputLocalPlayerSubsystem_OnUserSettingsPostInitialized__PythonCallable;
        
            __tid_EnhancedInputLocalPlayerSubsystem_OnUserSettingsPostInitialized__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class EnhancedInputUserSettings_EnhancedInputUserSettingsApplied__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): EnhancedInputUserSettings_EnhancedInputUserSettingsApplied__PythonCallable;
            static Load(InName: string): EnhancedInputUserSettings_EnhancedInputUserSettingsApplied__PythonCallable;
        
            __tid_EnhancedInputUserSettings_EnhancedInputUserSettingsApplied__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class EnhancedInputUserSettings_EnhancedInputUserSettingsChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): EnhancedInputUserSettings_EnhancedInputUserSettingsChanged__PythonCallable;
            static Load(InName: string): EnhancedInputUserSettings_EnhancedInputUserSettingsChanged__PythonCallable;
        
            __tid_EnhancedInputUserSettings_EnhancedInputUserSettingsChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class EnhancedInputUserSettings_MappableKeyProfileChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): EnhancedInputUserSettings_MappableKeyProfileChanged__PythonCallable;
            static Load(InName: string): EnhancedInputUserSettings_MappableKeyProfileChanged__PythonCallable;
        
            __tid_EnhancedInputUserSettings_MappableKeyProfileChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class EnhancedInputUserSettings_MappingContextRegisteredWithSettings__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): EnhancedInputUserSettings_MappingContextRegisteredWithSettings__PythonCallable;
            static Load(InName: string): EnhancedInputUserSettings_MappingContextRegisteredWithSettings__PythonCallable;
        
            __tid_EnhancedInputUserSettings_MappingContextRegisteredWithSettings__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class EnvQueryInstanceBlueprintWrapper_EQSQueryDoneSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): EnvQueryInstanceBlueprintWrapper_EQSQueryDoneSignature__PythonCallable;
            static Load(InName: string): EnvQueryInstanceBlueprintWrapper_EQSQueryDoneSignature__PythonCallable;
        
            __tid_EnvQueryInstanceBlueprintWrapper_EQSQueryDoneSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class FieldValueChangedDynamicDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FieldValueChangedDynamicDelegate__PythonCallable;
            static Load(InName: string): FieldValueChangedDynamicDelegate__PythonCallable;
        
            __tid_FieldValueChangedDynamicDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class FlipbookFinishedPlaySignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FlipbookFinishedPlaySignature__PythonCallable;
            static Load(InName: string): FlipbookFinishedPlaySignature__PythonCallable;
        
            __tid_FlipbookFinishedPlaySignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ForEachActorIteratorSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ForEachActorIteratorSignature__PythonCallable;
            static Load(InName: string): ForEachActorIteratorSignature__PythonCallable;
        
            __tid_ForEachActorIteratorSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ForEachAssetIteratorSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ForEachAssetIteratorSignature__PythonCallable;
            static Load(InName: string): ForEachAssetIteratorSignature__PythonCallable;
        
            __tid_ForEachAssetIteratorSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class FunctionalTestAISpawned__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FunctionalTestAISpawned__PythonCallable;
            static Load(InName: string): FunctionalTestAISpawned__PythonCallable;
        
            __tid_FunctionalTestAISpawned__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class FunctionalTestEventSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): FunctionalTestEventSignature__PythonCallable;
            static Load(InName: string): FunctionalTestEventSignature__PythonCallable;
        
            __tid_FunctionalTestEventSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class GameplayTask_GenericGameplayTaskDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): GameplayTask_GenericGameplayTaskDelegate__PythonCallable;
            static Load(InName: string): GameplayTask_GenericGameplayTaskDelegate__PythonCallable;
        
            __tid_GameplayTask_GenericGameplayTaskDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class GameplayTask_TimeLimitedExecution_TaskFinishDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): GameplayTask_TimeLimitedExecution_TaskFinishDelegate__PythonCallable;
            static Load(InName: string): GameplayTask_TimeLimitedExecution_TaskFinishDelegate__PythonCallable;
        
            __tid_GameplayTask_TimeLimitedExecution_TaskFinishDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class GameplayTask_WaitDelay_TaskDelayDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): GameplayTask_WaitDelay_TaskDelayDelegate__PythonCallable;
            static Load(InName: string): GameplayTask_WaitDelay_TaskDelayDelegate__PythonCallable;
        
            __tid_GameplayTask_WaitDelay_TaskDelayDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class GameplayTaskSpawnActorDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): GameplayTaskSpawnActorDelegate__PythonCallable;
            static Load(InName: string): GameplayTaskSpawnActorDelegate__PythonCallable;
        
            __tid_GameplayTaskSpawnActorDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class GeometryCollectionComponent_NotifyGeometryCollectionPhysicsLoadingStateChange__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): GeometryCollectionComponent_NotifyGeometryCollectionPhysicsLoadingStateChange__PythonCallable;
            static Load(InName: string): GeometryCollectionComponent_NotifyGeometryCollectionPhysicsLoadingStateChange__PythonCallable;
        
            __tid_GeometryCollectionComponent_NotifyGeometryCollectionPhysicsLoadingStateChange__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class GeometryCollectionComponent_NotifyGeometryCollectionPhysicsStateChange__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): GeometryCollectionComponent_NotifyGeometryCollectionPhysicsStateChange__PythonCallable;
            static Load(InName: string): GeometryCollectionComponent_NotifyGeometryCollectionPhysicsStateChange__PythonCallable;
        
            __tid_GeometryCollectionComponent_NotifyGeometryCollectionPhysicsStateChange__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class GetHighlightTextDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): GetHighlightTextDelegate__PythonCallable;
            static Load(InName: string): GetHighlightTextDelegate__PythonCallable;
        
            __tid_GetHighlightTextDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class HardwareInputDeviceChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): HardwareInputDeviceChanged__PythonCallable;
            static Load(InName: string): HardwareInputDeviceChanged__PythonCallable;
        
            __tid_HardwareInputDeviceChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ImportSubsystem_OnAssetPostImport_Dyn__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ImportSubsystem_OnAssetPostImport_Dyn__PythonCallable;
            static Load(InName: string): ImportSubsystem_OnAssetPostImport_Dyn__PythonCallable;
        
            __tid_ImportSubsystem_OnAssetPostImport_Dyn__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ImportSubsystem_OnAssetPostLODImport_Dyn__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ImportSubsystem_OnAssetPostLODImport_Dyn__PythonCallable;
            static Load(InName: string): ImportSubsystem_OnAssetPostLODImport_Dyn__PythonCallable;
        
            __tid_ImportSubsystem_OnAssetPostLODImport_Dyn__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ImportSubsystem_OnAssetPreImport_Dyn__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ImportSubsystem_OnAssetPreImport_Dyn__PythonCallable;
            static Load(InName: string): ImportSubsystem_OnAssetPreImport_Dyn__PythonCallable;
        
            __tid_ImportSubsystem_OnAssetPreImport_Dyn__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ImportSubsystem_OnAssetReimport_Dyn__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ImportSubsystem_OnAssetReimport_Dyn__PythonCallable;
            static Load(InName: string): ImportSubsystem_OnAssetReimport_Dyn__PythonCallable;
        
            __tid_ImportSubsystem_OnAssetReimport_Dyn__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InAppPurchaseQuery2Result__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InAppPurchaseQuery2Result__PythonCallable;
            static Load(InName: string): InAppPurchaseQuery2Result__PythonCallable;
        
            __tid_InAppPurchaseQuery2Result__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InAppPurchaseRestoreResult2__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InAppPurchaseRestoreResult2__PythonCallable;
            static Load(InName: string): InAppPurchaseRestoreResult2__PythonCallable;
        
            __tid_InAppPurchaseRestoreResult2__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InAppPurchaseResult2__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InAppPurchaseResult2__PythonCallable;
            static Load(InName: string): InAppPurchaseResult2__PythonCallable;
        
            __tid_InAppPurchaseResult2__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InputActionHandlerDynamicSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InputActionHandlerDynamicSignature__PythonCallable;
            static Load(InName: string): InputActionHandlerDynamicSignature__PythonCallable;
        
            __tid_InputActionHandlerDynamicSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InputAxisHandlerDynamicSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InputAxisHandlerDynamicSignature__PythonCallable;
            static Load(InName: string): InputAxisHandlerDynamicSignature__PythonCallable;
        
            __tid_InputAxisHandlerDynamicSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InputDebugKeyHandlerDynamicSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InputDebugKeyHandlerDynamicSignature__PythonCallable;
            static Load(InName: string): InputDebugKeyHandlerDynamicSignature__PythonCallable;
        
            __tid_InputDebugKeyHandlerDynamicSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InputGestureHandlerDynamicSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InputGestureHandlerDynamicSignature__PythonCallable;
            static Load(InName: string): InputGestureHandlerDynamicSignature__PythonCallable;
        
            __tid_InputGestureHandlerDynamicSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InputKeySelector_OnIsSelectingKeyChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InputKeySelector_OnIsSelectingKeyChanged__PythonCallable;
            static Load(InName: string): InputKeySelector_OnIsSelectingKeyChanged__PythonCallable;
        
            __tid_InputKeySelector_OnIsSelectingKeyChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InputKeySelector_OnKeySelected__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InputKeySelector_OnKeySelected__PythonCallable;
            static Load(InName: string): InputKeySelector_OnKeySelected__PythonCallable;
        
            __tid_InputKeySelector_OnKeySelected__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InputTouchHandlerDynamicSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InputTouchHandlerDynamicSignature__PythonCallable;
            static Load(InName: string): InputTouchHandlerDynamicSignature__PythonCallable;
        
            __tid_InputTouchHandlerDynamicSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InputVectorAxisHandlerDynamicSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InputVectorAxisHandlerDynamicSignature__PythonCallable;
            static Load(InName: string): InputVectorAxisHandlerDynamicSignature__PythonCallable;
        
            __tid_InputVectorAxisHandlerDynamicSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InstancePointDamageSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InstancePointDamageSignature__PythonCallable;
            static Load(InName: string): InstancePointDamageSignature__PythonCallable;
        
            __tid_InstancePointDamageSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InstanceRadialDamageSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InstanceRadialDamageSignature__PythonCallable;
            static Load(InName: string): InstanceRadialDamageSignature__PythonCallable;
        
            __tid_InstanceRadialDamageSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InstigatedAnyDamageSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InstigatedAnyDamageSignature__PythonCallable;
            static Load(InName: string): InstigatedAnyDamageSignature__PythonCallable;
        
            __tid_InstigatedAnyDamageSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InterpToMovementComponent_OnInterpToResetDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InterpToMovementComponent_OnInterpToResetDelegate__PythonCallable;
            static Load(InName: string): InterpToMovementComponent_OnInterpToResetDelegate__PythonCallable;
        
            __tid_InterpToMovementComponent_OnInterpToResetDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InterpToMovementComponent_OnInterpToReverseDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InterpToMovementComponent_OnInterpToReverseDelegate__PythonCallable;
            static Load(InName: string): InterpToMovementComponent_OnInterpToReverseDelegate__PythonCallable;
        
            __tid_InterpToMovementComponent_OnInterpToReverseDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InterpToMovementComponent_OnInterpToStopDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InterpToMovementComponent_OnInterpToStopDelegate__PythonCallable;
            static Load(InName: string): InterpToMovementComponent_OnInterpToStopDelegate__PythonCallable;
        
            __tid_InterpToMovementComponent_OnInterpToStopDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InterpToMovementComponent_OnInterpToWaitBeginDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InterpToMovementComponent_OnInterpToWaitBeginDelegate__PythonCallable;
            static Load(InName: string): InterpToMovementComponent_OnInterpToWaitBeginDelegate__PythonCallable;
        
            __tid_InterpToMovementComponent_OnInterpToWaitBeginDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class InterpToMovementComponent_OnInterpToWaitEndDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): InterpToMovementComponent_OnInterpToWaitEndDelegate__PythonCallable;
            static Load(InName: string): InterpToMovementComponent_OnInterpToWaitEndDelegate__PythonCallable;
        
            __tid_InterpToMovementComponent_OnInterpToWaitEndDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class IsRootComponentChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): IsRootComponentChanged__PythonCallable;
            static Load(InName: string): IsRootComponentChanged__PythonCallable;
        
            __tid_IsRootComponentChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class LandedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): LandedSignature__PythonCallable;
            static Load(InName: string): LandedSignature__PythonCallable;
        
            __tid_LandedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class LeaderboardQueryResult__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): LeaderboardQueryResult__PythonCallable;
            static Load(InName: string): LeaderboardQueryResult__PythonCallable;
        
            __tid_LeaderboardQueryResult__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class LevelSequenceActor_OnLevelSequenceLoaded__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): LevelSequenceActor_OnLevelSequenceLoaded__PythonCallable;
            static Load(InName: string): LevelSequenceActor_OnLevelSequenceLoaded__PythonCallable;
        
            __tid_LevelSequenceActor_OnLevelSequenceLoaded__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class LevelStreamingLoadedStatus__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): LevelStreamingLoadedStatus__PythonCallable;
            static Load(InName: string): LevelStreamingLoadedStatus__PythonCallable;
        
            __tid_LevelStreamingLoadedStatus__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class LevelStreamingVisibilityStatus__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): LevelStreamingVisibilityStatus__PythonCallable;
            static Load(InName: string): LevelStreamingVisibilityStatus__PythonCallable;
        
            __tid_LevelStreamingVisibilityStatus__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class LinkReachedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): LinkReachedSignature__PythonCallable;
            static Load(InName: string): LinkReachedSignature__PythonCallable;
        
            __tid_LinkReachedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class LocationServicesData_OnLocationChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): LocationServicesData_OnLocationChanged__PythonCallable;
            static Load(InName: string): LocationServicesData_OnLocationChanged__PythonCallable;
        
            __tid_LocationServicesData_OnLocationChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class MenuAnchor_GetUserWidget__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): MenuAnchor_GetUserWidget__PythonCallable;
            static Load(InName: string): MenuAnchor_GetUserWidget__PythonCallable;
        
            __tid_MenuAnchor_GetUserWidget__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class MockDataMeshTrackerComponent_OnMockDataMeshTrackerUpdated__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): MockDataMeshTrackerComponent_OnMockDataMeshTrackerUpdated__PythonCallable;
            static Load(InName: string): MockDataMeshTrackerComponent_OnMockDataMeshTrackerUpdated__PythonCallable;
        
            __tid_MockDataMeshTrackerComponent_OnMockDataMeshTrackerUpdated__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class MovementModeChangedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): MovementModeChangedSignature__PythonCallable;
            static Load(InName: string): MovementModeChangedSignature__PythonCallable;
        
            __tid_MovementModeChangedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class MoveTaskCompletedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): MoveTaskCompletedSignature__PythonCallable;
            static Load(InName: string): MoveTaskCompletedSignature__PythonCallable;
        
            __tid_MoveTaskCompletedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class MovieSceneActorPredictionFailure__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): MovieSceneActorPredictionFailure__PythonCallable;
            static Load(InName: string): MovieSceneActorPredictionFailure__PythonCallable;
        
            __tid_MovieSceneActorPredictionFailure__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class MovieSceneActorPredictionResult__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): MovieSceneActorPredictionResult__PythonCallable;
            static Load(InName: string): MovieSceneActorPredictionResult__PythonCallable;
        
            __tid_MovieSceneActorPredictionResult__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class MultiLineEditableText_OnMultiLineEditableTextChangedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): MultiLineEditableText_OnMultiLineEditableTextChangedEvent__PythonCallable;
            static Load(InName: string): MultiLineEditableText_OnMultiLineEditableTextChangedEvent__PythonCallable;
        
            __tid_MultiLineEditableText_OnMultiLineEditableTextChangedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class MultiLineEditableText_OnMultiLineEditableTextCommittedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): MultiLineEditableText_OnMultiLineEditableTextCommittedEvent__PythonCallable;
            static Load(InName: string): MultiLineEditableText_OnMultiLineEditableTextCommittedEvent__PythonCallable;
        
            __tid_MultiLineEditableText_OnMultiLineEditableTextCommittedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class MultiLineEditableTextBox_OnMultiLineEditableTextBoxChangedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): MultiLineEditableTextBox_OnMultiLineEditableTextBoxChangedEvent__PythonCallable;
            static Load(InName: string): MultiLineEditableTextBox_OnMultiLineEditableTextBoxChangedEvent__PythonCallable;
        
            __tid_MultiLineEditableTextBox_OnMultiLineEditableTextBoxChangedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class MultiLineEditableTextBox_OnMultiLineEditableTextBoxCommittedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): MultiLineEditableTextBox_OnMultiLineEditableTextBoxCommittedEvent__PythonCallable;
            static Load(InName: string): MultiLineEditableTextBox_OnMultiLineEditableTextBoxCommittedEvent__PythonCallable;
        
            __tid_MultiLineEditableTextBox_OnMultiLineEditableTextBoxCommittedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class NamingTokensEditableText_OnPreEvaluateNamingTokens__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): NamingTokensEditableText_OnPreEvaluateNamingTokens__PythonCallable;
            static Load(InName: string): NamingTokensEditableText_OnPreEvaluateNamingTokens__PythonCallable;
        
            __tid_NamingTokensEditableText_OnPreEvaluateNamingTokens__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class NiagaraClipboardFunction_OnPastedFunctionCallNode__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): NiagaraClipboardFunction_OnPastedFunctionCallNode__PythonCallable;
            static Load(InName: string): NiagaraClipboardFunction_OnPastedFunctionCallNode__PythonCallable;
        
            __tid_NiagaraClipboardFunction_OnPastedFunctionCallNode__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class NumTablesChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): NumTablesChanged__PythonCallable;
            static Load(InName: string): NumTablesChanged__PythonCallable;
        
            __tid_NumTablesChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OAISimpleDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OAISimpleDelegate__PythonCallable;
            static Load(InName: string): OAISimpleDelegate__PythonCallable;
        
            __tid_OAISimpleDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnActorLabelChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnActorLabelChanged__PythonCallable;
            static Load(InName: string): OnActorLabelChanged__PythonCallable;
        
            __tid_OnActorLabelChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnActorReady__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnActorReady__PythonCallable;
            static Load(InName: string): OnActorReady__PythonCallable;
        
            __tid_OnActorReady__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAllMontageInstancesEndedMCDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAllMontageInstancesEndedMCDelegate__PythonCallable;
            static Load(InName: string): OnAllMontageInstancesEndedMCDelegate__PythonCallable;
        
            __tid_OnAllMontageInstancesEndedMCDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAnimInitialized__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAnimInitialized__PythonCallable;
            static Load(InName: string): OnAnimInitialized__PythonCallable;
        
            __tid_OnAnimInitialized__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAsyncCaptureSceneComplete__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAsyncCaptureSceneComplete__PythonCallable;
            static Load(InName: string): OnAsyncCaptureSceneComplete__PythonCallable;
        
            __tid_OnAsyncCaptureSceneComplete__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAsyncHandleSaveGame__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAsyncHandleSaveGame__PythonCallable;
            static Load(InName: string): OnAsyncHandleSaveGame__PythonCallable;
        
            __tid_OnAsyncHandleSaveGame__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAudioAnalyzerNRTAnalysisComplete__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAudioAnalyzerNRTAnalysisComplete__PythonCallable;
            static Load(InName: string): OnAudioAnalyzerNRTAnalysisComplete__PythonCallable;
        
            __tid_OnAudioAnalyzerNRTAnalysisComplete__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAudioDefaultDeviceChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAudioDefaultDeviceChanged__PythonCallable;
            static Load(InName: string): OnAudioDefaultDeviceChanged__PythonCallable;
        
            __tid_OnAudioDefaultDeviceChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAudioDeviceChange__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAudioDeviceChange__PythonCallable;
            static Load(InName: string): OnAudioDeviceChange__PythonCallable;
        
            __tid_OnAudioDeviceChange__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAudioDeviceStateChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAudioDeviceStateChanged__PythonCallable;
            static Load(InName: string): OnAudioDeviceStateChanged__PythonCallable;
        
            __tid_OnAudioDeviceStateChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAudioFadeChangeSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAudioFadeChangeSignature__PythonCallable;
            static Load(InName: string): OnAudioFadeChangeSignature__PythonCallable;
        
            __tid_OnAudioFadeChangeSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAudioFinished__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAudioFinished__PythonCallable;
            static Load(InName: string): OnAudioFinished__PythonCallable;
        
            __tid_OnAudioFinished__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAudioInputDevicesObtained__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAudioInputDevicesObtained__PythonCallable;
            static Load(InName: string): OnAudioInputDevicesObtained__PythonCallable;
        
            __tid_OnAudioInputDevicesObtained__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAudioMultiEnvelopeValue__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAudioMultiEnvelopeValue__PythonCallable;
            static Load(InName: string): OnAudioMultiEnvelopeValue__PythonCallable;
        
            __tid_OnAudioMultiEnvelopeValue__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAudioOutputDevicesObtained__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAudioOutputDevicesObtained__PythonCallable;
            static Load(InName: string): OnAudioOutputDevicesObtained__PythonCallable;
        
            __tid_OnAudioOutputDevicesObtained__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAudioPlaybackPercent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAudioPlaybackPercent__PythonCallable;
            static Load(InName: string): OnAudioPlaybackPercent__PythonCallable;
        
            __tid_OnAudioPlaybackPercent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAudioPlayStateChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAudioPlayStateChanged__PythonCallable;
            static Load(InName: string): OnAudioPlayStateChanged__PythonCallable;
        
            __tid_OnAudioPlayStateChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAudioRadialSliderValueChangedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAudioRadialSliderValueChangedEvent__PythonCallable;
            static Load(InName: string): OnAudioRadialSliderValueChangedEvent__PythonCallable;
        
            __tid_OnAudioRadialSliderValueChangedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAudioSingleEnvelopeValue__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAudioSingleEnvelopeValue__PythonCallable;
            static Load(InName: string): OnAudioSingleEnvelopeValue__PythonCallable;
        
            __tid_OnAudioSingleEnvelopeValue__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnAudioVirtualizationChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnAudioVirtualizationChanged__PythonCallable;
            static Load(InName: string): OnAudioVirtualizationChanged__PythonCallable;
        
            __tid_OnAudioVirtualizationChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnBoneTransformsFinalized__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnBoneTransformsFinalized__PythonCallable;
            static Load(InName: string): OnBoneTransformsFinalized__PythonCallable;
        
            __tid_OnBoneTransformsFinalized__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnButtonClickedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnButtonClickedEvent__PythonCallable;
            static Load(InName: string): OnButtonClickedEvent__PythonCallable;
        
            __tid_OnButtonClickedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnButtonHoverEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnButtonHoverEvent__PythonCallable;
            static Load(InName: string): OnButtonHoverEvent__PythonCallable;
        
            __tid_OnButtonHoverEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnButtonPressedChangedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnButtonPressedChangedEvent__PythonCallable;
            static Load(InName: string): OnButtonPressedChangedEvent__PythonCallable;
        
            __tid_OnButtonPressedChangedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnButtonPressedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnButtonPressedEvent__PythonCallable;
            static Load(InName: string): OnButtonPressedEvent__PythonCallable;
        
            __tid_OnButtonPressedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnButtonReleasedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnButtonReleasedEvent__PythonCallable;
            static Load(InName: string): OnButtonReleasedEvent__PythonCallable;
        
            __tid_OnButtonReleasedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnCanvasRenderTargetUpdate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnCanvasRenderTargetUpdate__PythonCallable;
            static Load(InName: string): OnCanvasRenderTargetUpdate__PythonCallable;
        
            __tid_OnCanvasRenderTargetUpdate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnChaosBreakEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnChaosBreakEvent__PythonCallable;
            static Load(InName: string): OnChaosBreakEvent__PythonCallable;
        
            __tid_OnChaosBreakEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnChaosBreakingEvents__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnChaosBreakingEvents__PythonCallable;
            static Load(InName: string): OnChaosBreakingEvents__PythonCallable;
        
            __tid_OnChaosBreakingEvents__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnChaosCollisionEvents__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnChaosCollisionEvents__PythonCallable;
            static Load(InName: string): OnChaosCollisionEvents__PythonCallable;
        
            __tid_OnChaosCollisionEvents__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnChaosCrumblingEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnChaosCrumblingEvent__PythonCallable;
            static Load(InName: string): OnChaosCrumblingEvent__PythonCallable;
        
            __tid_OnChaosCrumblingEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnChaosPhysicsCollision__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnChaosPhysicsCollision__PythonCallable;
            static Load(InName: string): OnChaosPhysicsCollision__PythonCallable;
        
            __tid_OnChaosPhysicsCollision__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnChaosRemovalEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnChaosRemovalEvent__PythonCallable;
            static Load(InName: string): OnChaosRemovalEvent__PythonCallable;
        
            __tid_OnChaosRemovalEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnChaosRemovalEvents__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnChaosRemovalEvents__PythonCallable;
            static Load(InName: string): OnChaosRemovalEvents__PythonCallable;
        
            __tid_OnChaosRemovalEvents__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnChaosTrailingEvents__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnChaosTrailingEvents__PythonCallable;
            static Load(InName: string): OnChaosTrailingEvents__PythonCallable;
        
            __tid_OnChaosTrailingEvents__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnCheckBoxComponentStateChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnCheckBoxComponentStateChanged__PythonCallable;
            static Load(InName: string): OnCheckBoxComponentStateChanged__PythonCallable;
        
            __tid_OnCheckBoxComponentStateChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnClaimedResourcesChangeSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnClaimedResourcesChangeSignature__PythonCallable;
            static Load(InName: string): OnClaimedResourcesChangeSignature__PythonCallable;
        
            __tid_OnClaimedResourcesChangeSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnClusterUnionAddedComponent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnClusterUnionAddedComponent__PythonCallable;
            static Load(InName: string): OnClusterUnionAddedComponent__PythonCallable;
        
            __tid_OnClusterUnionAddedComponent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnClusterUnionBoundsChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnClusterUnionBoundsChanged__PythonCallable;
            static Load(InName: string): OnClusterUnionBoundsChanged__PythonCallable;
        
            __tid_OnClusterUnionBoundsChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnClusterUnionRemovedComponent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnClusterUnionRemovedComponent__PythonCallable;
            static Load(InName: string): OnClusterUnionRemovedComponent__PythonCallable;
        
            __tid_OnClusterUnionRemovedComponent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnCompletedDeviceSwap__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnCompletedDeviceSwap__PythonCallable;
            static Load(InName: string): OnCompletedDeviceSwap__PythonCallable;
        
            __tid_OnCompletedDeviceSwap__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnConstantQResults__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnConstantQResults__PythonCallable;
            static Load(InName: string): OnConstantQResults__PythonCallable;
        
            __tid_OnConstantQResults__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnConstructEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnConstructEvent__PythonCallable;
            static Load(InName: string): OnConstructEvent__PythonCallable;
        
            __tid_OnConstructEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnContentInstallFailed__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnContentInstallFailed__PythonCallable;
            static Load(InName: string): OnContentInstallFailed__PythonCallable;
        
            __tid_OnContentInstallFailed__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnContentInstallSucceeded__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnContentInstallSucceeded__PythonCallable;
            static Load(InName: string): OnContentInstallSucceeded__PythonCallable;
        
            __tid_OnContentInstallSucceeded__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnControllerCaptureBeginEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnControllerCaptureBeginEvent__PythonCallable;
            static Load(InName: string): OnControllerCaptureBeginEvent__PythonCallable;
        
            __tid_OnControllerCaptureBeginEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnControllerCaptureBeginEventSynth2D__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnControllerCaptureBeginEventSynth2D__PythonCallable;
            static Load(InName: string): OnControllerCaptureBeginEventSynth2D__PythonCallable;
        
            __tid_OnControllerCaptureBeginEventSynth2D__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnControllerCaptureEndEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnControllerCaptureEndEvent__PythonCallable;
            static Load(InName: string): OnControllerCaptureEndEvent__PythonCallable;
        
            __tid_OnControllerCaptureEndEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnControllerCaptureEndEventSynth2D__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnControllerCaptureEndEventSynth2D__PythonCallable;
            static Load(InName: string): OnControllerCaptureEndEventSynth2D__PythonCallable;
        
            __tid_OnControllerCaptureEndEventSynth2D__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnCreateAuditionGeneratorHandleDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnCreateAuditionGeneratorHandleDelegate__PythonCallable;
            static Load(InName: string): OnCreateAuditionGeneratorHandleDelegate__PythonCallable;
        
            __tid_OnCreateAuditionGeneratorHandleDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnDataLayerInstanceRuntimeStateChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnDataLayerInstanceRuntimeStateChanged__PythonCallable;
            static Load(InName: string): OnDataLayerInstanceRuntimeStateChanged__PythonCallable;
        
            __tid_OnDataLayerInstanceRuntimeStateChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnDataLayerRuntimeStateChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnDataLayerRuntimeStateChanged__PythonCallable;
            static Load(InName: string): OnDataLayerRuntimeStateChanged__PythonCallable;
        
            __tid_OnDataLayerRuntimeStateChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnDeleteActorsBegin__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnDeleteActorsBegin__PythonCallable;
            static Load(InName: string): OnDeleteActorsBegin__PythonCallable;
        
            __tid_OnDeleteActorsBegin__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnDeleteActorsEnd__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnDeleteActorsEnd__PythonCallable;
            static Load(InName: string): OnDeleteActorsEnd__PythonCallable;
        
            __tid_OnDeleteActorsEnd__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnDragDropMulticast__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnDragDropMulticast__PythonCallable;
            static Load(InName: string): OnDragDropMulticast__PythonCallable;
        
            __tid_OnDragDropMulticast__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnDuplicateActorsBegin__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnDuplicateActorsBegin__PythonCallable;
            static Load(InName: string): OnDuplicateActorsBegin__PythonCallable;
        
            __tid_OnDuplicateActorsBegin__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnDuplicateActorsEnd__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnDuplicateActorsEnd__PythonCallable;
            static Load(InName: string): OnDuplicateActorsEnd__PythonCallable;
        
            __tid_OnDuplicateActorsEnd__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnDynamicMeshModifiedBP__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnDynamicMeshModifiedBP__PythonCallable;
            static Load(InName: string): OnDynamicMeshModifiedBP__PythonCallable;
        
            __tid_OnDynamicMeshModifiedBP__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnEditCopyActorsBegin__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnEditCopyActorsBegin__PythonCallable;
            static Load(InName: string): OnEditCopyActorsBegin__PythonCallable;
        
            __tid_OnEditCopyActorsBegin__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnEditCopyActorsEnd__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnEditCopyActorsEnd__PythonCallable;
            static Load(InName: string): OnEditCopyActorsEnd__PythonCallable;
        
            __tid_OnEditCopyActorsEnd__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnEditCutActorsBegin__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnEditCutActorsBegin__PythonCallable;
            static Load(InName: string): OnEditCutActorsBegin__PythonCallable;
        
            __tid_OnEditCutActorsBegin__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnEditCutActorsEnd__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnEditCutActorsEnd__PythonCallable;
            static Load(InName: string): OnEditCutActorsEnd__PythonCallable;
        
            __tid_OnEditCutActorsEnd__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnEditNewActorsDropped__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnEditNewActorsDropped__PythonCallable;
            static Load(InName: string): OnEditNewActorsDropped__PythonCallable;
        
            __tid_OnEditNewActorsDropped__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnEditNewActorsPlaced__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnEditNewActorsPlaced__PythonCallable;
            static Load(InName: string): OnEditNewActorsPlaced__PythonCallable;
        
            __tid_OnEditNewActorsPlaced__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnEditorUtilityPIEEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnEditorUtilityPIEEvent__PythonCallable;
            static Load(InName: string): OnEditorUtilityPIEEvent__PythonCallable;
        
            __tid_OnEditorUtilityPIEEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnEditorUtilityTaskDynamicDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnEditorUtilityTaskDynamicDelegate__PythonCallable;
            static Load(InName: string): OnEditorUtilityTaskDynamicDelegate__PythonCallable;
        
            __tid_OnEditorUtilityTaskDynamicDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnEditPasteActorsBegin__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnEditPasteActorsBegin__PythonCallable;
            static Load(InName: string): OnEditPasteActorsBegin__PythonCallable;
        
            __tid_OnEditPasteActorsBegin__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnEditPasteActorsEnd__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnEditPasteActorsEnd__PythonCallable;
            static Load(InName: string): OnEditPasteActorsEnd__PythonCallable;
        
            __tid_OnEditPasteActorsEnd__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnEnvelopeFollowerUpdate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnEnvelopeFollowerUpdate__PythonCallable;
            static Load(InName: string): OnEnvelopeFollowerUpdate__PythonCallable;
        
            __tid_OnEnvelopeFollowerUpdate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnExpandableAreaExpansionChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnExpandableAreaExpansionChanged__PythonCallable;
            static Load(InName: string): OnExpandableAreaExpansionChanged__PythonCallable;
        
            __tid_OnExpandableAreaExpansionChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnExportImageAsyncComplete__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnExportImageAsyncComplete__PythonCallable;
            static Load(InName: string): OnExportImageAsyncComplete__PythonCallable;
        
            __tid_OnExportImageAsyncComplete__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnFloatValueChangedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnFloatValueChangedEvent__PythonCallable;
            static Load(InName: string): OnFloatValueChangedEvent__PythonCallable;
        
            __tid_OnFloatValueChangedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnFloatValueChangedEventSynth2D__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnFloatValueChangedEventSynth2D__PythonCallable;
            static Load(InName: string): OnFloatValueChangedEventSynth2D__PythonCallable;
        
            __tid_OnFloatValueChangedEventSynth2D__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnForceFeedbackFinished__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnForceFeedbackFinished__PythonCallable;
            static Load(InName: string): OnForceFeedbackFinished__PythonCallable;
        
            __tid_OnForceFeedbackFinished__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnGameUserSettingsUINeedsUpdate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnGameUserSettingsUINeedsUpdate__PythonCallable;
            static Load(InName: string): OnGameUserSettingsUINeedsUpdate__PythonCallable;
        
            __tid_OnGameUserSettingsUINeedsUpdate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnGeometryCollectionFullyDecayedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnGeometryCollectionFullyDecayedEvent__PythonCallable;
            static Load(InName: string): OnGeometryCollectionFullyDecayedEvent__PythonCallable;
        
            __tid_OnGeometryCollectionFullyDecayedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnGeometryCollectionRootMovedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnGeometryCollectionRootMovedEvent__PythonCallable;
            static Load(InName: string): OnGeometryCollectionRootMovedEvent__PythonCallable;
        
            __tid_OnGeometryCollectionRootMovedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnGetItemChildrenDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnGetItemChildrenDynamic__PythonCallable;
            static Load(InName: string): OnGetItemChildrenDynamic__PythonCallable;
        
            __tid_OnGetItemChildrenDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnGroomBindingAssetBuildComplete__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnGroomBindingAssetBuildComplete__PythonCallable;
            static Load(InName: string): OnGroomBindingAssetBuildComplete__PythonCallable;
        
            __tid_OnGroomBindingAssetBuildComplete__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnHoveredWidgetChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnHoveredWidgetChanged__PythonCallable;
            static Load(InName: string): OnHoveredWidgetChanged__PythonCallable;
        
            __tid_OnHoveredWidgetChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnImageWriteComplete__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnImageWriteComplete__PythonCallable;
            static Load(InName: string): OnImageWriteComplete__PythonCallable;
        
            __tid_OnImageWriteComplete__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnImportDoneDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnImportDoneDynamic__PythonCallable;
            static Load(InName: string): OnImportDoneDynamic__PythonCallable;
        
            __tid_OnImportDoneDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnInputAction__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnInputAction__PythonCallable;
            static Load(InName: string): OnInputAction__PythonCallable;
        
            __tid_OnInputAction__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnIsItemSelectableOrNavigableDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnIsItemSelectableOrNavigableDynamic__PythonCallable;
            static Load(InName: string): OnIsItemSelectableOrNavigableDynamic__PythonCallable;
        
            __tid_OnIsItemSelectableOrNavigableDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnItemDragCancelledDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnItemDragCancelledDynamic__PythonCallable;
            static Load(InName: string): OnItemDragCancelledDynamic__PythonCallable;
        
            __tid_OnItemDragCancelledDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnItemDragDropMulticastDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnItemDragDropMulticastDynamic__PythonCallable;
            static Load(InName: string): OnItemDragDropMulticastDynamic__PythonCallable;
        
            __tid_OnItemDragDropMulticastDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnItemExpansionChangedDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnItemExpansionChangedDynamic__PythonCallable;
            static Load(InName: string): OnItemExpansionChangedDynamic__PythonCallable;
        
            __tid_OnItemExpansionChangedDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnItemGeometryMulticastDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnItemGeometryMulticastDynamic__PythonCallable;
            static Load(InName: string): OnItemGeometryMulticastDynamic__PythonCallable;
        
            __tid_OnItemGeometryMulticastDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnItemIsHoveredChangedDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnItemIsHoveredChangedDynamic__PythonCallable;
            static Load(InName: string): OnItemIsHoveredChangedDynamic__PythonCallable;
        
            __tid_OnItemIsHoveredChangedDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnItemZoneMulticastDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnItemZoneMulticastDynamic__PythonCallable;
            static Load(InName: string): OnItemZoneMulticastDynamic__PythonCallable;
        
            __tid_OnItemZoneMulticastDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnKnobValueChangedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnKnobValueChangedEvent__PythonCallable;
            static Load(InName: string): OnKnobValueChangedEvent__PythonCallable;
        
            __tid_OnKnobValueChangedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnLatestConstantQResults__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnLatestConstantQResults__PythonCallable;
            static Load(InName: string): OnLatestConstantQResults__PythonCallable;
        
            __tid_OnLatestConstantQResults__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnLatestOverallLKFSResults__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnLatestOverallLKFSResults__PythonCallable;
            static Load(InName: string): OnLatestOverallLKFSResults__PythonCallable;
        
            __tid_OnLatestOverallLKFSResults__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnLatestOverallLoudnessResults__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnLatestOverallLoudnessResults__PythonCallable;
            static Load(InName: string): OnLatestOverallLoudnessResults__PythonCallable;
        
            __tid_OnLatestOverallLoudnessResults__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnLatestOverallMeterResults__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnLatestOverallMeterResults__PythonCallable;
            static Load(InName: string): OnLatestOverallMeterResults__PythonCallable;
        
            __tid_OnLatestOverallMeterResults__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnLatestPerChannelLKFSResults__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnLatestPerChannelLKFSResults__PythonCallable;
            static Load(InName: string): OnLatestPerChannelLKFSResults__PythonCallable;
        
            __tid_OnLatestPerChannelLKFSResults__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnLatestPerChannelLoudnessResults__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnLatestPerChannelLoudnessResults__PythonCallable;
            static Load(InName: string): OnLatestPerChannelLoudnessResults__PythonCallable;
        
            __tid_OnLatestPerChannelLoudnessResults__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnLatestPerChannelMeterResults__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnLatestPerChannelMeterResults__PythonCallable;
            static Load(InName: string): OnLatestPerChannelMeterResults__PythonCallable;
        
            __tid_OnLatestPerChannelMeterResults__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnLatestSpectrumResults__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnLatestSpectrumResults__PythonCallable;
            static Load(InName: string): OnLatestSpectrumResults__PythonCallable;
        
            __tid_OnLatestSpectrumResults__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnLeaderboardFlushed__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnLeaderboardFlushed__PythonCallable;
            static Load(InName: string): OnLeaderboardFlushed__PythonCallable;
        
            __tid_OnLeaderboardFlushed__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnLevelEditorEditorCameraMoved__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnLevelEditorEditorCameraMoved__PythonCallable;
            static Load(InName: string): OnLevelEditorEditorCameraMoved__PythonCallable;
        
            __tid_OnLevelEditorEditorCameraMoved__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnLevelEditorMapChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnLevelEditorMapChanged__PythonCallable;
            static Load(InName: string): OnLevelEditorMapChanged__PythonCallable;
        
            __tid_OnLevelEditorMapChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnLevelEditorMapOpened__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnLevelEditorMapOpened__PythonCallable;
            static Load(InName: string): OnLevelEditorMapOpened__PythonCallable;
        
            __tid_OnLevelEditorMapOpened__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnLevelEditorPostSaveWorld__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnLevelEditorPostSaveWorld__PythonCallable;
            static Load(InName: string): OnLevelEditorPostSaveWorld__PythonCallable;
        
            __tid_OnLevelEditorPostSaveWorld__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnLevelEditorPreSaveWorld__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnLevelEditorPreSaveWorld__PythonCallable;
            static Load(InName: string): OnLevelEditorPreSaveWorld__PythonCallable;
        
            __tid_OnLevelEditorPreSaveWorld__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnLevelSequencePlayerCameraCutEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnLevelSequencePlayerCameraCutEvent__PythonCallable;
            static Load(InName: string): OnLevelSequencePlayerCameraCutEvent__PythonCallable;
        
            __tid_OnLevelSequencePlayerCameraCutEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnlineConnectionResult__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnlineConnectionResult__PythonCallable;
            static Load(InName: string): OnlineConnectionResult__PythonCallable;
        
            __tid_OnlineConnectionResult__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnlineLogoutResult__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnlineLogoutResult__PythonCallable;
            static Load(InName: string): OnlineLogoutResult__PythonCallable;
        
            __tid_OnlineLogoutResult__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnlineProxyInAppCheckoutResult__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnlineProxyInAppCheckoutResult__PythonCallable;
            static Load(InName: string): OnlineProxyInAppCheckoutResult__PythonCallable;
        
            __tid_OnlineProxyInAppCheckoutResult__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnlineProxyInAppReceiptsResult__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnlineProxyInAppReceiptsResult__PythonCallable;
            static Load(InName: string): OnlineProxyInAppReceiptsResult__PythonCallable;
        
            __tid_OnlineProxyInAppReceiptsResult__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnlineShowLoginUIResult__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnlineShowLoginUIResult__PythonCallable;
            static Load(InName: string): OnlineShowLoginUIResult__PythonCallable;
        
            __tid_OnlineShowLoginUIResult__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnlineTurnBasedMatchResult__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnlineTurnBasedMatchResult__PythonCallable;
            static Load(InName: string): OnlineTurnBasedMatchResult__PythonCallable;
        
            __tid_OnlineTurnBasedMatchResult__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnListEntriesGeneratedDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnListEntriesGeneratedDynamic__PythonCallable;
            static Load(InName: string): OnListEntriesGeneratedDynamic__PythonCallable;
        
            __tid_OnListEntriesGeneratedDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnListEntryGeneratedDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnListEntryGeneratedDynamic__PythonCallable;
            static Load(InName: string): OnListEntryGeneratedDynamic__PythonCallable;
        
            __tid_OnListEntryGeneratedDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnListEntryInitializedDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnListEntryInitializedDynamic__PythonCallable;
            static Load(InName: string): OnListEntryInitializedDynamic__PythonCallable;
        
            __tid_OnListEntryInitializedDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnListEntryReleasedDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnListEntryReleasedDynamic__PythonCallable;
            static Load(InName: string): OnListEntryReleasedDynamic__PythonCallable;
        
            __tid_OnListEntryReleasedDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnListItemScrolledIntoViewDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnListItemScrolledIntoViewDynamic__PythonCallable;
            static Load(InName: string): OnListItemScrolledIntoViewDynamic__PythonCallable;
        
            __tid_OnListItemScrolledIntoViewDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnListItemSelectionChangedDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnListItemSelectionChangedDynamic__PythonCallable;
            static Load(InName: string): OnListItemSelectionChangedDynamic__PythonCallable;
        
            __tid_OnListItemSelectionChangedDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnListViewDraggingStateChangedDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnListViewDraggingStateChangedDynamic__PythonCallable;
            static Load(InName: string): OnListViewDraggingStateChangedDynamic__PythonCallable;
        
            __tid_OnListViewDraggingStateChangedDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnListViewFinishedScrollingDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnListViewFinishedScrollingDynamic__PythonCallable;
            static Load(InName: string): OnListViewFinishedScrollingDynamic__PythonCallable;
        
            __tid_OnListViewFinishedScrollingDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnListViewScrolledDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnListViewScrolledDynamic__PythonCallable;
            static Load(InName: string): OnListViewScrolledDynamic__PythonCallable;
        
            __tid_OnListViewScrolledDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnLocalPlayerSaveGameLoaded__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnLocalPlayerSaveGameLoaded__PythonCallable;
            static Load(InName: string): OnLocalPlayerSaveGameLoaded__PythonCallable;
        
            __tid_OnLocalPlayerSaveGameLoaded__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMainAudioOutputDeviceObtained__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMainAudioOutputDeviceObtained__PythonCallable;
            static Load(InName: string): OnMainAudioOutputDeviceObtained__PythonCallable;
        
            __tid_OnMainAudioOutputDeviceObtained__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMediaPlayerMediaEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMediaPlayerMediaEvent__PythonCallable;
            static Load(InName: string): OnMediaPlayerMediaEvent__PythonCallable;
        
            __tid_OnMediaPlayerMediaEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMediaPlayerMediaOpened__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMediaPlayerMediaOpened__PythonCallable;
            static Load(InName: string): OnMediaPlayerMediaOpened__PythonCallable;
        
            __tid_OnMediaPlayerMediaOpened__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMediaPlayerMediaOpenFailed__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMediaPlayerMediaOpenFailed__PythonCallable;
            static Load(InName: string): OnMediaPlayerMediaOpenFailed__PythonCallable;
        
            __tid_OnMediaPlayerMediaOpenFailed__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMenuOpenChangedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMenuOpenChangedEvent__PythonCallable;
            static Load(InName: string): OnMenuOpenChangedEvent__PythonCallable;
        
            __tid_OnMenuOpenChangedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMetaSoundBuilderDocumentMetadataBoolChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMetaSoundBuilderDocumentMetadataBoolChanged__PythonCallable;
            static Load(InName: string): OnMetaSoundBuilderDocumentMetadataBoolChanged__PythonCallable;
        
            __tid_OnMetaSoundBuilderDocumentMetadataBoolChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMetaSoundBuilderDocumentMetadataStringChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMetaSoundBuilderDocumentMetadataStringChanged__PythonCallable;
            static Load(InName: string): OnMetaSoundBuilderDocumentMetadataStringChanged__PythonCallable;
        
            __tid_OnMetaSoundBuilderDocumentMetadataStringChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMetaSoundBuilderDocumentMetadataTextArrayChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMetaSoundBuilderDocumentMetadataTextArrayChanged__PythonCallable;
            static Load(InName: string): OnMetaSoundBuilderDocumentMetadataTextArrayChanged__PythonCallable;
        
            __tid_OnMetaSoundBuilderDocumentMetadataTextArrayChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMetaSoundBuilderDocumentMetadataTextChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMetaSoundBuilderDocumentMetadataTextChanged__PythonCallable;
            static Load(InName: string): OnMetaSoundBuilderDocumentMetadataTextChanged__PythonCallable;
        
            __tid_OnMetaSoundBuilderDocumentMetadataTextChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMetaSoundBuilderGraphInterfaceMutate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMetaSoundBuilderGraphInterfaceMutate__PythonCallable;
            static Load(InName: string): OnMetaSoundBuilderGraphInterfaceMutate__PythonCallable;
        
            __tid_OnMetaSoundBuilderGraphInterfaceMutate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMetaSoundBuilderGraphLiteralMutate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMetaSoundBuilderGraphLiteralMutate__PythonCallable;
            static Load(InName: string): OnMetaSoundBuilderGraphLiteralMutate__PythonCallable;
        
            __tid_OnMetaSoundBuilderGraphLiteralMutate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMetaSoundBuilderGraphVertexBoolChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMetaSoundBuilderGraphVertexBoolChanged__PythonCallable;
            static Load(InName: string): OnMetaSoundBuilderGraphVertexBoolChanged__PythonCallable;
        
            __tid_OnMetaSoundBuilderGraphVertexBoolChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMetaSoundBuilderGraphVertexIntChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMetaSoundBuilderGraphVertexIntChanged__PythonCallable;
            static Load(InName: string): OnMetaSoundBuilderGraphVertexIntChanged__PythonCallable;
        
            __tid_OnMetaSoundBuilderGraphVertexIntChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMetaSoundBuilderGraphVertexRename__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMetaSoundBuilderGraphVertexRename__PythonCallable;
            static Load(InName: string): OnMetaSoundBuilderGraphVertexRename__PythonCallable;
        
            __tid_OnMetaSoundBuilderGraphVertexRename__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMetaSoundBuilderGraphVertexTextChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMetaSoundBuilderGraphVertexTextChanged__PythonCallable;
            static Load(InName: string): OnMetaSoundBuilderGraphVertexTextChanged__PythonCallable;
        
            __tid_OnMetaSoundBuilderGraphVertexTextChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMetasoundOutputValueChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMetasoundOutputValueChanged__PythonCallable;
            static Load(InName: string): OnMetasoundOutputValueChanged__PythonCallable;
        
            __tid_OnMetasoundOutputValueChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMetasoundOutputValueChangedMulticast__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMetasoundOutputValueChangedMulticast__PythonCallable;
            static Load(InName: string): OnMetasoundOutputValueChangedMulticast__PythonCallable;
        
            __tid_OnMetasoundOutputValueChangedMulticast__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMontageBlendedInEndedMCDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMontageBlendedInEndedMCDelegate__PythonCallable;
            static Load(InName: string): OnMontageBlendedInEndedMCDelegate__PythonCallable;
        
            __tid_OnMontageBlendedInEndedMCDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMontageBlendingOutStartedMCDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMontageBlendingOutStartedMCDelegate__PythonCallable;
            static Load(InName: string): OnMontageBlendingOutStartedMCDelegate__PythonCallable;
        
            __tid_OnMontageBlendingOutStartedMCDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMontageEndedMCDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMontageEndedMCDelegate__PythonCallable;
            static Load(InName: string): OnMontageEndedMCDelegate__PythonCallable;
        
            __tid_OnMontageEndedMCDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMontagePlayDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMontagePlayDelegate__PythonCallable;
            static Load(InName: string): OnMontagePlayDelegate__PythonCallable;
        
            __tid_OnMontagePlayDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMontageSectionChangedMCDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMontageSectionChangedMCDelegate__PythonCallable;
            static Load(InName: string): OnMontageSectionChangedMCDelegate__PythonCallable;
        
            __tid_OnMontageSectionChangedMCDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMontageStartedMCDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMontageStartedMCDelegate__PythonCallable;
            static Load(InName: string): OnMontageStartedMCDelegate__PythonCallable;
        
            __tid_OnMontageStartedMCDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMouseCaptureBeginEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMouseCaptureBeginEvent__PythonCallable;
            static Load(InName: string): OnMouseCaptureBeginEvent__PythonCallable;
        
            __tid_OnMouseCaptureBeginEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMouseCaptureBeginEventSynth2D__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMouseCaptureBeginEventSynth2D__PythonCallable;
            static Load(InName: string): OnMouseCaptureBeginEventSynth2D__PythonCallable;
        
            __tid_OnMouseCaptureBeginEventSynth2D__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMouseCaptureEndEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMouseCaptureEndEvent__PythonCallable;
            static Load(InName: string): OnMouseCaptureEndEvent__PythonCallable;
        
            __tid_OnMouseCaptureEndEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMouseCaptureEndEventSynth2D__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMouseCaptureEndEventSynth2D__PythonCallable;
            static Load(InName: string): OnMouseCaptureEndEventSynth2D__PythonCallable;
        
            __tid_OnMouseCaptureEndEventSynth2D__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnMovieSceneSequencePlayerEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnMovieSceneSequencePlayerEvent__PythonCallable;
            static Load(InName: string): OnMovieSceneSequencePlayerEvent__PythonCallable;
        
            __tid_OnMovieSceneSequencePlayerEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnNavDataGenericEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnNavDataGenericEvent__PythonCallable;
            static Load(InName: string): OnNavDataGenericEvent__PythonCallable;
        
            __tid_OnNavDataGenericEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnNavigationPathUpdated__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnNavigationPathUpdated__PythonCallable;
            static Load(InName: string): OnNavigationPathUpdated__PythonCallable;
        
            __tid_OnNavigationPathUpdated__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnNavigationTransition__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnNavigationTransition__PythonCallable;
            static Load(InName: string): OnNavigationTransition__PythonCallable;
        
            __tid_OnNavigationTransition__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnNewNiagaraDataChannelPublish__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnNewNiagaraDataChannelPublish__PythonCallable;
            static Load(InName: string): OnNewNiagaraDataChannelPublish__PythonCallable;
        
            __tid_OnNewNiagaraDataChannelPublish__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnNiagaraScriptCompilationComplete__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnNiagaraScriptCompilationComplete__PythonCallable;
            static Load(InName: string): OnNiagaraScriptCompilationComplete__PythonCallable;
        
            __tid_OnNiagaraScriptCompilationComplete__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnNiagaraSystemFinished__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnNiagaraSystemFinished__PythonCallable;
            static Load(InName: string): OnNiagaraSystemFinished__PythonCallable;
        
            __tid_OnNiagaraSystemFinished__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnNotifyReplaced__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnNotifyReplaced__PythonCallable;
            static Load(InName: string): OnNotifyReplaced__PythonCallable;
        
            __tid_OnNotifyReplaced__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnNotifyStateReplaced__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnNotifyStateReplaced__PythonCallable;
            static Load(InName: string): OnNotifyStateReplaced__PythonCallable;
        
            __tid_OnNotifyStateReplaced__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnObjectImportDoneDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnObjectImportDoneDynamic__PythonCallable;
            static Load(InName: string): OnObjectImportDoneDynamic__PythonCallable;
        
            __tid_OnObjectImportDoneDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnOverallLKFSResults__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnOverallLKFSResults__PythonCallable;
            static Load(InName: string): OnOverallLKFSResults__PythonCallable;
        
            __tid_OnOverallLKFSResults__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnOverallLoudnessResults__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnOverallLoudnessResults__PythonCallable;
            static Load(InName: string): OnOverallLoudnessResults__PythonCallable;
        
            __tid_OnOverallLoudnessResults__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnOverallMeterResults__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnOverallMeterResults__PythonCallable;
            static Load(InName: string): OnOverallMeterResults__PythonCallable;
        
            __tid_OnOverallMeterResults__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnPawnControllerChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnPawnControllerChanged__PythonCallable;
            static Load(InName: string): OnPawnControllerChanged__PythonCallable;
        
            __tid_OnPawnControllerChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnPerChannelLKFSResults__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnPerChannelLKFSResults__PythonCallable;
            static Load(InName: string): OnPerChannelLKFSResults__PythonCallable;
        
            __tid_OnPerChannelLKFSResults__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnPerChannelLoudnessResults__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnPerChannelLoudnessResults__PythonCallable;
            static Load(InName: string): OnPerChannelLoudnessResults__PythonCallable;
        
            __tid_OnPerChannelLoudnessResults__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnPerChannelMeterResults__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnPerChannelMeterResults__PythonCallable;
            static Load(InName: string): OnPerChannelMeterResults__PythonCallable;
        
            __tid_OnPerChannelMeterResults__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnPlayerStatePawnSet__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnPlayerStatePawnSet__PythonCallable;
            static Load(InName: string): OnPlayerStatePawnSet__PythonCallable;
        
            __tid_OnPlayerStatePawnSet__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnPossessedPawnChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnPossessedPawnChanged__PythonCallable;
            static Load(InName: string): OnPossessedPawnChanged__PythonCallable;
        
            __tid_OnPossessedPawnChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnPrimaryAssetBundlesChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnPrimaryAssetBundlesChanged__PythonCallable;
            static Load(InName: string): OnPrimaryAssetBundlesChanged__PythonCallable;
        
            __tid_OnPrimaryAssetBundlesChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnPrimaryAssetClassListLoaded__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnPrimaryAssetClassListLoaded__PythonCallable;
            static Load(InName: string): OnPrimaryAssetClassListLoaded__PythonCallable;
        
            __tid_OnPrimaryAssetClassListLoaded__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnPrimaryAssetClassLoaded__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnPrimaryAssetClassLoaded__PythonCallable;
            static Load(InName: string): OnPrimaryAssetClassLoaded__PythonCallable;
        
            __tid_OnPrimaryAssetClassLoaded__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnPrimaryAssetListLoaded__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnPrimaryAssetListLoaded__PythonCallable;
            static Load(InName: string): OnPrimaryAssetListLoaded__PythonCallable;
        
            __tid_OnPrimaryAssetListLoaded__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnPrimaryAssetLoaded__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnPrimaryAssetLoaded__PythonCallable;
            static Load(InName: string): OnPrimaryAssetLoaded__PythonCallable;
        
            __tid_OnPrimaryAssetLoaded__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnPropertyValueChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnPropertyValueChanged__PythonCallable;
            static Load(InName: string): OnPropertyValueChanged__PythonCallable;
        
            __tid_OnPropertyValueChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnQuartzCommandEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnQuartzCommandEvent__PythonCallable;
            static Load(InName: string): OnQuartzCommandEvent__PythonCallable;
        
            __tid_OnQuartzCommandEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnQuartzCommandEventBP__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnQuartzCommandEventBP__PythonCallable;
            static Load(InName: string): OnQuartzCommandEventBP__PythonCallable;
        
            __tid_OnQuartzCommandEventBP__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnQuartzMetronomeEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnQuartzMetronomeEvent__PythonCallable;
            static Load(InName: string): OnQuartzMetronomeEvent__PythonCallable;
        
            __tid_OnQuartzMetronomeEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnQuartzMetronomeEventBP__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnQuartzMetronomeEventBP__PythonCallable;
            static Load(InName: string): OnQuartzMetronomeEventBP__PythonCallable;
        
            __tid_OnQuartzMetronomeEventBP__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnQueueSubtitles__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnQueueSubtitles__PythonCallable;
            static Load(InName: string): OnQueueSubtitles__PythonCallable;
        
            __tid_OnQueueSubtitles__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnRenderMovieStopped__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnRenderMovieStopped__PythonCallable;
            static Load(InName: string): OnRenderMovieStopped__PythonCallable;
        
            __tid_OnRenderMovieStopped__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnRequestContentFailed__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnRequestContentFailed__PythonCallable;
            static Load(InName: string): OnRequestContentFailed__PythonCallable;
        
            __tid_OnRequestContentFailed__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnRequestContentSucceeded__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnRequestContentSucceeded__PythonCallable;
            static Load(InName: string): OnRequestContentSucceeded__PythonCallable;
        
            __tid_OnRequestContentSucceeded__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnSampleLoaded__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnSampleLoaded__PythonCallable;
            static Load(InName: string): OnSampleLoaded__PythonCallable;
        
            __tid_OnSampleLoaded__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnSamplePlaybackProgress__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnSamplePlaybackProgress__PythonCallable;
            static Load(InName: string): OnSamplePlaybackProgress__PythonCallable;
        
            __tid_OnSamplePlaybackProgress__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnScrollBarVisibilityChangedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnScrollBarVisibilityChangedEvent__PythonCallable;
            static Load(InName: string): OnScrollBarVisibilityChangedEvent__PythonCallable;
        
            __tid_OnScrollBarVisibilityChangedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnScrollBoxFocusLostEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnScrollBoxFocusLostEvent__PythonCallable;
            static Load(InName: string): OnScrollBoxFocusLostEvent__PythonCallable;
        
            __tid_OnScrollBoxFocusLostEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnScrollBoxFocusReceivedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnScrollBoxFocusReceivedEvent__PythonCallable;
            static Load(InName: string): OnScrollBoxFocusReceivedEvent__PythonCallable;
        
            __tid_OnScrollBoxFocusReceivedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnSliderFloatValueChangedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnSliderFloatValueChangedEvent__PythonCallable;
            static Load(InName: string): OnSliderFloatValueChangedEvent__PythonCallable;
        
            __tid_OnSliderFloatValueChangedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnSoundLoadComplete__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnSoundLoadComplete__PythonCallable;
            static Load(InName: string): OnSoundLoadComplete__PythonCallable;
        
            __tid_OnSoundLoadComplete__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnSpectrumResults__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnSpectrumResults__PythonCallable;
            static Load(InName: string): OnSpectrumResults__PythonCallable;
        
            __tid_OnSpectrumResults__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnSubmixEnvelope__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnSubmixEnvelope__PythonCallable;
            static Load(InName: string): OnSubmixEnvelope__PythonCallable;
        
            __tid_OnSubmixEnvelope__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnSubmixEnvelopeBP__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnSubmixEnvelopeBP__PythonCallable;
            static Load(InName: string): OnSubmixEnvelopeBP__PythonCallable;
        
            __tid_OnSubmixEnvelopeBP__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnSubmixRecordedFileDone__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnSubmixRecordedFileDone__PythonCallable;
            static Load(InName: string): OnSubmixRecordedFileDone__PythonCallable;
        
            __tid_OnSubmixRecordedFileDone__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnSubmixSpectralAnalysis__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnSubmixSpectralAnalysis__PythonCallable;
            static Load(InName: string): OnSubmixSpectralAnalysis__PythonCallable;
        
            __tid_OnSubmixSpectralAnalysis__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnSubmixSpectralAnalysisBP__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnSubmixSpectralAnalysisBP__PythonCallable;
            static Load(InName: string): OnSubmixSpectralAnalysisBP__PythonCallable;
        
            __tid_OnSubmixSpectralAnalysisBP__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnSynthEnvelopeValue__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnSynthEnvelopeValue__PythonCallable;
            static Load(InName: string): OnSynthEnvelopeValue__PythonCallable;
        
            __tid_OnSynthEnvelopeValue__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnSystemFinished__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnSystemFinished__PythonCallable;
            static Load(InName: string): OnSystemFinished__PythonCallable;
        
            __tid_OnSystemFinished__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnTableAltered__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnTableAltered__PythonCallable;
            static Load(InName: string): OnTableAltered__PythonCallable;
        
            __tid_OnTableAltered__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnTakeRecorderCancelled__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnTakeRecorderCancelled__PythonCallable;
            static Load(InName: string): OnTakeRecorderCancelled__PythonCallable;
        
            __tid_OnTakeRecorderCancelled__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnTakeRecorderFinished__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnTakeRecorderFinished__PythonCallable;
            static Load(InName: string): OnTakeRecorderFinished__PythonCallable;
        
            __tid_OnTakeRecorderFinished__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnTakeRecorderMarkedFrameAdded__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnTakeRecorderMarkedFrameAdded__PythonCallable;
            static Load(InName: string): OnTakeRecorderMarkedFrameAdded__PythonCallable;
        
            __tid_OnTakeRecorderMarkedFrameAdded__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnTakeRecorderPanelChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnTakeRecorderPanelChanged__PythonCallable;
            static Load(InName: string): OnTakeRecorderPanelChanged__PythonCallable;
        
            __tid_OnTakeRecorderPanelChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnTakeRecorderPreInitialize__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnTakeRecorderPreInitialize__PythonCallable;
            static Load(InName: string): OnTakeRecorderPreInitialize__PythonCallable;
        
            __tid_OnTakeRecorderPreInitialize__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnTakeRecorderSourceAddedDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnTakeRecorderSourceAddedDynamic__PythonCallable;
            static Load(InName: string): OnTakeRecorderSourceAddedDynamic__PythonCallable;
        
            __tid_OnTakeRecorderSourceAddedDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnTakeRecorderSourceRemovedDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnTakeRecorderSourceRemovedDynamic__PythonCallable;
            static Load(InName: string): OnTakeRecorderSourceRemovedDynamic__PythonCallable;
        
            __tid_OnTakeRecorderSourceRemovedDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnTakeRecorderStarted__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnTakeRecorderStarted__PythonCallable;
            static Load(InName: string): OnTakeRecorderStarted__PythonCallable;
        
            __tid_OnTakeRecorderStarted__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnTakeRecorderStopped__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnTakeRecorderStopped__PythonCallable;
            static Load(InName: string): OnTakeRecorderStopped__PythonCallable;
        
            __tid_OnTakeRecorderStopped__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnTimelineEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnTimelineEvent__PythonCallable;
            static Load(InName: string): OnTimelineEvent__PythonCallable;
        
            __tid_OnTimelineEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnTimelineFloat__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnTimelineFloat__PythonCallable;
            static Load(InName: string): OnTimelineFloat__PythonCallable;
        
            __tid_OnTimelineFloat__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnTimelineLinearColor__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnTimelineLinearColor__PythonCallable;
            static Load(InName: string): OnTimelineLinearColor__PythonCallable;
        
            __tid_OnTimelineLinearColor__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnTimelineVector__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnTimelineVector__PythonCallable;
            static Load(InName: string): OnTimelineVector__PythonCallable;
        
            __tid_OnTimelineVector__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnUserClickedBanner__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnUserClickedBanner__PythonCallable;
            static Load(InName: string): OnUserClickedBanner__PythonCallable;
        
            __tid_OnUserClickedBanner__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnUserClosedAdvertisement__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnUserClosedAdvertisement__PythonCallable;
            static Load(InName: string): OnUserClosedAdvertisement__PythonCallable;
        
            __tid_OnUserClosedAdvertisement__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnUserInputDeviceConnectionChange__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnUserInputDeviceConnectionChange__PythonCallable;
            static Load(InName: string): OnUserInputDeviceConnectionChange__PythonCallable;
        
            __tid_OnUserInputDeviceConnectionChange__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnUserInputDevicePairingChange__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnUserInputDevicePairingChange__PythonCallable;
            static Load(InName: string): OnUserInputDevicePairingChange__PythonCallable;
        
            __tid_OnUserInputDevicePairingChange__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnUserScrolledEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnUserScrolledEvent__PythonCallable;
            static Load(InName: string): OnUserScrolledEvent__PythonCallable;
        
            __tid_OnUserScrolledEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnVisibilityChangedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnVisibilityChangedEvent__PythonCallable;
            static Load(InName: string): OnVisibilityChangedEvent__PythonCallable;
        
            __tid_OnVisibilityChangedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class OnWidgetAnimationPlaybackStatusChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OnWidgetAnimationPlaybackStatusChanged__PythonCallable;
            static Load(InName: string): OnWidgetAnimationPlaybackStatusChanged__PythonCallable;
        
            __tid_OnWidgetAnimationPlaybackStatusChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ParticleBurstSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ParticleBurstSignature__PythonCallable;
            static Load(InName: string): ParticleBurstSignature__PythonCallable;
        
            __tid_ParticleBurstSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ParticleCollisionSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ParticleCollisionSignature__PythonCallable;
            static Load(InName: string): ParticleCollisionSignature__PythonCallable;
        
            __tid_ParticleCollisionSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ParticleDeathSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ParticleDeathSignature__PythonCallable;
            static Load(InName: string): ParticleDeathSignature__PythonCallable;
        
            __tid_ParticleDeathSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ParticleSpawnSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ParticleSpawnSignature__PythonCallable;
            static Load(InName: string): ParticleSpawnSignature__PythonCallable;
        
            __tid_ParticleSpawnSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PawnControllerChangedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PawnControllerChangedSignature__PythonCallable;
            static Load(InName: string): PawnControllerChangedSignature__PythonCallable;
        
            __tid_PawnControllerChangedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PawnRestartedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PawnRestartedSignature__PythonCallable;
            static Load(InName: string): PawnRestartedSignature__PythonCallable;
        
            __tid_PawnRestartedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PawnSensingComponent_HearNoiseDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PawnSensingComponent_HearNoiseDelegate__PythonCallable;
            static Load(InName: string): PawnSensingComponent_HearNoiseDelegate__PythonCallable;
        
            __tid_PawnSensingComponent_HearNoiseDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PawnSensingComponent_SeePawnDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PawnSensingComponent_SeePawnDelegate__PythonCallable;
            static Load(InName: string): PawnSensingComponent_SeePawnDelegate__PythonCallable;
        
            __tid_PawnSensingComponent_SeePawnDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PerceptionUpdatedDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PerceptionUpdatedDelegate__PythonCallable;
            static Load(InName: string): PerceptionUpdatedDelegate__PythonCallable;
        
            __tid_PerceptionUpdatedDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PhysicsVolumeChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PhysicsVolumeChanged__PythonCallable;
            static Load(InName: string): PhysicsVolumeChanged__PythonCallable;
        
            __tid_PhysicsVolumeChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PlasticDeformationEventSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PlasticDeformationEventSignature__PythonCallable;
            static Load(InName: string): PlasticDeformationEventSignature__PythonCallable;
        
            __tid_PlasticDeformationEventSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PlatformEventsComponent_PlatformEventDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PlatformEventsComponent_PlatformEventDelegate__PythonCallable;
            static Load(InName: string): PlatformEventsComponent_PlatformEventDelegate__PythonCallable;
        
            __tid_PlatformEventsComponent_PlatformEventDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PlatformGameInstance_PlatformDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PlatformGameInstance_PlatformDelegate__PythonCallable;
            static Load(InName: string): PlatformGameInstance_PlatformDelegate__PythonCallable;
        
            __tid_PlatformGameInstance_PlatformDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PlatformGameInstance_PlatformFailedToRegisterForRemoteNotificationsDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PlatformGameInstance_PlatformFailedToRegisterForRemoteNotificationsDelegate__PythonCallable;
            static Load(InName: string): PlatformGameInstance_PlatformFailedToRegisterForRemoteNotificationsDelegate__PythonCallable;
        
            __tid_PlatformGameInstance_PlatformFailedToRegisterForRemoteNotificationsDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PlatformGameInstance_PlatformReceivedLocalNotificationDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PlatformGameInstance_PlatformReceivedLocalNotificationDelegate__PythonCallable;
            static Load(InName: string): PlatformGameInstance_PlatformReceivedLocalNotificationDelegate__PythonCallable;
        
            __tid_PlatformGameInstance_PlatformReceivedLocalNotificationDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PlatformGameInstance_PlatformReceivedRemoteNotificationDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PlatformGameInstance_PlatformReceivedRemoteNotificationDelegate__PythonCallable;
            static Load(InName: string): PlatformGameInstance_PlatformReceivedRemoteNotificationDelegate__PythonCallable;
        
            __tid_PlatformGameInstance_PlatformReceivedRemoteNotificationDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PlatformGameInstance_PlatformRegisteredForRemoteNotificationsDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PlatformGameInstance_PlatformRegisteredForRemoteNotificationsDelegate__PythonCallable;
            static Load(InName: string): PlatformGameInstance_PlatformRegisteredForRemoteNotificationsDelegate__PythonCallable;
        
            __tid_PlatformGameInstance_PlatformRegisteredForRemoteNotificationsDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PlatformGameInstance_PlatformRegisteredForUserNotificationsDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PlatformGameInstance_PlatformRegisteredForUserNotificationsDelegate__PythonCallable;
            static Load(InName: string): PlatformGameInstance_PlatformRegisteredForUserNotificationsDelegate__PythonCallable;
        
            __tid_PlatformGameInstance_PlatformRegisteredForUserNotificationsDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PlatformGameInstance_PlatformScreenOrientationChangedDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PlatformGameInstance_PlatformScreenOrientationChangedDelegate__PythonCallable;
            static Load(InName: string): PlatformGameInstance_PlatformScreenOrientationChangedDelegate__PythonCallable;
        
            __tid_PlatformGameInstance_PlatformScreenOrientationChangedDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PlatformGameInstance_PlatformStartupArgumentsDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PlatformGameInstance_PlatformStartupArgumentsDelegate__PythonCallable;
            static Load(InName: string): PlatformGameInstance_PlatformStartupArgumentsDelegate__PythonCallable;
        
            __tid_PlatformGameInstance_PlatformStartupArgumentsDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PlatformInterfaceDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PlatformInterfaceDelegate__PythonCallable;
            static Load(InName: string): PlatformInterfaceDelegate__PythonCallable;
        
            __tid_PlatformInterfaceDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PlayMontageAnimNotifyDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PlayMontageAnimNotifyDelegate__PythonCallable;
            static Load(InName: string): PlayMontageAnimNotifyDelegate__PythonCallable;
        
            __tid_PlayMontageAnimNotifyDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PostEvaluateAnimEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PostEvaluateAnimEvent__PythonCallable;
            static Load(InName: string): PostEvaluateAnimEvent__PythonCallable;
        
            __tid_PostEvaluateAnimEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ProjectileMovementComponent_OnProjectileBounceDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ProjectileMovementComponent_OnProjectileBounceDelegate__PythonCallable;
            static Load(InName: string): ProjectileMovementComponent_OnProjectileBounceDelegate__PythonCallable;
        
            __tid_ProjectileMovementComponent_OnProjectileBounceDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ProjectileMovementComponent_OnProjectileStopDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ProjectileMovementComponent_OnProjectileStopDelegate__PythonCallable;
            static Load(InName: string): ProjectileMovementComponent_OnProjectileStopDelegate__PythonCallable;
        
            __tid_ProjectileMovementComponent_OnProjectileStopDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PuertsAutoMixinDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PuertsAutoMixinDelegate__PythonCallable;
            static Load(InName: string): PuertsAutoMixinDelegate__PythonCallable;
        
            __tid_PuertsAutoMixinDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PyTestDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PyTestDelegate__PythonCallable;
            static Load(InName: string): PyTestDelegate__PythonCallable;
        
            __tid_PyTestDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PyTestMulticastDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PyTestMulticastDelegate__PythonCallable;
            static Load(InName: string): PyTestMulticastDelegate__PythonCallable;
        
            __tid_PyTestMulticastDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PyTestSlateTickDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PyTestSlateTickDelegate__PythonCallable;
            static Load(InName: string): PyTestSlateTickDelegate__PythonCallable;
        
            __tid_PyTestSlateTickDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PyTestStructDelegate_OnNameCollisionDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PyTestStructDelegate_OnNameCollisionDelegate__PythonCallable;
            static Load(InName: string): PyTestStructDelegate_OnNameCollisionDelegate__PythonCallable;
        
            __tid_PyTestStructDelegate_OnNameCollisionDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class PyTestVectorDelegate_OnNameCollisionDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): PyTestVectorDelegate_OnNameCollisionDelegate__PythonCallable;
            static Load(InName: string): PyTestVectorDelegate_OnNameCollisionDelegate__PythonCallable;
        
            __tid_PyTestVectorDelegate_OnNameCollisionDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class RemovalEventSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RemovalEventSignature__PythonCallable;
            static Load(InName: string): RemovalEventSignature__PythonCallable;
        
            __tid_RemovalEventSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class RigHierarchyModifiedDynamicEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigHierarchyModifiedDynamicEvent__PythonCallable;
            static Load(InName: string): RigHierarchyModifiedDynamicEvent__PythonCallable;
        
            __tid_RigHierarchyModifiedDynamicEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class RigVMAssetDataFilterDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMAssetDataFilterDynamic__PythonCallable;
            static Load(InName: string): RigVMAssetDataFilterDynamic__PythonCallable;
        
            __tid_RigVMAssetDataFilterDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class RigVMBlueprintFilterDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMBlueprintFilterDynamic__PythonCallable;
            static Load(InName: string): RigVMBlueprintFilterDynamic__PythonCallable;
        
            __tid_RigVMBlueprintFilterDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class RigVMGraphModifiedDynamicEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMGraphModifiedDynamicEvent__PythonCallable;
            static Load(InName: string): RigVMGraphModifiedDynamicEvent__PythonCallable;
        
            __tid_RigVMGraphModifiedDynamicEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class RigVMNodeFilterDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMNodeFilterDynamic__PythonCallable;
            static Load(InName: string): RigVMNodeFilterDynamic__PythonCallable;
        
            __tid_RigVMNodeFilterDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class RigVMPeformUserWorkflowDynamicDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMPeformUserWorkflowDynamicDelegate__PythonCallable;
            static Load(InName: string): RigVMPeformUserWorkflowDynamicDelegate__PythonCallable;
        
            __tid_RigVMPeformUserWorkflowDynamicDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class RigVMUserWorkflowProvider__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): RigVMUserWorkflowProvider__PythonCallable;
            static Load(InName: string): RigVMUserWorkflowProvider__PythonCallable;
        
            __tid_RigVMUserWorkflowProvider__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class SequencerOutlinerSelectionChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): SequencerOutlinerSelectionChanged__PythonCallable;
            static Load(InName: string): SequencerOutlinerSelectionChanged__PythonCallable;
        
            __tid_SequencerOutlinerSelectionChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class SimpleListItemEventDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): SimpleListItemEventDynamic__PythonCallable;
            static Load(InName: string): SimpleListItemEventDynamic__PythonCallable;
        
            __tid_SimpleListItemEventDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class SlateAccessibleWidgetData_GetText__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): SlateAccessibleWidgetData_GetText__PythonCallable;
            static Load(InName: string): SlateAccessibleWidgetData_GetText__PythonCallable;
        
            __tid_SlateAccessibleWidgetData_GetText__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class SmartLinkReachedSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): SmartLinkReachedSignature__PythonCallable;
            static Load(InName: string): SmartLinkReachedSignature__PythonCallable;
        
            __tid_SmartLinkReachedSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class SourceControl_QueryFileStateDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): SourceControl_QueryFileStateDelegate__PythonCallable;
            static Load(InName: string): SourceControl_QueryFileStateDelegate__PythonCallable;
        
            __tid_SourceControl_QueryFileStateDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class SpinBox_OnSpinBoxBeginSliderMovement__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): SpinBox_OnSpinBoxBeginSliderMovement__PythonCallable;
            static Load(InName: string): SpinBox_OnSpinBoxBeginSliderMovement__PythonCallable;
        
            __tid_SpinBox_OnSpinBoxBeginSliderMovement__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class SpinBox_OnSpinBoxValueChangedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): SpinBox_OnSpinBoxValueChangedEvent__PythonCallable;
            static Load(InName: string): SpinBox_OnSpinBoxValueChangedEvent__PythonCallable;
        
            __tid_SpinBox_OnSpinBoxValueChangedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class SpinBox_OnSpinBoxValueCommittedEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): SpinBox_OnSpinBoxValueCommittedEvent__PythonCallable;
            static Load(InName: string): SpinBox_OnSpinBoxValueCommittedEvent__PythonCallable;
        
            __tid_SpinBox_OnSpinBoxValueCommittedEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class StateTreeDynamicDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): StateTreeDynamicDelegate__PythonCallable;
            static Load(InName: string): StateTreeDynamicDelegate__PythonCallable;
        
            __tid_StateTreeDynamicDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class SystemLibrary_OnAssetClassLoaded__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): SystemLibrary_OnAssetClassLoaded__PythonCallable;
            static Load(InName: string): SystemLibrary_OnAssetClassLoaded__PythonCallable;
        
            __tid_SystemLibrary_OnAssetClassLoaded__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class SystemLibrary_OnAssetLoaded__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): SystemLibrary_OnAssetLoaded__PythonCallable;
            static Load(InName: string): SystemLibrary_OnAssetLoaded__PythonCallable;
        
            __tid_SystemLibrary_OnAssetLoaded__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class SystemLibrary_OnAssetsLoaded__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): SystemLibrary_OnAssetsLoaded__PythonCallable;
            static Load(InName: string): SystemLibrary_OnAssetsLoaded__PythonCallable;
        
            __tid_SystemLibrary_OnAssetsLoaded__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TakeAnyDamageSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TakeAnyDamageSignature__PythonCallable;
            static Load(InName: string): TakeAnyDamageSignature__PythonCallable;
        
            __tid_TakeAnyDamageSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TakePointDamageSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TakePointDamageSignature__PythonCallable;
            static Load(InName: string): TakePointDamageSignature__PythonCallable;
        
            __tid_TakePointDamageSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TakeRadialDamageSignature__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TakeRadialDamageSignature__PythonCallable;
            static Load(InName: string): TakeRadialDamageSignature__PythonCallable;
        
            __tid_TakeRadialDamageSignature__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TakeRecorderCancelled__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TakeRecorderCancelled__PythonCallable;
            static Load(InName: string): TakeRecorderCancelled__PythonCallable;
        
            __tid_TakeRecorderCancelled__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TakeRecorderFinished__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TakeRecorderFinished__PythonCallable;
            static Load(InName: string): TakeRecorderFinished__PythonCallable;
        
            __tid_TakeRecorderFinished__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TakeRecorderInitialized__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TakeRecorderInitialized__PythonCallable;
            static Load(InName: string): TakeRecorderInitialized__PythonCallable;
        
            __tid_TakeRecorderInitialized__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TakeRecorderMarkedFrameAdded__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TakeRecorderMarkedFrameAdded__PythonCallable;
            static Load(InName: string): TakeRecorderMarkedFrameAdded__PythonCallable;
        
            __tid_TakeRecorderMarkedFrameAdded__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TakeRecorderPreInitialize__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TakeRecorderPreInitialize__PythonCallable;
            static Load(InName: string): TakeRecorderPreInitialize__PythonCallable;
        
            __tid_TakeRecorderPreInitialize__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TakeRecorderSlateChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TakeRecorderSlateChanged__PythonCallable;
            static Load(InName: string): TakeRecorderSlateChanged__PythonCallable;
        
            __tid_TakeRecorderSlateChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TakeRecorderStarted__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TakeRecorderStarted__PythonCallable;
            static Load(InName: string): TakeRecorderStarted__PythonCallable;
        
            __tid_TakeRecorderStarted__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TakeRecorderStopped__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TakeRecorderStopped__PythonCallable;
            static Load(InName: string): TakeRecorderStopped__PythonCallable;
        
            __tid_TakeRecorderStopped__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TakeRecorderTakeNumberChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TakeRecorderTakeNumberChanged__PythonCallable;
            static Load(InName: string): TakeRecorderTakeNumberChanged__PythonCallable;
        
            __tid_TakeRecorderTakeNumberChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TakesCoreBlueprintLibrary_OnTakeRecorderSlateChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TakesCoreBlueprintLibrary_OnTakeRecorderSlateChanged__PythonCallable;
            static Load(InName: string): TakesCoreBlueprintLibrary_OnTakeRecorderSlateChanged__PythonCallable;
        
            __tid_TakesCoreBlueprintLibrary_OnTakeRecorderSlateChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TakesCoreBlueprintLibrary_OnTakeRecorderTakeNumberChanged__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TakesCoreBlueprintLibrary_OnTakeRecorderTakeNumberChanged__PythonCallable;
            static Load(InName: string): TakesCoreBlueprintLibrary_OnTakeRecorderTakeNumberChanged__PythonCallable;
        
            __tid_TakesCoreBlueprintLibrary_OnTakeRecorderTakeNumberChanged__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TimerDynamicDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TimerDynamicDelegate__PythonCallable;
            static Load(InName: string): TimerDynamicDelegate__PythonCallable;
        
            __tid_TimerDynamicDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ToolMenuDynamicCanExecuteAction__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ToolMenuDynamicCanExecuteAction__PythonCallable;
            static Load(InName: string): ToolMenuDynamicCanExecuteAction__PythonCallable;
        
            __tid_ToolMenuDynamicCanExecuteAction__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ToolMenuDynamicExecuteAction__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ToolMenuDynamicExecuteAction__PythonCallable;
            static Load(InName: string): ToolMenuDynamicExecuteAction__PythonCallable;
        
            __tid_ToolMenuDynamicExecuteAction__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ToolMenuDynamicGetActionCheckState__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ToolMenuDynamicGetActionCheckState__PythonCallable;
            static Load(InName: string): ToolMenuDynamicGetActionCheckState__PythonCallable;
        
            __tid_ToolMenuDynamicGetActionCheckState__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ToolMenuDynamicIsActionButtonVisible__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ToolMenuDynamicIsActionButtonVisible__PythonCallable;
            static Load(InName: string): ToolMenuDynamicIsActionButtonVisible__PythonCallable;
        
            __tid_ToolMenuDynamicIsActionButtonVisible__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ToolMenuDynamicIsActionChecked__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ToolMenuDynamicIsActionChecked__PythonCallable;
            static Load(InName: string): ToolMenuDynamicIsActionChecked__PythonCallable;
        
            __tid_ToolMenuDynamicIsActionChecked__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TypedElementSelectionSet_OnChangeDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TypedElementSelectionSet_OnChangeDynamic__PythonCallable;
            static Load(InName: string): TypedElementSelectionSet_OnChangeDynamic__PythonCallable;
        
            __tid_TypedElementSelectionSet_OnChangeDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class TypedElementSelectionSet_OnPreChangeDynamic__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): TypedElementSelectionSet_OnPreChangeDynamic__PythonCallable;
            static Load(InName: string): TypedElementSelectionSet_OnPreChangeDynamic__PythonCallable;
        
            __tid_TypedElementSelectionSet_OnPreChangeDynamic__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class ViewportDisplayCallback__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): ViewportDisplayCallback__PythonCallable;
            static Load(InName: string): ViewportDisplayCallback__PythonCallable;
        
            __tid_ViewportDisplayCallback__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_GenerateWidgetForObject__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_GenerateWidgetForObject__PythonCallable;
            static Load(InName: string): Widget_GenerateWidgetForObject__PythonCallable;
        
            __tid_Widget_GenerateWidgetForObject__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_GenerateWidgetForString__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_GenerateWidgetForString__PythonCallable;
            static Load(InName: string): Widget_GenerateWidgetForString__PythonCallable;
        
            __tid_Widget_GenerateWidgetForString__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_GetBool__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_GetBool__PythonCallable;
            static Load(InName: string): Widget_GetBool__PythonCallable;
        
            __tid_Widget_GetBool__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_GetCheckBoxState__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_GetCheckBoxState__PythonCallable;
            static Load(InName: string): Widget_GetCheckBoxState__PythonCallable;
        
            __tid_Widget_GetCheckBoxState__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_GetFloat__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_GetFloat__PythonCallable;
            static Load(InName: string): Widget_GetFloat__PythonCallable;
        
            __tid_Widget_GetFloat__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_GetInt32__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_GetInt32__PythonCallable;
            static Load(InName: string): Widget_GetInt32__PythonCallable;
        
            __tid_Widget_GetInt32__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_GetLinearColor__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_GetLinearColor__PythonCallable;
            static Load(InName: string): Widget_GetLinearColor__PythonCallable;
        
            __tid_Widget_GetLinearColor__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_GetMouseCursor__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_GetMouseCursor__PythonCallable;
            static Load(InName: string): Widget_GetMouseCursor__PythonCallable;
        
            __tid_Widget_GetMouseCursor__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_GetSlateBrush__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_GetSlateBrush__PythonCallable;
            static Load(InName: string): Widget_GetSlateBrush__PythonCallable;
        
            __tid_Widget_GetSlateBrush__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_GetSlateColor__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_GetSlateColor__PythonCallable;
            static Load(InName: string): Widget_GetSlateColor__PythonCallable;
        
            __tid_Widget_GetSlateColor__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_GetSlateVisibility__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_GetSlateVisibility__PythonCallable;
            static Load(InName: string): Widget_GetSlateVisibility__PythonCallable;
        
            __tid_Widget_GetSlateVisibility__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_GetText__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_GetText__PythonCallable;
            static Load(InName: string): Widget_GetText__PythonCallable;
        
            __tid_Widget_GetText__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_GetWidget__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_GetWidget__PythonCallable;
            static Load(InName: string): Widget_GetWidget__PythonCallable;
        
            __tid_Widget_GetWidget__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_OnPointerEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_OnPointerEvent__PythonCallable;
            static Load(InName: string): Widget_OnPointerEvent__PythonCallable;
        
            __tid_Widget_OnPointerEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class Widget_OnReply__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): Widget_OnReply__PythonCallable;
            static Load(InName: string): Widget_OnReply__PythonCallable;
        
            __tid_Widget_OnReply__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class WidgetAnimationDynamicEvent__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): WidgetAnimationDynamicEvent__PythonCallable;
            static Load(InName: string): WidgetAnimationDynamicEvent__PythonCallable;
        
            __tid_WidgetAnimationDynamicEvent__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class WidgetAnimationDynamicEvents__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): WidgetAnimationDynamicEvents__PythonCallable;
            static Load(InName: string): WidgetAnimationDynamicEvents__PythonCallable;
        
            __tid_WidgetAnimationDynamicEvents__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class WidgetAnimationResult__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): WidgetAnimationResult__PythonCallable;
            static Load(InName: string): WidgetAnimationResult__PythonCallable;
        
            __tid_WidgetAnimationResult__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.PythonTypes {
        class WidgetLibrary_OnGameWindowCloseButtonClickedDelegate__PythonCallable extends UE.PythonCallableForDelegate {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): WidgetLibrary_OnGameWindowCloseButtonClickedDelegate__PythonCallable;
            static Load(InName: string): WidgetLibrary_OnGameWindowCloseButtonClickedDelegate__PythonCallable;
        
            __tid_WidgetLibrary_OnGameWindowCloseButtonClickedDelegate__PythonCallable_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace ControlRig.Python.RigHierarchy.add_controls_for_selected_PY {
        class add_controls_for_selected extends UE.ToolMenuEntryScript {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): add_controls_for_selected;
            static Load(InName: string): add_controls_for_selected;
        
            __tid_add_controls_for_selected_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace ControlRig.Python.RigHierarchy.add_controls_for_selected_PY {
        enum ControlOutputFormat { HIERARCHY, LIST, CHILD, ControlOutputFormat_MAX, __typeKeyDoNoAccess}
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace ControlRig.Python.RigHierarchy.add_controls_for_selected_PY {
        class add_controls_for_selected_options extends UE.Object {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            output_format: UE.ControlRig.Python.RigHierarchy.add_controls_for_selected_PY.ControlOutputFormat;
            suffix: string;
            prefix: string;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): add_controls_for_selected_options;
            static Load(InName: string): add_controls_for_selected_options;
        
            __tid_add_controls_for_selected_options_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace ControlRig.Python.RigHierarchy.add_null_above_selected_PY {
        class add_null_above_selected extends UE.ToolMenuEntryScript {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): add_null_above_selected;
            static Load(InName: string): add_null_above_selected;
        
            __tid_add_null_above_selected_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace ControlRig.Python.RigHierarchy.rename_items_PY {
        class add_prefix_dialog extends UE.Object {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            prefix: string;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): add_prefix_dialog;
            static Load(InName: string): add_prefix_dialog;
        
            __tid_add_prefix_dialog_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace ControlRig.Python.RigHierarchy.rename_items_PY {
        class add_prefix_entry extends UE.ToolMenuEntryScript {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): add_prefix_entry;
            static Load(InName: string): add_prefix_entry;
        
            __tid_add_prefix_entry_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace ControlRig.Python.RigHierarchy.rename_items_PY {
        class add_suffix_dialog extends UE.Object {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            suffix: string;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): add_suffix_dialog;
            static Load(InName: string): add_suffix_dialog;
        
            __tid_add_suffix_dialog_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace ControlRig.Python.RigHierarchy.rename_items_PY {
        class add_suffix_entry extends UE.ToolMenuEntryScript {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): add_suffix_entry;
            static Load(InName: string): add_suffix_entry;
        
            __tid_add_suffix_entry_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace ControlRig.Python.RigHierarchy.rename_items_PY {
        class do_rename_dialog extends UE.Object {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            start_num: number;
            newName: string;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): do_rename_dialog;
            static Load(InName: string): do_rename_dialog;
        
            __tid_do_rename_dialog_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace ControlRig.Python.RigHierarchy.rename_items_PY {
        class do_rename_entry extends UE.ToolMenuEntryScript {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): do_rename_entry;
            static Load(InName: string): do_rename_entry;
        
            __tid_do_rename_entry_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace ControlRig.Python.RigHierarchy.rename_items_PY {
        class search_replace_entry extends UE.ToolMenuEntryScript {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): search_replace_entry;
            static Load(InName: string): search_replace_entry;
        
            __tid_search_replace_entry_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace ControlRig.Python.RigHierarchy.rename_items_PY {
        class search_replace_name_dialog extends UE.Object {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            search: string;
            replace: string;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): search_replace_name_dialog;
            static Load(InName: string): search_replace_name_dialog;
        
            __tid_search_replace_name_dialog_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace ControlRig.Python.RigHierarchy.align_items_PY {
        class align_rotation extends UE.ToolMenuEntryScript {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): align_rotation;
            static Load(InName: string): align_rotation;
        
            __tid_align_rotation_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace ControlRig.Python.RigHierarchy.align_items_PY {
        class align_scale extends UE.ToolMenuEntryScript {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): align_scale;
            static Load(InName: string): align_scale;
        
            __tid_align_scale_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace ControlRig.Python.RigHierarchy.align_items_PY {
        class align_translation_all extends UE.ToolMenuEntryScript {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): align_translation_all;
            static Load(InName: string): align_translation_all;
        
            __tid_align_translation_all_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace ControlRig.Python.RigHierarchy.align_items_PY {
        class align_translation_rotation extends UE.ToolMenuEntryScript {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): align_translation_rotation;
            static Load(InName: string): align_translation_rotation;
        
            __tid_align_translation_rotation_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace ControlRig.Python.RigHierarchy.align_items_PY {
        class align_translation_x extends UE.ToolMenuEntryScript {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): align_translation_x;
            static Load(InName: string): align_translation_x;
        
            __tid_align_translation_x_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace ControlRig.Python.RigHierarchy.align_items_PY {
        class align_translation_y extends UE.ToolMenuEntryScript {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): align_translation_y;
            static Load(InName: string): align_translation_y;
        
            __tid_align_translation_y_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace ControlRig.Python.RigHierarchy.align_items_PY {
        class align_translation_z extends UE.ToolMenuEntryScript {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): align_translation_z;
            static Load(InName: string): align_translation_z;
        
            __tid_align_translation_z_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace IKRig.Python.ControlRigWorkflows.workflow_fbik_import_ik_rig_PY {
        class import_ik_rig_options extends UE.Object {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            create_transform_nodes_for_effectors: boolean;
            import_effectors: boolean;
            import_excluded_bones: boolean;
            import_bone_settings: boolean;
            ik_rig: UE.IKRigDefinition;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): import_ik_rig_options;
            static Load(InName: string): import_ik_rig_options;
        
            __tid_import_ik_rig_options_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace DeformerGraph.Deformers.DG_LinearBlendSkin_Morph_Cloth_RecomputeNormals {
        class OptimusNode_ConstantValue_FloatProperty extends UE.OptimusNode_ConstantValue {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            Value: number;
            Out: number;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OptimusNode_ConstantValue_FloatProperty;
            static Load(InName: string): OptimusNode_ConstantValue_FloatProperty;
        
            __tid_OptimusNode_ConstantValue_FloatProperty_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace DeformerGraph.Deformers.DG_LinearBlendSkin_Morph_Cloth_RecomputeNormals {
        class OptimusNode_ConstantValue_FVector4 extends UE.OptimusNode_ConstantValue {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            Value: UE.Vector4;
            Out: UE.Vector4;
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): OptimusNode_ConstantValue_FVector4;
            static Load(InName: string): OptimusNode_ConstantValue_FVector4;
        
            __tid_OptimusNode_ConstantValue_FVector4_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace ControlRig.Python.RigHierarchy.set_bone_reference_pose_PY {
        class set_bone_reference_pose extends UE.ToolMenuEntryScript {
            constructor(Outer?: Object, Name?: string, ObjectFlags?: number);
            static StaticClass(): Class;
            static Find(OrigInName: string, Outer?: Object): set_bone_reference_pose;
            static Load(InName: string): set_bone_reference_pose;
        
            __tid_set_bone_reference_pose_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.ArtTools.RenderToTexture.Blueprints.PhysMesh {
        class PhysMesh {
            constructor();
            constructor(SMesh: UE.StaticMesh, Transform: UE.Transform);
            SMesh: UE.StaticMesh;
            Transform: UE.Transform;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_PhysMesh_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
// __TYPE_DECL_START: ASSOCIATION
    namespace Engine.ArtTools.RenderToTexture.Blueprints.TilingMesh {
        class TilingMesh {
            constructor();
            constructor(StaticMesh: UE.StaticMesh, Transform: UE.Transform, Material: UE.MaterialInstanceConstant, Visible: boolean, DisplacementTexture: UE.Texture);
            StaticMesh: UE.StaticMesh;
            Transform: UE.Transform;
            Material: UE.MaterialInstanceConstant;
            Visible: boolean;
            DisplacementTexture: UE.Texture;
            /**
             * @deprecated use StaticStruct instead.
             */
            static StaticClass(): ScriptStruct;
            static StaticStruct(): ScriptStruct;
            __tid_TilingMesh_0__: boolean;
        }
        
    }

// __TYPE_DECL_END
}
