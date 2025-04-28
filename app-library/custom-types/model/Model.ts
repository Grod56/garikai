export type ModelInstance = object | null;
export interface Model<T extends ModelInstance> {
	modelInstance: T;
}
