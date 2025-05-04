import {
	ContentComponentModel,
	ContentComponentModelView,
} from "@/app-library/components/content/ContentComponentModel";
import { Image } from "@/app-library/custom-types/Image";

export interface ArtImagePreviewModelView extends ContentComponentModelView {
	readonly image: Image;
	readonly title: string;
}

export type ArtImagePreviewModel =
	ContentComponentModel<ArtImagePreviewModelView>;
