export type ModelView = object | null;
export interface Model<T extends ModelView> {
	modelView: T;
}
