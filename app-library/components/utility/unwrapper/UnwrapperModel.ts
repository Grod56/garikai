import { Model } from "@/app-library/custom-types/model/Model";
import { ReadonlyModel } from "@/app-library/custom-types/model/ReadonlyModel";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";

export interface UnwrapperModelView<
	M extends Model<V>,
	V extends object = object,
> {
	wrappedModels: M[];
	UnwrappedModeledComponent: ModeledVoidComponent<M>;
}

export type UnwrapperModel<
	M extends Model<V>,
	V extends object = object,
> = ReadonlyModel<UnwrapperModelView<M>>;
