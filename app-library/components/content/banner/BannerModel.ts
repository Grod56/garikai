import {
	ContentComponentModel,
	ContentComponentModelView,
} from "../ContentComponentModel";

export type BannerModel = ContentComponentModel<BannerModelView>;

export interface BannerModelView extends ContentComponentModelView {
	readonly bannerText: string;
}
