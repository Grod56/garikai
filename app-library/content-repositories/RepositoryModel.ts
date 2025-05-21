import { InteractiveModel, ModelInteraction } from "@mvc-react/mvc";
import { ModelView } from "@mvc-react/mvc";

export enum RepositoryInteractionType {
	RETRIEVE,
}

export type RepositoryModelInteraction =
	ModelInteraction<RepositoryInteractionType>;

export type RepositoryModel<
	T extends ModelView,
	U extends RepositoryModelInteraction,
> = InteractiveModel<T, U>;
