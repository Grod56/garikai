import {
	ClassName,
	ModelInstance,
	ModelInstantiator,
} from "@/app/components/Model";
import {
	ModelInstanceIncarnation,
	ModelInstantiatorIncarnation,
} from "@/app/components/ModelIncarnation";

export const CLASS_NAME = "art-image-skeleton";

export interface ArtImageSkeletonModelInstance extends ModelInstance {}

export interface ArtImageSkeletonModelInstantiator extends ModelInstantiator {
	instantiate({ id }: { id: string }): ArtImageSkeletonModelInstance;
}

export abstract class ArtImageSkeletonModelInstanceIncarnation
	extends ModelInstanceIncarnation
	implements ArtImageSkeletonModelInstance
{
	constructor(id: string) {
		super(id);
		this.artImageSkeletonModelInstanceClassName = {
			getClassNameString: CLASS_NAME,
		};
	}
	readonly artImageSkeletonModelInstanceClassName: ClassName<
		typeof CLASS_NAME
	>;
}

export abstract class ArtImageSkeletonModelInstantiatorIncarnation
	extends ModelInstantiatorIncarnation
	implements ArtImageSkeletonModelInstantiator
{
	abstract instantiate({
		id,
	}: {
		id: string;
	}): ArtImageSkeletonModelInstanceIncarnation;
}

class _ArtImageSkeletonModelInstanceIncarnationImplementation extends ArtImageSkeletonModelInstanceIncarnation {
	constructor(id: string) {
		super(id);
	}
}

class _ArtImageSkeletonModelInstantiatorIncarnationImplementation extends ArtImageSkeletonModelInstantiatorIncarnation {
	instantiate({
		id,
	}: {
		id: string;
	}): ArtImageSkeletonModelInstanceIncarnation {
		return new _ArtImageSkeletonModelInstanceIncarnationImplementation(id);
	}
}

export default new _ArtImageSkeletonModelInstantiatorIncarnationImplementation() as ArtImageSkeletonModelInstantiator;
