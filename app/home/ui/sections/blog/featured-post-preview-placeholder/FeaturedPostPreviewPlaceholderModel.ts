import { ReadonlyModel } from "@/app-library/custom-types/model/ReadonlyModel";
import { FeaturedPostPreviewModel } from "../../../../../../app-library/components/content/post-preview/FeaturedPostPreviewModel";
import { PlaceholderedComponentModel } from "@/app-library/components/ethereal/component-placeholder/ComponentPlaceholderModel";

export interface FeaturedPostPreviewPlaceholderModelView {
	featuredPostPreviewModel: PlaceholderedComponentModel<FeaturedPostPreviewModel>;
}

export type FeaturedPostPreviewPlaceholderModel =
	ReadonlyModel<FeaturedPostPreviewPlaceholderModelView>;
