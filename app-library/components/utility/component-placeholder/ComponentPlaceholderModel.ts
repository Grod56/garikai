import { Model } from "@/app-library/custom-types/model/Model";
import { ReadonlyModel } from "@/app-library/custom-types/model/ReadonlyModel";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { JSX } from "react";

export type PlaceholderComponent = () => JSX.Element;
export type PlaceholderedComponentModel<
	M extends Model<V>,
	V extends object = object,
> = M | undefined;

export interface ComponentPlaceholderModelView<
	M extends Model<V>,
	V extends object = object,
> {
	placeholderedComponentModel: PlaceholderedComponentModel<M>;
	PlaceholderedComponent: ModeledVoidComponent<M>;
	PlaceholderComponent: PlaceholderComponent;
}

export type ComponentPlaceholderModel<
	M extends Model<V>,
	V extends object = object,
> = ReadonlyModel<ComponentPlaceholderModelView<M>>;
