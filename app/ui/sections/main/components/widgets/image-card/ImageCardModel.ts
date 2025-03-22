import {
	ClassName,
	Model,
	ModelInstance,
	ModelInstantiator,
} from "@/app/ui/Model";
import {
	ModelInstanceIncarnation,
	ModelInstantiatorIncarnation,
} from "@/app/ui/ModelIncarnation";

export const CLASS_NAME = "image-card";

export interface ImageCardModelInstance extends ModelInstance {
	readonly thumbnail: string;
	readonly flexible: "true" | "false";
}

export interface ImageCardModelInstantiator extends ModelInstantiator {
	instantiate({
		id,
		thumbnail,
		isFlexible,
	}: {
		id: string;
		thumbnail: string;
		isFlexible: boolean;
	}): ImageCardModelInstance;
}

export abstract class ImageCardModelInstanceIncarnation
	extends ModelInstanceIncarnation
	implements ImageCardModelInstance
{
	constructor(
		id: string,
		readonly thumbnail: string,
		private readonly isFlexible: boolean
	) {
		super(id);

		this.imageCardModelInstanceClassName = {
			getClassNameString: CLASS_NAME,
		};
	}

	readonly imageCardModelInstanceClassName: ClassName<typeof CLASS_NAME>;
	get flexible(): "true" | "false" {
		return `${this.isFlexible}`;
	}
}

export abstract class ImageCardModelInstantiatorIncarnation
	extends ModelInstantiatorIncarnation
	implements ImageCardModelInstantiator
{
	abstract instantiate({
		id,
		thumbnail,
		isFlexible,
	}: {
		id: string;
		thumbnail: string;
		isFlexible: boolean;
	}): ImageCardModelInstanceIncarnation;
}

class _ImageCardModelInstanceIncarnationImplementation extends ImageCardModelInstanceIncarnation {
	constructor(id: string, cardThumbnail: string, isFlexible: boolean) {
		super(id, cardThumbnail, isFlexible);
	}
}

class _ImageCardModelInstantiatorImplementation extends ImageCardModelInstantiatorIncarnation {
	instantiate({
		id,
		thumbnail,
		isFlexible,
	}: {
		id: string;
		thumbnail: string;
		isFlexible: boolean;
	}): ImageCardModelInstanceIncarnation {
		return new _ImageCardModelInstanceIncarnationImplementation(
			id,
			thumbnail,
			isFlexible
		);
	}
}

export default new _ImageCardModelInstantiatorImplementation() as ImageCardModelInstantiator;
