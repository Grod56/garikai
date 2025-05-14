import { Model } from "@/app-library/custom-types/model/Model";
import { ComponentListModel } from "../../ethereal/component-list/ComponentListModel";
import {
	WidgetComponentModel,
	WidgetComponentModelView,
} from "../WidgetComponentModel";

export interface CarouselModelView<
	M extends Model<V>,
	V extends object = object,
> extends WidgetComponentModelView {
	componentListModel: ComponentListModel<M>;
}

export type CarouselModel<
	M extends Model<V>,
	V extends object = object,
> = WidgetComponentModel<CarouselModelView<M>>;
