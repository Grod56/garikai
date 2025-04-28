import {
	ContentComponentModel,
	ContentComponentModelInstance,
} from "@/app-library/components/content/ContentComponentModel";
import { Image } from "@/app-library/custom-types/Image";

export interface ArtImagePreviewModelInstance
	extends ContentComponentModelInstance {
	readonly image: Image;
	readonly title: string;
}

export type ArtImagePreviewModel =
	ContentComponentModel<ArtImagePreviewModelInstance>;
