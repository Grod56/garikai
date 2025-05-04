import { JSX } from "react";
import { Model, ModelView } from "./model/Model";

export interface ModeledEmptyComponent<
	T extends Model<U>,
	U extends ModelView = ModelView,
> {
	({ model }: { model: T }): JSX.Element;
}

export interface ModeledContainerComponent<
	T extends Model<U>,
	U extends ModelView = ModelView,
> {
	({ model, children }: { model: T; children: React.ReactNode }): JSX.Element;
}
