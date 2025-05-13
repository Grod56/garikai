import { ReadonlyModel } from "@/app-library/custom-types/model/ReadonlyModel";
import { FeaturedPostPreviewModel } from "../../../../../../app-library/components/content/post-preview/FeaturedPostPreviewModel";

export enum FeaturedPostPreviewPlaceholderType {
	PENDING,
}

export interface FeaturedPostPreviewPlaceholderModelView {
	placeholderedFeaturedPostPreviewModel: FeaturedPostPreviewModel | undefined;
}

export type FeaturedPostPreviewPlaceholderModel =
	ReadonlyModel<FeaturedPostPreviewPlaceholderModelView>;
