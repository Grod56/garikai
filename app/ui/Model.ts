export interface ClassName<N extends string> {
	readonly getClassNameString: N;
}

export interface Model {}

export interface ModelInstance extends Model {
	readonly id: string;
	readonly compositeClassNameString: string;
}

export interface ModelInstantiator extends Model {
	instantiate(...args: any[]): ModelInstance;
}
