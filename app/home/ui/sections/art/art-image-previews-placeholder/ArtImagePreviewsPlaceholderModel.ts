import { ArtImagePreviewModel } from "@/app-library/components/content/art-image-preview/art-image-preview";
import { ReadonlyModel } from "@mvc-react/mvc";

export interface ArtImagePreviewsPlaceholderModelView {
	artImagePreviewModels: ArtImagePreviewModel[] | undefined;
}

export type ArtImagePreviewsPlaceholderModel =
	ReadonlyModel<ArtImagePreviewsPlaceholderModelView>;
