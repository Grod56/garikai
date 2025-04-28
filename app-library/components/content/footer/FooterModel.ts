import {
	ContentComponentModel,
	ContentComponentModelInstance,
} from "../ContentComponentModel";

export type FooterModel = ContentComponentModel<FooterModelInstance>;

export interface FooterModelInstance extends ContentComponentModelInstance {
	readonly copyright: string;
}
