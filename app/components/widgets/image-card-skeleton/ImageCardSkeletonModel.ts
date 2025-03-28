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

export interface ImageCardSkeletonModelInstance extends ModelInstance {
	readonly orientation: "horizontal" | "vertical" | "flexible";
}

export interface ImageCardSkeletonModelInstantiator extends ModelInstantiator {
	instantiate({
		id,
		orientation,
	}: {
		id: string;
		orientation: "horizontal" | "vertical" | "flexible";
	}): ImageCardSkeletonModelInstance;
}

export abstract class ImageCardSkeletonModelInstanceIncarnation
	extends ModelInstanceIncarnation
	implements ImageCardSkeletonModelInstance
{
	constructor(
		id: string,
		readonly orientation: "horizontal" | "vertical" | "flexible"
	) {
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
		orientation,
	}: {
		id: string;
		orientation: "horizontal" | "vertical" | "flexible";
	}): ImageCardSkeletonModelInstanceIncarnation;
}

class _ImageCardSkeletonModelInstanceIncarnationImplementation extends ImageCardSkeletonModelInstanceIncarnation {
	constructor(
		id: string,
		orientation: "horizontal" | "vertical" | "flexible"
	) {
		super(id, orientation);
	}
}

class _ImageCardSkeletonModelInstantiatorIncarnationImplementation extends ImageCardSkeletonModelInstantiatorIncarnation {
	instantiate({
		id,
		orientation,
	}: {
		id: string;
		orientation: "horizontal" | "vertical" | "flexible";
	}): ImageCardSkeletonModelInstanceIncarnation {
		return new _ImageCardSkeletonModelInstanceIncarnationImplementation(
			id,
			orientation
		);
	}
}

export default new _ImageCardSkeletonModelInstantiatorIncarnationImplementation() as ImageCardSkeletonModelInstantiator;
