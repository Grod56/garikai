import { Image } from "@/app-library/custom-types/Image";
import {
	ContentComponentModel,
	ContentComponentModelView,
} from "../ContentComponentModel";

export type PostPreviewModel = ContentComponentModel<PostPreviewModelView>;

export interface PostPreviewModelView extends ContentComponentModelView {
	readonly title: string;
	readonly byline: string;
	readonly postLink: URL;
	readonly thumbnail: Image;
}
