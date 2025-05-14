import {
	WidgetComponentModel,
	WidgetComponentModelView,
} from "../WidgetComponentModel";

export type BannerModel = WidgetComponentModel<BannerModelView>;

export interface BannerModelView extends WidgetComponentModelView {
	readonly bannerText: string;
}
