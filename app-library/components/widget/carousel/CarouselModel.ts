import { Model, ReadonlyModel } from "@mvc-react/mvc";
import { ComponentListModel } from "../../ethereal/component-list/ComponentListModel";
import { WidgetComponentModelView } from "../widget-component";

export interface CarouselModelView<
	M extends Model<V>,
	V extends object = object,
> extends WidgetComponentModelView {
	componentListModel: ComponentListModel<M>;
}

export type CarouselModel<
	M extends Model<V>,
	V extends object = object,
> = ReadonlyModel<CarouselModelView<M>>;
