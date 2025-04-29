import { WidgetComponentModel } from "../WidgetComponentModel";

export type LinkedComponentModel =
	WidgetComponentModel<LinkedComponentModelInstance>;

export interface LinkedComponentModelInstance {
	readonly link: URL;
}
