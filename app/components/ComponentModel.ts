export interface ComponentModelInstance {}
export interface ComponentModelActions {}

export interface ReadonlyComponentModel {
	readonly modelInstance: ComponentModelInstance;
}
export interface ComponentModel extends ReadonlyComponentModel {
	readonly modelActions: ComponentModelActions;
}
