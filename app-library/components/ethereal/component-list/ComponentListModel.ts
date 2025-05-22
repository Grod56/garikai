import { Model, ModelView } from "@mvc-react/mvc";
import { ReadonlyModel } from "@mvc-react/mvc";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";

export interface ComponentListModelView<
	M extends Model<V>,
	V extends ModelView = ModelView,
> {
	componentModels: M[];
	Component: ModeledVoidComponent<M>;
}

export type ComponentListModel<
	M extends Model<V>,
	V extends ModelView = ModelView,
> = ReadonlyModel<ComponentListModelView<M>>;
