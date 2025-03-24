import { ClassName, ModelInstance, ModelInstantiator } from "../../Model";
import {
	ModelInstanceIncarnation,
	ModelInstantiatorIncarnation,
} from "../../ModelIncarnation";

const CLASS_NAME = "main";

export interface MainModelInstance extends ModelInstance {
	readonly name: string;
}

export interface MainModelInstantiator extends ModelInstantiator {
	instantiate({ id, name }: { id: string; name: string }): MainModelInstance;
}

export abstract class MainModelInstanceIncarnation
	extends ModelInstanceIncarnation
	implements MainModelInstance
{
	constructor(
		id: string,
		readonly name: string
	) {
		super(id);
		this.mainModelInstanceClassName = { getClassNameString: CLASS_NAME };
	}
	readonly mainModelInstanceClassName: ClassName<typeof CLASS_NAME>;
}

export abstract class MainModelInstantiatorIncarnation
	extends ModelInstantiatorIncarnation
	implements MainModelInstantiator
{
	abstract instantiate({
		id,
		name,
	}: {
		id: string;
		name: string;
	}): MainModelInstanceIncarnation;
}

class _MainModelInstanceImplementation
	extends MainModelInstanceIncarnation
	implements MainModelInstance
{
	constructor(id: string, name: string) {
		super(id, name);
	}
}

class _MainModelInstantiatorImplementation extends MainModelInstantiatorIncarnation {
	instantiate({
		id,
		name,
	}: {
		id: string;
		name: string;
	}): MainModelInstanceIncarnation {
		return new _MainModelInstanceImplementation(id, name);
	}
}

export default new _MainModelInstantiatorImplementation() as MainModelInstantiator;
