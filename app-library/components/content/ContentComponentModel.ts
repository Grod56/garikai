import { ReadonlyModel } from "@/app-library/custom-types/model/ReadonlyModel";

export interface ContentComponentModelView {
	readonly id: string;
}

export type ContentComponentModel<
	T extends ContentComponentModelView = ContentComponentModelView,
> = ReadonlyModel<T>;
