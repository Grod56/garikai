import {
	ClassName,
	CorporealComponentModelInstance,
	CorporealComponentModelInstantiator,
} from "@/app/components/corporeal/CorporealComponentModel";
import {
	CorporealComponentModelInstanceIncarnation,
	CorporealComponentModelInstantiatorIncarnation,
} from "../../CorporealComponentModel";

const CLASS_NAME = "embla";

export interface CarouselModelInstance
	extends CorporealComponentModelInstance {}

export interface CarouselModelInstantiator
	extends CorporealComponentModelInstantiator {
	instantiate({ id }: { id: string }): CarouselModelInstance;
}

export abstract class CarouselModelInstanceIncarnation
	extends CorporealComponentModelInstanceIncarnation
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
	extends CorporealComponentModelInstantiatorIncarnation
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
