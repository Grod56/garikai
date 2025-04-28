import { ArtImagePreviewModel } from "../../components/content/art-image-preview/ArtImagePreviewModel";
import {
	ContentRepositoryModel,
	ContentRepositoryModelInteraction,
} from "../ContentRepositoryModel";

export type ArtImagePreviewRepositoryModelInstance = {
	readonly artImagePreviewModels: ArtImagePreviewModel[];
} | null;

export type ArtImagePreviewRepositoryModelInteraction =
	ContentRepositoryModelInteraction;

export type ArtImagePreviewRepositoryModel = ContentRepositoryModel<
	ArtImagePreviewRepositoryModelInstance,
	ArtImagePreviewRepositoryModelInteraction
>;
