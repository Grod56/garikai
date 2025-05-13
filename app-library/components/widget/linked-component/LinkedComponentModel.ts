import {
	WidgetComponentModel,
	WidgetComponentModelView,
} from "../WidgetComponentModel";

export type LinkedComponentModel =
	WidgetComponentModel<LinkedComponentModelView>;

export interface LinkedComponentModelView extends WidgetComponentModelView {
	readonly link: URL;
}
