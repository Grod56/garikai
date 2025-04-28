import { Model, ModelInstance } from "./Model";

export type ModelInteraction<
	N extends string = string,
	I extends object = object,
> = {
	interactionName: N;
	input?: I;
};
export interface InteractiveModel<
	T extends ModelInstance,
	V extends ModelInteraction,
> extends Model<T> {
	interact(interaction: V): Promise<void>;
}
