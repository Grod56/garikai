import { ClassName, ModelInstance, ModelInstantiator } from "@/app/ui/Model";
import {
	ModelInstanceIncarnation,
	ModelInstantiatorIncarnation,
} from "@/app/ui/ModelIncarnation";

export const CLASS_NAME: string = "flexible-container";

export interface FlexibleContainerModelInstance extends ModelInstance {}

export interface FlexibleContainerModelInstantiator extends ModelInstantiator {
	instantiate({ id }: { id: string }): FlexibleContainerModelInstance;
}

export abstract class FlexibleContainerModelInstanceIncarnation
	extends ModelInstanceIncarnation
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
	extends ModelInstantiatorIncarnation
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
