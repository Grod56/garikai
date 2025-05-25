import { ReadonlyModel } from "@mvc-react/mvc";
import { WidgetComponentModelView } from "../widget-component";

export type LinkedComponentModel = ReadonlyModel<LinkedComponentModelView>;

export interface LinkedComponentModelView extends WidgetComponentModelView {
	readonly link: URL;
}
