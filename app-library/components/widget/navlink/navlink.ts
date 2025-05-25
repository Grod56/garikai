import { ReadonlyModel } from "@mvc-react/mvc";
import { WidgetComponentModelView } from "../widget-component";

export interface NavlinkModelView extends WidgetComponentModelView {
	readonly linkText: string;
	readonly link: string;
}

export type NavlinkModel = ReadonlyModel<NavlinkModelView>;
