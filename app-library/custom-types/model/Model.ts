/**Encapsulates what a client sees/the current state of the model. */
export type ModelView = object | null;

/**Encapsulates the essence of any ontological item
 * (e.g. component, repository, database table record, etc.). */
export interface Model<T extends ModelView> {
	modelView: T;
}
