import {
	ClassName,
	CorporealComponentModelInstance,
	CorporealComponentModelInstantiator,
} from "@/app/components/corporeal/CorporealComponentModel";
import {
	CorporealComponentModelInstanceIncarnation,
	CorporealComponentModelInstantiatorIncarnation,
} from "../../CorporealComponentModel";

export const CLASS_NAME: string = "flexible-container";

export interface FlexibleContainerModelInstance
	extends CorporealComponentModelInstance {}

export interface FlexibleContainerModelInstantiator
	extends CorporealComponentModelInstantiator {
	instantiate({ id }: { id: string }): FlexibleContainerModelInstance;
}

export abstract class FlexibleContainerModelInstanceIncarnation
	extends CorporealComponentModelInstanceIncarnation
	implements FlexibleContainerModelInstance
{
	constructor(id: string) {
		super(id);
		this.flexibleContainerModelInstanceClassName = {
			getClassNameString: CLASS_NAME,
		};
	}
	readonly flexibleContainerModelInstanceClassName: ClassName<
		typeof CLASS_NAME
	>;
}

export abstract class FlexibleContainerModelInstantiatorIncarnation
	extends CorporealComponentModelInstantiatorIncarnation
	implements FlexibleContainerModelInstantiator
{
	abstract instantiate({
		id,
	}: {
		id: string;
	}): FlexibleContainerModelInstanceIncarnation;
}

class _FlexibleContainerModelInstanceIncarnationImplementation extends FlexibleContainerModelInstanceIncarnation {
	constructor(id: string) {
		super(id);
	}
}

class _FlexibleContainerModelInstantiatorIncarnationImplementation extends FlexibleContainerModelInstantiatorIncarnation {
	instantiate({
		id,
	}: {
		id: string;
	}): FlexibleContainerModelInstanceIncarnation {
		return new _FlexibleContainerModelInstanceIncarnationImplementation(id);
	}
}

export default new _FlexibleContainerModelInstantiatorIncarnationImplementation() as FlexibleContainerModelInstantiator;
