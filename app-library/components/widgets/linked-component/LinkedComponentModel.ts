import {
	WidgetComponentModel,
	WidgetComponentModelInstance,
} from "../WidgetComponentModel";

export type LinkedComponentModel =
	WidgetComponentModel<LinkedComponentModelInstance>;

export interface LinkedComponentModelInstance
	extends WidgetComponentModelInstance {
	readonly link: URL;
}
