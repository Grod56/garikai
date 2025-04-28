import {
	ContentComponentModel,
	ContentComponentModelInstance,
} from "../ContentComponentModel";

export type MainModel = ContentComponentModel<MainModelInstance>;

export interface MainModelInstance extends ContentComponentModelInstance {
	readonly name: string;
}
