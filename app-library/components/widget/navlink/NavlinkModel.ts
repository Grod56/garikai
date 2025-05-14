import {
	WidgetComponentModel,
	WidgetComponentModelView,
} from "../WidgetComponentModel";

export interface NavlinkModelView extends WidgetComponentModelView {
	readonly linkText: string;
	readonly link: string;
}

export type NavlinkModel = WidgetComponentModel<NavlinkModelView>;
