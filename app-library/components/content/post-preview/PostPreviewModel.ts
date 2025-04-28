import { Image } from "@/app-library/custom-types/Image";
import {
	ContentComponentModel,
	ContentComponentModelInstance,
} from "../ContentComponentModel";

export type PostPreviewModel = ContentComponentModel<PostPreviewModelInstance>;

export interface PostPreviewModelInstance
	extends ContentComponentModelInstance {
	readonly title: string;
	readonly byline: string;
	readonly postLink: URL;
	readonly thumbnail: Image;
}
