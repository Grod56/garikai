import {
	ContentComponentModel,
	ContentComponentModelView,
} from "../ContentComponentModel";

export type HeaderModel = ContentComponentModel<HeaderModelView>;

export interface HeaderModelView extends ContentComponentModelView {
	readonly headerTitle: string;
	readonly headerSubtitle: string;
}
