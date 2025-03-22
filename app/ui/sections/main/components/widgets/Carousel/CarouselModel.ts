import { ClassName, ModelInstance, ModelInstantiator } from "@/app/ui/Model";
import {
	ModelInstanceIncarnation,
	ModelInstantiatorIncarnation,
} from "@/app/ui/ModelIncarnation";

const CLASS_NAME = "embla";

export interface CarouselModelInstance extends ModelInstance {}

export interface CarouselModelInstantiator extends ModelInstantiator {
	instantiate({ id }: { id: string }): CarouselModelInstance;
}

export abstract class CarouselModelInstanceIncarnation
	extends ModelInstanceIncarnation
	implements CarouselModelInstance
{
	constructor(id: string) {
		super(id);
		this.carouselModelInstanceClassName = {
			getClassNameString: CLASS_NAME,
		};
	}
	readonly carouselModelInstanceClassName: ClassName<typeof CLASS_NAME>;
}

export abstract class CarouselModelInstantiatorIncarnation
	extends ModelInstantiatorIncarnation
	implements CarouselModelInstantiator
{
	abstract instantiate({
		id,
	}: {
		id: string;
	}): CarouselModelInstanceIncarnation;
}

class _CarouselModelInstanceIncarnationImplementation extends CarouselModelInstanceIncarnation {
	constructor(id: string) {
		super(id);
	}
}

class _CarouselModelInstantiatorIncarnationImplementation extends CarouselModelInstantiatorIncarnation {
	instantiate({ id }: { id: string }): CarouselModelInstanceIncarnation {
		return new _CarouselModelInstanceIncarnationImplementation(id);
	}
}

export default new _CarouselModelInstantiatorIncarnationImplementation() as CarouselModelInstantiator;
