import { ReadonlyModel } from "@mvc-react/mvc";
import { ContentComponentModelView } from "../content-model";

export type HeaderModel = ReadonlyModel<HeaderModelView>;

export interface HeaderModelView extends ContentComponentModelView {
	readonly headerTitle: string;
	readonly headerSubtitle: string;
}
