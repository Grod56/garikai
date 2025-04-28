import { Model, ModelInstance } from "@/app-library/custom-types/model/Model";

export type WidgetComponentModelInstance = ModelInstance;
export type WidgetComponentModel<T extends WidgetComponentModelInstance> =
	Model<T>;
