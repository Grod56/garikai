import { ModelInteraction } from "./model/InteractiveModel";
import { Model, ModelView } from "./model/Model";

export interface ViewInteractionInterface<
	T extends ModelView,
	U extends ModelInteraction,
> {
	getModelView(interaction: U): Promise<T>;
}
export interface StatifiableNonReadonlyModel<
	T extends ModelView,
	U extends ModelInteraction,
	V extends ViewInteractionInterface<T, U>,
> extends Model<T> {
	readonly viewInteractionInterface: V;
}
