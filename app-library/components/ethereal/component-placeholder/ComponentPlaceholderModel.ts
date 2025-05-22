import { GeneralComponent } from "@/app-library/custom-types/Miscellaneous";
import { Model, ModelView } from "@mvc-react/mvc";
import { ReadonlyModel } from "@mvc-react/mvc";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";

export type PlaceholderedComponentModel<
	M extends Model<V>,
	V extends ModelView = ModelView,
> = M | undefined;

export interface ComponentPlaceholderModelView<
	M extends Model<V>,
	V extends ModelView = ModelView,
> {
	placeholderedComponentModel: PlaceholderedComponentModel<M>;
	PlaceholderedComponent: ModeledVoidComponent<M>;
	PlaceholderComponent: GeneralComponent;
}

export type ComponentPlaceholderModel<
	M extends Model<V>,
	V extends ModelView = ModelView,
> = ReadonlyModel<ComponentPlaceholderModelView<M>>;
