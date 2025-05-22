import { JSX } from "react";
import { Model, ModelView } from "@mvc-react/mvc";

/**Encapsulates a functional react component which is patterned
 * after a {@link Model}, and has no children. */
export interface ModeledVoidComponent<
	M extends Model<V>,
	V extends ModelView = ModelView,
> {
	({ model }: { model: M }): JSX.Element;
}

/**Encapsulates a functional react component which is patterned
 * after a {@link Model}, and has children. */
export interface ModeledContainerComponent<
	M extends Model<V>,
	V extends ModelView = ModelView,
> {
	({ model, children }: { model: M; children: React.ReactNode }): JSX.Element;
}

/**Encapsulates a functional react component which is patterned
 * after a {@link Model} */
export type ModeledComponent<
	M extends Model<V>,
	V extends ModelView = ModelView,
> = ModeledVoidComponent<M> | ModeledContainerComponent<M>;
