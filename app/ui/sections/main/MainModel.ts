import { ClassName, ModelInstance, ModelInstantiator } from "../../Model";
import {
	ModelInstanceIncarnation,
	ModelInstantiatorIncarnation,
} from "../../ModelIncarnation";

const CLASS_NAME = "main";

export interface MainModelInstance extends ModelInstance {}

export interface MainModelInstantiator extends ModelInstantiator {
	instantiate({ id }: { id: string }): MainModelInstance;
}

export abstract class MainModelInstanceIncarnation
	extends ModelInstanceIncarnation
	implements MainModelInstance
{
	constructor(id: string) {
		super(id);
		this.mainModelInstanceClassName = { getClassNameString: CLASS_NAME };
	}
	mainModelInstanceClassName: ClassName<typeof CLASS_NAME>;
}

export abstract class MainModelInstantiatorIncarnation
	extends ModelInstantiatorIncarnation
	implements MainModelInstantiator
{
	abstract instantiate({ id }: { id: string }): MainModelInstanceIncarnation;
}

class _MainModelInstanceImplementation
	extends MainModelInstanceIncarnation
	implements MainModelInstance
{
	constructor(readonly id: string) {
		super(id);
	}
}

class _MainModelInstantiatorImplementation extends MainModelInstantiatorIncarnation {
	instantiate({ id }: { id: string }): MainModelInstanceIncarnation {
		return new _MainModelInstanceImplementation(id);
	}
}

export default new _MainModelInstantiatorImplementation() as MainModelInstantiator;
