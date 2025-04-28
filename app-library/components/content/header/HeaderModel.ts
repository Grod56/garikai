import {
	ContentComponentModel,
	ContentComponentModelInstance,
} from "../ContentComponentModel";

export type HeaderModel = ContentComponentModel<HeaderModelInstance>;

export interface HeaderModelInstance extends ContentComponentModelInstance {
	readonly headerTitle: string;
	readonly headerSubtitle: string;
}
