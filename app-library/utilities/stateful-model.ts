import { useCallback, useState } from "react";
import {
	InteractiveModel,
	ModelInteraction,
} from "../custom-types/model/InteractiveModel";
import { ModelView } from "../custom-types/model/Model";
import {
	StatifiableModel,
	ViewInteractionInterface,
} from "../custom-types/model/StatifiableModel";

/**Constructs stateful interactive model based on the provided view-interaction interface,
 * and initialized with the provided model view
 * @param viewInteractionInterface
 * @param initialModelView
 * */
export function useInitializedStatefulInteractiveModel<
	T extends InteractiveModel<U, V>,
	U extends ModelView = ModelView,
	V extends ModelInteraction = ModelInteraction,
	W extends ViewInteractionInterface<U, V> = ViewInteractionInterface<U, V>,
>(viewInteractionInterface: W, initialModelView: U): T {
	// The most valid way to "memoize" the input I could come up with
	const [memoizedViewInteractionInterface] = useState<W>(
		viewInteractionInterface
	);
	const [memoizedModelView, setModelView] = useState<U>(initialModelView);
	const memoizedInteract = useCallback(
		async (interaction: V) => {
			try {
				const newModelView =
					await memoizedViewInteractionInterface.getModelView(
						interaction
					);
				setModelView(newModelView);
			} catch (error) {
				throw new Error("Interaction failed", {
					cause: new Error(String(error)),
				});
			}
		},
		[memoizedViewInteractionInterface]
	);

	// Note to self: DO NOT memoize the output model
	const statefulModel = {
		modelView: memoizedModelView,
		interact: memoizedInteract,
	};

	return statefulModel as Readonly<T>;
}

/**Constructs new stateful interactive model
 * based on the provided view-interaction interface
 * @param viewInteractionInterface
 *  */
export function useNewStatefulInteractiveModel<
	T extends InteractiveModel<U, V>,
	U extends ModelView = ModelView,
	V extends ModelInteraction = ModelInteraction,
	W extends ViewInteractionInterface<U, V> = ViewInteractionInterface<U, V>,
>(viewInteractionInterface: W): T {
	return useInitializedStatefulInteractiveModel<T>(
		viewInteractionInterface,
		null as U
	);
}

/**Transforms provided 'statifiable' model into new stateful interactive model
 * @param model - Statifiable model
 */
export function useTransformedStatefulInteractiveModel<
	T extends InteractiveModel<U, V>,
	U extends ModelView = ModelView,
	V extends ModelInteraction = ModelInteraction,
	W extends ViewInteractionInterface<U, V> = ViewInteractionInterface<U, V>,
>(model: StatifiableModel<W, U, V>): T {
	return useInitializedStatefulInteractiveModel<T>(
		model.viewInteractionInterface,
		model.modelView
	);
}
