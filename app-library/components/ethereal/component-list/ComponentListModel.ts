import { Model } from "@mvc-react/mvc";
import { ReadonlyModel } from "@mvc-react/mvc";
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
