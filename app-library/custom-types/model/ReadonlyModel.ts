import { Model, ModelView } from "./Model";

export type ReadonlyModel<T extends ModelView> = Readonly<Model<T>>;
