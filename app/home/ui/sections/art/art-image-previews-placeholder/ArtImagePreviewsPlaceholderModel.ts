import { ArtImagePreviewModel } from "@/app-library/components/content/art-image-preview/ArtImagePreviewModel";
import { ReadonlyModel } from "@/app-library/custom-types/model/ReadonlyModel";

export interface ArtImagePreviewsPlaceholderModelView {
	artImagePreviewModels: ArtImagePreviewModel[] | undefined;
}

export type ArtImagePreviewsPlaceholderModel =
	ReadonlyModel<ArtImagePreviewsPlaceholderModelView>;
