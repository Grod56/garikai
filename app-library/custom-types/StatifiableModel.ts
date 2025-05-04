import { ModelInteraction } from "./model/InteractiveModel";
import { Model, ModelView } from "./model/Model";

export interface ViewInteractionInterface<
	T extends ModelView,
	U extends ModelInteraction,
> {
	getModelView(interaction: U): Promise<T>;
}

// i.e. Can be made into stateful model
export interface StatifiableModel<
	T extends ViewInteractionInterface<U, V>,
	U extends ModelView = ModelView,
	V extends ModelInteraction = ModelInteraction,
> extends Model<U> {
	readonly viewInteractionInterface: T;
}
