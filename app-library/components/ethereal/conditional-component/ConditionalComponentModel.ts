import { ReadonlyModel } from "@/app-library/custom-types/model/ReadonlyModel";
import { JSX } from "react";

export type Component = JSX.Element;

export interface ConditionalComponentModelView<C> {
	condition: C;
	components: Map<C, () => Component>;
}

export type ConditionalComponentModel<C> = ReadonlyModel<
	ConditionalComponentModelView<C>
>;
