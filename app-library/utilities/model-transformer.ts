import { useState, useCallback, useMemo } from "react";
import {
	InteractiveModel,
	ModelInteraction,
} from "../custom-types/model/InteractiveModel";
import { ModelInstance, Model } from "../custom-types/model/Model";
import { MemoizableModel } from "../custom-types/model/MemoizableModel";

export function useMemoizedReadonlyModel<
	T extends Model<U>,
	U extends ModelInstance,
>(model: T): T {
	const [memoizedModelInstance] = useState<U>(model.modelInstance);
	return { modelInstance: memoizedModelInstance } as T;
}

export function useMemoizedInteractiveModel<
	T extends ModelInstance,
	U extends ModelInteraction,
>(model: MemoizableModel<T, U>): InteractiveModel<T, U> {
	const [memoizedModelInstance, setModelInstance] = useState<T>(
		model.modelInstance
	);
	const memoizedInstanceInteractionInterface = useMemo(
		() => model.instanceInteractionInterface,
		[model]
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

	return {
		modelInstance: memoizedModelInstance,
		interact: memoizedInteract,
	};
}
