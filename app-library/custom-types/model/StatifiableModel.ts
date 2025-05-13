import { ModelInteraction } from "./InteractiveModel";
import { Model, ModelView } from "./Model";

/**Encapsulates interface that produces a model view
 * according to a provided model interaction. */
export interface ViewInteractionInterface<
	T extends ModelView,
	U extends ModelInteraction,
> {
	/**Produces a model view according to provided model interaction.
	 *@param interaction
	 *@async
	 */
	getModelView(interaction: U): Promise<T>;
}

/**Model that can be transformed into a stateful interactive model.
 */
export interface StatifiableModel<
	T extends ViewInteractionInterface<U, V>,
	U extends ModelView = ModelView,
	V extends ModelInteraction = ModelInteraction,
> extends Model<U> {
	readonly viewInteractionInterface: T;
}
