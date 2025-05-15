import { Model } from "@/app-library/custom-types/model/Model";

export interface WidgetComponentModelView {
	readonly customName?: string;
}
export type WidgetComponentModel<
	T extends WidgetComponentModelView = WidgetComponentModelView,
> = Model<T>;
