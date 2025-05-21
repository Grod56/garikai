import { ReadonlyModel } from "@mvc-react/mvc";
import { SocialLinkModel } from "../../widget/social-link/SocialLinkModel";
import { ContentComponentModelView } from "../content-component";

export type FooterModel = ReadonlyModel<FooterModelView>;

export interface FooterModelView extends ContentComponentModelView {
	copyright: string;
	socialLinkModels: SocialLinkModel[];
}
