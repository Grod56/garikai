import { Model, ModelView } from "./Model";

/**Model with unchanging model view. */
export type ReadonlyModel<T extends ModelView> = Readonly<Model<T>>;
