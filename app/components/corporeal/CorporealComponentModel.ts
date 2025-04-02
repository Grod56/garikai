import { compositeClassNameResolver as resolver } from "@/app/utilities/general";
import { ComponentModelInstance } from "../ComponentModel";

export interface ClassName<N extends string> {
	readonly getClassNameString: N;
}

export interface CorporealComponentModelInstance
	extends ComponentModelInstance {
	readonly id: string;
	readonly compositeClassNameString: string;
}

export interface CorporealComponentModelInstantiator {
	instantiate(...args: any[]): CorporealComponentModelInstance;
}
export abstract class CorporealComponentModelInstanceIncarnation
	implements CorporealComponentModelInstance
{
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

export abstract class CorporealComponentModelInstantiatorIncarnation
	implements CorporealComponentModelInstantiator
{
	abstract instantiate(
		...args: any[]
	): CorporealComponentModelInstanceIncarnation;
}
