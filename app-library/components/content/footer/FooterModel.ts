import { SocialLinkModel } from "../../widget/social-link/SocialLinkModel";
import {
	ContentComponentModel,
	ContentComponentModelView,
} from "../ContentComponentModel";

export type FooterModel = ContentComponentModel<FooterModelView>;

export interface FooterModelView extends ContentComponentModelView {
	copyright: string;
	socialLinkModels: SocialLinkModel[];
}
