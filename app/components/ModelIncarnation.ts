import { ClassName, ModelInstance, ModelInstantiator } from "./Model";
import { compositeClassNameResolver as resolver } from "../utilities/general";

export abstract class ModelInstanceIncarnation implements ModelInstance {
	constructor(readonly id: string) {}
	get compositeClassNameString(): string {
		return resolver(
			...Object.values(this)
				.filter((property: any) => property.getClassNameString)
				.map(
					(className: ClassName<string>) =>
						className.getClassNameString
				)
		);
	}
}

export abstract class ModelInstantiatorIncarnation
	implements ModelInstantiator
{
	abstract instantiate(...args: any[]): ModelInstanceIncarnation;
}
