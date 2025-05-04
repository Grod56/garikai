import {
	ContentComponentModel,
	ContentComponentModelView,
} from "../ContentComponentModel";

export type MainModel = ContentComponentModel<MainModelView>;

export interface MainModelView extends ContentComponentModelView {
	readonly name: string;
}
