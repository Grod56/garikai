import { ArtImagePreviewModel } from "../components/content/art-image-preview/ArtImagePreviewModel";
import {
	RepositoryModel,
	RepositoryModelInteraction,
	RepositoryModelView,
} from "./RepositoryModel";

export type ArtImagePreviewRepositoryModelView = RepositoryModelView<{
	readonly artImagePreviewModels: ArtImagePreviewModel[];
}>;

export type ArtImagePreviewRepositoryModelInteraction =
	RepositoryModelInteraction;

export type ArtImagePreviewRepositoryModel = RepositoryModel<
	ArtImagePreviewRepositoryModelView,
	ArtImagePreviewRepositoryModelInteraction
>;
