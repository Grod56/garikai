import {
	ContentComponentModel,
	ContentComponentModelView,
} from "../ContentComponentModel";

export type FooterModel = ContentComponentModel<FooterModelView>;

export interface FooterModelView extends ContentComponentModelView {
	readonly copyright: string;
}
