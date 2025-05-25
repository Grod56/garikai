import { ArtImagePreviewModel } from "../components/content/art-image-preview/art-image-preview";
import { RepositoryModel, RepositoryModelInteraction } from "./repository";

export interface ArtImagePreviewRepositoryModelView {
	readonly artImagePreviewModels: ArtImagePreviewModel[];
}

export type ArtImagePreviewRepositoryModelInteraction =
	RepositoryModelInteraction;

export type ArtImagePreviewRepositoryModel = RepositoryModel<
	ArtImagePreviewRepositoryModelView,
	ArtImagePreviewRepositoryModelInteraction
>;
