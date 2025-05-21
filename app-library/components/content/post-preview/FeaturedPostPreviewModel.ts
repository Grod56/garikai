import { ReadonlyModel } from "@mvc-react/mvc";
import { PostPreviewModelView } from "./PostPreviewModel";

export interface FeaturedPostPreviewModelView extends PostPreviewModelView {
	readonly snippet: string;
}

export type FeaturedPostPreviewModel =
	ReadonlyModel<FeaturedPostPreviewModelView>;
