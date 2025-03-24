import {
	ClassName,
	ModelInstance,
	ModelInstantiator,
} from "@/app/components/Model";
import {
	ModelInstanceIncarnation,
	ModelInstantiatorIncarnation,
} from "@/app/components/ModelIncarnation";

export const CLASS_NAME = "image-card-skeleton";

export interface ImageCardSkeletonModelInstance extends ModelInstance {}

export interface ImageCardSkeletonModelInstantiator extends ModelInstantiator {
	instantiate({ id }: { id: string }): ImageCardSkeletonModelInstance;
}

export abstract class ImageCardSkeletonModelInstanceIncarnation
	extends ModelInstanceIncarnation
	implements ImageCardSkeletonModelInstance
{
	constructor(id: string) {
		super(id);
		this.imageCardSkeletonModelInstanceClassName = {
			getClassNameString: CLASS_NAME,
		};
	}
	readonly imageCardSkeletonModelInstanceClassName: ClassName<
		typeof CLASS_NAME
	>;
}

export abstract class ImageCardSkeletonModelInstantiatorIncarnation
	extends ModelInstantiatorIncarnation
	implements ImageCardSkeletonModelInstantiator
{
	abstract instantiate({
		id,
	}: {
		id: string;
	}): ImageCardSkeletonModelInstanceIncarnation;
}

class _ImageCardSkeletonModelInstanceIncarnationImplementation extends ImageCardSkeletonModelInstanceIncarnation {
	constructor(id: string) {
		super(id);
	}
}

class _ImageCardSkeletonModelInstantiatorIncarnationImplementation extends ImageCardSkeletonModelInstantiatorIncarnation {
	instantiate({
		id,
	}: {
		id: string;
	}): ImageCardSkeletonModelInstanceIncarnation {
		return new _ImageCardSkeletonModelInstanceIncarnationImplementation(id);
	}
}

export default new _ImageCardSkeletonModelInstantiatorIncarnationImplementation() as ImageCardSkeletonModelInstantiator;
