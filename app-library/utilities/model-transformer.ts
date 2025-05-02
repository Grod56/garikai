import { useState, useCallback, useMemo } from "react";
import {
	InteractiveModel,
	ModelInteraction,
} from "../custom-types/model/InteractiveModel";
import { ReadonlyModel } from "../custom-types/model/ReadonlyModel";
import { ModelInstance } from "../custom-types/model/Model";
import {
	InstanceInteractionInterface,
	StatifiableNonReadonlyModel,
} from "../custom-types/StatifiableNonReadonlyModel";

export function useStatefulReadonlyModel<
	T extends ModelInstance,
	U extends ReadonlyModel<T>,
>(model: ReadonlyModel<T>): U {
	const [memoizedModelInstance] = useState(model.modelInstance);
	return useMemo(
		() => ({ modelInstance: memoizedModelInstance }),
		[memoizedModelInstance]
	) as U;
}

export function useStatefulInteractiveModel<
	T extends ModelInstance,
	U extends ModelInteraction,
	V extends InstanceInteractionInterface<T, U>,
>(model: StatifiableNonReadonlyModel<T, U, V>): InteractiveModel<T, U> {
	// The most valid way to "memoize" the input model that I could come up with
	const [initialModel] = useState(model);

	const [memoizedModelInstance, setModelInstance] = useState(
		initialModel.modelInstance
	);
	const memoizedInstanceInteractionInterface = useMemo(
		() => initialModel.instanceInteractionInterface,
		[initialModel]
	);
	const memoizedInteract = useCallback(
		async (interaction: U) => {
			const newModelInstance =
				await memoizedInstanceInteractionInterface.getModelInstance(
					interaction
				);
			setModelInstance(newModelInstance);
		},
		[memoizedInstanceInteractionInterface]
	);

	// Note to self: DO NOT memoize the model itself
	const statefulModel = {
		modelInstance: memoizedModelInstance,
		interact: memoizedInteract,
	};

	return statefulModel;
}
