import { ReadonlyModel } from "@mvc-react/mvc";
import { FeaturedPostPreviewModel } from "../../../../../../app-library/components/content/post-preview/FeaturedPostPreviewModel";
import { PlaceholderedComponentModel } from "@/app-library/components/ethereal/component-placeholder/ComponentPlaceholderModel";

export interface FeaturedPostPreviewPlaceholderModelView {
	featuredPostPreviewModel: PlaceholderedComponentModel<FeaturedPostPreviewModel>;
}

export type FeaturedPostPreviewPlaceholderModel =
	ReadonlyModel<FeaturedPostPreviewPlaceholderModelView>;
