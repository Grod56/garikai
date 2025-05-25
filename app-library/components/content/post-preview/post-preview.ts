import { Image } from "@/app-library/utility-types/Image";
import { ContentComponentModelView } from "../content-component";
import { ReadonlyModel } from "@mvc-react/mvc";

export type PostPreviewModel = ReadonlyModel<PostPreviewModelView>;

export interface PostPreviewModelView extends ContentComponentModelView {
	readonly title: string;
	readonly byline: string;
	readonly postLink: URL;
	readonly thumbnail: Image;
}
