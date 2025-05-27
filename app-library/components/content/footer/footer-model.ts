import { ReadonlyModel } from "@mvc-react/mvc";
import { SocialLinkModel } from "../../widget/social-link/social-link-model";
import { ContentComponentModelView } from "../content-model";

export type FooterModel = ReadonlyModel<FooterModelView>;

export interface FooterModelView extends ContentComponentModelView {
	copyright: string;
	socialLinkModels: SocialLinkModel[];
}
