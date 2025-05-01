import { ModelInteraction } from "./model/InteractiveModel";
import { Model, ModelInstance } from "./model/Model";

export interface InstanceInteractionInterface<
	T extends ModelInstance,
	U extends ModelInteraction,
> {
	getModelInstance(interaction: U): Promise<T>;
}
export interface StatifiableNonReadonlyModel<
	T extends ModelInstance,
	U extends ModelInteraction,
	V extends InstanceInteractionInterface<T, U>,
> extends Model<T> {
	readonly instanceInteractionInterface: V;
}
