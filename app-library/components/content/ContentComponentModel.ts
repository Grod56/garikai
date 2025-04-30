import { ReadonlyModel } from "@/app-library/custom-types/model/ReadonlyModel";

export interface ContentComponentModelInstance {
	readonly id: string;
}

export type ContentComponentModel<T extends ContentComponentModelInstance> =
	ReadonlyModel<T>;
