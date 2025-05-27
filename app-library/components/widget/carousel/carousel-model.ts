import { Model, ModelView, ReadonlyModel } from "@mvc-react/mvc";
import { WidgetComponentModelView } from "../widget-model";
import { ComponentListModel } from "@mvc-react/components";

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
