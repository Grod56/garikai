import { SocialLinkModel } from "../../widget/social-link/SocialLinkModel";
import { ContentComponentModel } from "../ContentComponentModel";
import { FooterModelView } from "../footer/FooterModel";

export type FooterWithSocialsModel =
	ContentComponentModel<FooterWithSocialsModelView>;

export interface FooterWithSocialsModelView extends FooterModelView {
	readonly socialLinkModels: SocialLinkModel[];
}
