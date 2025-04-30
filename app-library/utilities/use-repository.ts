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
	W extends ContentRepositoryModel<T, U> &
		StatifiableNonReadonlyModel<V, T, U>,
>(repositoryModelInstantiator: () => W): W {
	const model = useStatefulInteractiveModel(repositoryModelInstantiator());
	const { interact } = model;

	useEffect(() => {
		interact({
			interactionName: "RETRIEVE_MODELS",
		}).catch(console.error);
	}, [interact]);

	return model as W;
}
