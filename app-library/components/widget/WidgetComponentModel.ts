import { ReadonlyModel as Model } from "@/app-library/custom-types/model/ReadonlyModel";

export interface WidgetComponentModelView {
	readonly customName?: string;
}
export type WidgetComponentModel<
	T extends WidgetComponentModelView = WidgetComponentModelView,
> = Model<T>;
