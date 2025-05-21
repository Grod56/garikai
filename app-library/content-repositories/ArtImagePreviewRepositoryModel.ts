import { ArtImagePreviewModel } from "../components/content/art-image-preview/ArtImagePreviewModel";
import { RepositoryModel, RepositoryModelInteraction } from "./RepositoryModel";

export interface ArtImagePreviewRepositoryModelView {
	readonly artImagePreviewModels: ArtImagePreviewModel[];
}

export type ArtImagePreviewRepositoryModelInteraction =
	RepositoryModelInteraction;

export type ArtImagePreviewRepositoryModel = RepositoryModel<
	ArtImagePreviewRepositoryModelView,
	ArtImagePreviewRepositoryModelInteraction
>;
