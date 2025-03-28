import {
	ClassName,
	Model,
	ModelInstance,
	ModelInstantiator,
} from "@/app/components/Model";
import {
	ModelInstanceIncarnation,
	ModelInstantiatorIncarnation,
} from "@/app/components/ModelIncarnation";

export const CLASS_NAME = "image-card";

export interface ImageCardModelInstance extends ModelInstance {
	readonly thumbnail: string;
	readonly orientation: "horizontal" | "vertical" | "flexible";
}

export interface ImageCardModelInstantiator extends ModelInstantiator {
	instantiate({
		id,
		thumbnail,
		orientation,
	}: {
		id: string;
		thumbnail: string;
		orientation: "horizontal" | "vertical" | "flexible";
	}): ImageCardModelInstance;
}

export abstract class ImageCardModelInstanceIncarnation
	extends ModelInstanceIncarnation
	implements ImageCardModelInstance
{
	constructor(
		id: string,
		readonly thumbnail: string,
		readonly orientation: "horizontal" | "vertical" | "flexible"
	) {
		super(id);

		this.imageCardModelInstanceClassName = {
			getClassNameString: CLASS_NAME,
		};
	}

	readonly imageCardModelInstanceClassName: ClassName<typeof CLASS_NAME>;
}

export abstract class ImageCardModelInstantiatorIncarnation
	extends ModelInstantiatorIncarnation
	implements ImageCardModelInstantiator
{
	abstract instantiate({
		id,
		thumbnail,
		orientation,
	}: {
		id: string;
		thumbnail: string;
		orientation: "horizontal" | "vertical" | "flexible";
	}): ImageCardModelInstanceIncarnation;
}

class _ImageCardModelInstanceIncarnationImplementation extends ImageCardModelInstanceIncarnation {
	constructor(
		id: string,
		cardThumbnail: string,
		orientation: "horizontal" | "vertical" | "flexible"
	) {
		super(id, cardThumbnail, orientation);
	}
}

class _ImageCardModelInstantiatorImplementation extends ImageCardModelInstantiatorIncarnation {
	instantiate({
		id,
		thumbnail,
		orientation,
	}: {
		id: string;
		thumbnail: string;
		orientation: "horizontal" | "vertical" | "flexible";
	}): ImageCardModelInstanceIncarnation {
		return new _ImageCardModelInstanceIncarnationImplementation(
			id,
			thumbnail,
			orientation
		);
	}
}

export default new _ImageCardModelInstantiatorImplementation() as ImageCardModelInstantiator;
