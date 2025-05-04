import { Model, ModelView } from "./Model";

export type ModelInteraction<N = unknown, I extends object = object> = {
	type: N;
	input?: I;
};
export interface InteractiveModel<
	T extends ModelView,
	U extends ModelInteraction,
> extends Model<T> {
	interact(interaction: U): Promise<void>;
}
