import { ClassName, ModelInstance, ModelInstantiator } from "../../Model";
import {
	ModelInstanceIncarnation,
	ModelInstantiatorIncarnation,
} from "../../ModelIncarnation";

const CLASS_NAME = "navbar";

export interface NavbarModelInstance extends ModelInstance {}

export interface NavbarModelInstantiator extends ModelInstantiator {
	instantiate({ id }: { id: string }): NavbarModelInstance;
}

export abstract class NavbarModelInstanceIncarnation
	extends ModelInstanceIncarnation
	implements NavbarModelInstance
{
	constructor(id: string) {
		super(id);
		this.navbarModelInstanceClassName = { getClassNameString: CLASS_NAME };
	}
	navbarModelInstanceClassName: ClassName<typeof CLASS_NAME>;
}

export abstract class NavbarModelInstantiatorIncarnation
	extends ModelInstantiatorIncarnation
	implements NavbarModelInstantiator
{
	abstract instantiate({
		id,
	}: {
		id: string;
	}): NavbarModelInstanceIncarnation;
}

class _NavbarModelInstanceImplementation extends NavbarModelInstanceIncarnation {
	constructor(readonly id: string) {
		super(id);
	}
}

class _NavbarModelInstantiatorImplementation extends NavbarModelInstantiatorIncarnation {
	instantiate({ id }: { id: string }): NavbarModelInstanceIncarnation {
		return new _NavbarModelInstanceImplementation(id);
	}
}

export default new _NavbarModelInstantiatorImplementation() as NavbarModelInstantiator;
