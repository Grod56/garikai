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
	T extends ReadonlyModel<U>,
	U extends ModelInstance,
>(model: T): T {
	const [memoizedModelInstance] = useState(model.modelInstance);
	return useMemo(
		() => ({ modelInstance: memoizedModelInstance }),
		[memoizedModelInstance]
	) as T;
}

export function useStatefulInteractiveModel<
	T extends InstanceInteractionInterface<U, V>,
	U extends ModelInstance,
	V extends ModelInteraction,
>(model: StatifiableNonReadonlyModel<T, U, V>): InteractiveModel<U, V> {
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
		async (interaction: V) => {
			const newModelInstance =
				await memoizedInstanceInteractionInterface.getModelInstance(
					interaction
				);
			setModelInstance(newModelInstance);
		},
		[memoizedInstanceInteractionInterface]
	);

	const statefulModel = useMemo(
		() => ({
			modelInstance: memoizedModelInstance,
			interact: memoizedInteract,
		}),
		[memoizedInteract, memoizedModelInstance]
	);

	return statefulModel;
}
