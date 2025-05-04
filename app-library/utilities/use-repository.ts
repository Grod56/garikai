import { useEffect } from "react";
import {
	RepositoryInteractionType,
	RepositoryModel,
	RepositoryModelInteraction,
	RepositoryModelView,
} from "../content-repositories/RepositoryModel";
import {
	StatifiableNonReadonlyModel,
	ViewInteractionInterface,
} from "../custom-types/StatifiableNonReadonlyModel";
import { useStatefulInteractiveModel } from "./model-transformer";

export function useRepository<
	T extends RepositoryModelView,
	U extends RepositoryModelInteraction,
	V extends ViewInteractionInterface<T, U>,
	W extends RepositoryModel<T, U>,
>(
	repositoryModelInstantiator: () => W & StatifiableNonReadonlyModel<T, U, V>
): W {
	const model = useStatefulInteractiveModel(repositoryModelInstantiator());
	const { interact } = model;

	useEffect(() => {
		interact({
			type: RepositoryInteractionType.RETRIEVE,
		}).catch((error: Error) =>
			console.error("Failed to initialize repository: %s", error.cause)
		);
	}, [interact]);

	return model as W;
}
