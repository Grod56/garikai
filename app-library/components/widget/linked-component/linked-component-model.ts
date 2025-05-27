import { ReadonlyModel } from "@mvc-react/mvc";
import { WidgetComponentModelView } from "../widget-model";

export type LinkedComponentModel = ReadonlyModel<LinkedComponentModelView>;

export interface LinkedComponentModelView extends WidgetComponentModelView {
	readonly link: URL;
}
