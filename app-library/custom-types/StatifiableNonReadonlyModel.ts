import { ModelInteraction } from "./model/InteractiveModel";
import { Model, ModelInstance } from "./model/Model";

export interface InstanceInteractionInterface<
	T extends ModelInstance,
	U extends ModelInteraction,
> {
	getModelInstance(interaction: U): Promise<T>;
}
export interface StatifiableNonReadonlyModel<
	T extends InstanceInteractionInterface<U, V>,
	U extends ModelInstance,
	V extends ModelInteraction,
> extends Model<U> {
	readonly instanceInteractionInterface: T;
}
