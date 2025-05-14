import { Model } from "@/app-library/custom-types/model/Model";
import { ReadonlyModel } from "@/app-library/custom-types/model/ReadonlyModel";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";

export interface ComponentListModelView<
	M extends Model<V>,
	V extends object = object,
> {
	componentModels: M[];
	Component: ModeledVoidComponent<M>;
}

export type ComponentListModel<
	M extends Model<V>,
	V extends object = object,
> = ReadonlyModel<ComponentListModelView<M>>;
