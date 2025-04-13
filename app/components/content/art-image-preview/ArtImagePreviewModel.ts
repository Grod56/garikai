import { ContentComponentModelInstance } from "@/app/components/content/ContentComponentModel";
import { Image } from "@/app/custom-types/Image";
import { ReadonlyComponentModel } from "@/app/components/ComponentModel";

export interface ArtImagePreviewModel extends ReadonlyComponentModel {
	readonly modelInstance: ArtImagePreviewModelInstance;
}

export interface ArtImagePreviewModelInstance
	extends ContentComponentModelInstance {
	readonly image: Image;
	readonly title: string;
}

export function useArtImagePreviewModel(
	id: string,
	image: Image,
	title: string
): ArtImagePreviewModel {
	return {
		modelInstance: {
			id,
			image,
			title,
		} as ArtImagePreviewModelInstance,
	};
}
