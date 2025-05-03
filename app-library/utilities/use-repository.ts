import { useEffect } from "react";
import {
	ContentRepositoryModel,
	ContentRepositoryModelInteraction,
} from "../content-repositories/ContentRepositoryModel";
import { ModelInstance } from "../custom-types/model/Model";
import { useStatefulInteractiveModel } from "./model-transformer";
import {
	InstanceInteractionInterface,
	StatifiableNonReadonlyModel,
} from "../custom-types/StatifiableNonReadonlyModel";

export function useRepository<
	T extends ModelInstance,
	U extends ContentRepositoryModelInteraction,
	V extends InstanceInteractionInterface<T, U>,
	W extends ContentRepositoryModel<T, U>,
>(
	repositoryModelInstantiator: () => W & StatifiableNonReadonlyModel<T, U, V>
): W {
	const model = useStatefulInteractiveModel(repositoryModelInstantiator());
	const { interact } = model;

	useEffect(() => {
		interact({
			interactionName: "RETRIEVE_MODELS",
		}).catch((error: Error) =>
			console.error("Failed to initialize repository: %s", error.cause)
		);
	}, [interact]);

	return model as W;
}
