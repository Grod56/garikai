import { useState, useCallback, useMemo } from "react";
import {
	InteractiveModel,
	ModelInteraction,
} from "../custom-types/model/InteractiveModel";
import { ReadonlyModel } from "../custom-types/model/ReadonlyModel";
import { ModelView } from "../custom-types/model/Model";
import {
	ViewInteractionInterface,
	StatifiableNonReadonlyModel,
} from "../custom-types/StatifiableNonReadonlyModel";

export function useStatefulReadonlyModel<
	T extends ModelView,
	U extends ReadonlyModel<T>,
>(model: ReadonlyModel<T>): U {
	const [memoizedModelView] = useState(model.modelView);
	return useMemo(
		() => ({ modelView: memoizedModelView }),
		[memoizedModelView]
	) as U;
}

export function useStatefulInteractiveModel<
	T extends ModelView,
	U extends ModelInteraction,
	V extends ViewInteractionInterface<T, U>,
>(model: StatifiableNonReadonlyModel<T, U, V>): InteractiveModel<T, U> {
	// The most valid way to "memoize" the input model that I could come up with
	const [initialModel] = useState(model);

	const [memoizedModelView, setModelView] = useState(initialModel.modelView);
	const memoizedViewInteractionInterface = useMemo(
		() => initialModel.viewInteractionInterface,
		[initialModel]
	);
	const memoizedInteract = useCallback(
		async (interaction: U) => {
			try {
				const newModelView =
					await memoizedViewInteractionInterface.getModelView(
						interaction
					);
				setModelView(newModelView);
			} catch (error) {
				throw new Error("Interaction failed", { cause: error });
			}
		},
		[memoizedViewInteractionInterface]
	);

	// Note to self: DO NOT memoize the model itself
	const statefulModel = {
		modelView: memoizedModelView,
		interact: memoizedInteract,
	};

	return statefulModel;
}
