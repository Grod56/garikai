import { Model, ModelView } from "./Model";

/**
 * @typedef {{ type: T; optional?: boolean; } | { type: `${T}?`; }} Type<T>
 * @template {string} T
 */

/**
 * @typedef {Type<'thing'>} ThingType
 */

/**Encapsulates a singular model interaction/activity
 * which accordingly alters the model's view.
 *
 * */
export type ModelInteraction<N = unknown, I extends object = object> = {
	type: N;
	input?: I;
};

/**Model whose model view changes according to provided interactions. */
export interface InteractiveModel<
	T extends ModelView,
	U extends ModelInteraction,
> extends Model<T> {
	/**Initiates a model interaction.
	 * @param interaction
	 * @async */
	interact(interaction: U): Promise<void>;
}
