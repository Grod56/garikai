import { ReadonlyModel } from "@mvc-react/mvc";
import { WidgetComponentModelView } from "../widget-component";

export type BannerModel = ReadonlyModel<BannerModelView>;

export interface BannerModelView extends WidgetComponentModelView {
	readonly bannerText: string;
}
