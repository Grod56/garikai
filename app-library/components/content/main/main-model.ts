import { ReadonlyModel } from "@mvc-react/mvc";
import { ContentComponentModelView } from "../content-model";

export type MainModel = ReadonlyModel<MainModelView>;

export interface MainModelView extends ContentComponentModelView {
	readonly name: string;
}
