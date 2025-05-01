import { ReadonlyModel } from "@/app-library/custom-types/model/ReadonlyModel";

export interface WidgetComponentModelInstance {
	readonly customName?: string;
}
export type WidgetComponentModel<T extends WidgetComponentModelInstance> =
	ReadonlyModel<T>;
