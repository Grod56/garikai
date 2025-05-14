import { ArtImagePreviewModel } from "@/app-library/components/content/art-image-preview/ArtImagePreviewModel";
import { ReadonlyModel } from "@/app-library/custom-types/model/ReadonlyModel";

export interface ArtImagePreviewsPlaceholderModelView {
	placeholderedArtImagePreviewModels: ArtImagePreviewModel[] | undefined;
}

export type ArtImagePreviewsPlaceholderModel =
	ReadonlyModel<ArtImagePreviewsPlaceholderModelView>;
