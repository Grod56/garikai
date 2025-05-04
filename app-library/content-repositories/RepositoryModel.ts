import {
	InteractiveModel,
	ModelInteraction,
} from "../custom-types/model/InteractiveModel";
import { ModelView } from "../custom-types/model/Model";

export enum RepositoryInteractionType {
	RETRIEVE,
}

export type RepositoryModelView<T extends ModelView = ModelView> = T | null;

export type RepositoryModelInteraction =
	ModelInteraction<RepositoryInteractionType>;

export type RepositoryModel<
	T extends RepositoryModelView,
	U extends RepositoryModelInteraction,
> = InteractiveModel<T, U>;
