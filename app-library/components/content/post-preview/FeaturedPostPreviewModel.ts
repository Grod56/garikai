import { ContentComponentModel } from "../ContentComponentModel";
import { PostPreviewModelView } from "./PostPreviewModel";

export interface FeaturedPostPreviewModelView extends PostPreviewModelView {
	readonly snippet: string;
}

export type FeaturedPostPreviewModel =
	ContentComponentModel<FeaturedPostPreviewModelView>;
