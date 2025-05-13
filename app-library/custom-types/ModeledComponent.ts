import { JSX } from "react";
import { Model } from "./model/Model";

/**Encapsulates a functional modeled react component that has no children. */
export interface ModeledVoidComponent<
	M extends Model<V>,
	V extends object = object,
> {
	({ model }: { model: M }): JSX.Element;
}

/**Encapsulates a functional modeled react component that has children. */
export interface ModeledContainerComponent<
	M extends Model<V>,
	V extends object = object,
> {
	({ model, children }: { model: M; children: React.ReactNode }): JSX.Element;
}

/**Encapsulates a functional modeled react component */
export type ModeledComponent<M extends Model<V>, V extends object = object> =
	| ModeledVoidComponent<M>
	| ModeledContainerComponent<M>;
