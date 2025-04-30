import { Model, ModelInstance } from "./Model";

export type ReadonlyModel<T extends ModelInstance> = Readonly<Model<T>>;
