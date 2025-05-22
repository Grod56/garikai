import { Model, ModelView, ReadonlyModel } from "@mvc-react/mvc";
import { ComponentListModel } from "../../ethereal/component-list/ComponentListModel";
import { WidgetComponentModelView } from "../widget-component";

export interface CarouselModelView<
	M extends Model<V>,
	V extends ModelView = ModelView,
> extends WidgetComponentModelView {
	componentListModel: ComponentListModel<M>;
}

export type CarouselModel<
	M extends Model<V>,
	V extends ModelView = ModelView,
> = ReadonlyModel<CarouselModelView<M>>;
