import { ModelInteraction } from "./InteractiveModel";
import { Model, ModelInstance } from "./Model";

export interface InstanceInteractionInterface<
	T extends ModelInstance,
	U extends ModelInteraction,
> {
	getModelInstance(interaction: U): Promise<T>;
}
export interface MemoizableModel<
	T extends ModelInstance,
	U extends ModelInteraction,
> extends Model<T> {
	readonly instanceInteractionInterface: InstanceInteractionInterface<T, U>;
}
