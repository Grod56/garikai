import {
	ClassName,
	CorporealComponentModelInstance,
	CorporealComponentModelInstantiator,
} from "../../CorporealComponentModel";
import {
	CorporealComponentModelInstanceIncarnation,
	CorporealComponentModelInstantiatorIncarnation,
} from "../../CorporealComponentModel";

const CLASS_NAME = "main";

export interface MainModelInstance extends CorporealComponentModelInstance {
	readonly name: string;
}

export interface MainModelInstantiator
	extends CorporealComponentModelInstantiator {
	instantiate({ id, name }: { id: string; name: string }): MainModelInstance;
}

export abstract class MainModelInstanceIncarnation
	extends CorporealComponentModelInstanceIncarnation
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
	extends CorporealComponentModelInstantiatorIncarnation
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
