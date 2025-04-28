import {
	ContentComponentModel,
	ContentComponentModelInstance,
} from "../ContentComponentModel";

export type BannerModel = ContentComponentModel<BannerModelInstance>;

export interface BannerModelInstance extends ContentComponentModelInstance {
	readonly bannerText: string;
}
