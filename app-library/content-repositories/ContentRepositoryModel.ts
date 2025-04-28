import {
	InteractiveModel,
	ModelInteraction,
} from "../custom-types/model/InteractiveModel";
import { ModelInstance } from "../custom-types/model/Model";

export type ContentRepositoryModelInteraction =
	ModelInteraction<"RETRIEVE_MODELS">;

export type ContentRepositoryModel<
	T extends ModelInstance,
	U extends ContentRepositoryModelInteraction,
> = InteractiveModel<T, U>;
