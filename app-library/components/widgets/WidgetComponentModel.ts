import { ReadonlyModel } from "@/app-library/custom-types/model/ReadonlyModel";
import { ModelInstance } from "@/app-library/custom-types/model/Model";

export type WidgetComponentModelInstance = ModelInstance;
export type WidgetComponentModel<T extends WidgetComponentModelInstance> =
	ReadonlyModel<T>;
