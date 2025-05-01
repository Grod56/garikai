import { Image } from "@/app-library/custom-types/Image";
import { ArtImagePreviewModel } from "../../../components/content/art-image-preview/ArtImagePreviewModel";

export interface InstantiateArtImagePreviewModelParameters {
	id: string;
	image: Image;
	title: string;
}

export function instantiateArtImagePreviewModel({
	id,
	image,
	title,
}: InstantiateArtImagePreviewModelParameters): ArtImagePreviewModel {
	return {
		modelInstance: {
			id,
			image,
			title,
		},
	};
}
