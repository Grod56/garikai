import { Model } from "@/app-library/custom-types/model/Model";

export interface ContentComponentModelInstance {
	readonly id: string;
}

export type ContentComponentModel<T extends ContentComponentModelInstance> =
	Model<T>;
