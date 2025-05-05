import { useEffect } from "react";
import {
	RepositoryInteractionType,
	RepositoryModel,
	RepositoryModelInteraction,
	RepositoryModelView,
} from "../content-repositories/RepositoryModel";
import {
	StatifiableModel,
	ViewInteractionInterface,
} from "../custom-types/StatifiableModel";
import { useTransformedStatefulInteractiveModel } from "./stateful-model";

export function useRepository<
	T extends RepositoryModel<U, V>,
	U extends RepositoryModelView = RepositoryModelView,
	V extends RepositoryModelInteraction = RepositoryModelInteraction,
	W extends ViewInteractionInterface<U, V> = ViewInteractionInterface<U, V>,
>(repositoryModelInstantiator: () => T & StatifiableModel<W, U, V>): T {
	const model = useTransformedStatefulInteractiveModel(
		repositoryModelInstantiator()
	);
	const { interact } = model;

	useEffect(() => {
		interact({
			type: RepositoryInteractionType.RETRIEVE,
		}).catch((error: Error) =>
			console.error(
				"Failed to initialize repository: %s",
				String(error.cause)
			)
		);
	}, [interact]);

	return model as T;
}
