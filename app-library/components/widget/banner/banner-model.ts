import { ReadonlyModel } from "@mvc-react/mvc";
import { WidgetComponentModelView } from "../widget-model";

export type BannerModel = ReadonlyModel<BannerModelView>;

export interface BannerModelView extends WidgetComponentModelView {
	readonly bannerText: string;
}
