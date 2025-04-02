import {
	ClassName,
	CorporealComponentModelInstance,
	CorporealComponentModelInstantiator,
} from "../../CorporealComponentModel";
import {
	CorporealComponentModelInstanceIncarnation,
	CorporealComponentModelInstantiatorIncarnation,
} from "../../CorporealComponentModel";

const CLASS_NAME = "navbar";

export interface NavbarModelInstance extends CorporealComponentModelInstance {}

export interface NavbarModelInstantiator
	extends CorporealComponentModelInstantiator {
	instantiate({ id }: { id: string }): NavbarModelInstance;
}

export abstract class NavbarModelInstanceIncarnation
	extends CorporealComponentModelInstanceIncarnation
	implements NavbarModelInstance
{
	constructor(id: string) {
		super(id);
		this.navbarModelInstanceClassName = { getClassNameString: CLASS_NAME };
	}
	navbarModelInstanceClassName: ClassName<typeof CLASS_NAME>;
}

export abstract class NavbarModelInstantiatorIncarnation
	extends CorporealComponentModelInstantiatorIncarnation
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
