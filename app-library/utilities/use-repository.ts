import { useEffect } from "react";
import {
	RepositoryInteractionType,
	RepositoryModel,
	RepositoryModelInteraction,
} from "../content-repositories/RepositoryModel";
import { ModelView } from "@mvc-react/mvc";
import {
	ViewInteractionInterface,
	StatifiableModel,
	useTransformedStatefulInteractiveModel,
} from "@mvc-react/stateful";

export function useStatefulRepository<
	T extends RepositoryModel<U, V>,
	U extends ModelView = ModelView,
	V extends RepositoryModelInteraction = RepositoryModelInteraction,
	W extends ViewInteractionInterface<U, V> = ViewInteractionInterface<U, V>,
>(repositoryModelInstantiator: () => T & StatifiableModel<W>): T {
	const model = useTransformedStatefulInteractiveModel(
		repositoryModelInstantiator()
	);
	const { interact } = model;

	useEffect(() => {
		try {
			interact({
				type: RepositoryInteractionType.RETRIEVE,
			});
		} catch (error) {
			console.error(`Failed to initialize repository: ${String(error)}`);
		}
	}, [interact]);

	return model as T;
}
