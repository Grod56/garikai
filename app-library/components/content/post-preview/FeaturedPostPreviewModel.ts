import { ContentComponentModel } from "../ContentComponentModel";
import { PostPreviewModelInstance } from "./PostPreviewModel";

export interface FeaturedPostPreviewModelInstance
	extends PostPreviewModelInstance {
	readonly snippet: string;
}

export type FeaturedPostPreviewModel =
	ContentComponentModel<FeaturedPostPreviewModelInstance>;
