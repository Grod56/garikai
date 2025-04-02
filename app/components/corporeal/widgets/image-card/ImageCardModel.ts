import {
	ClassName,
	CorporealComponentModelInstance,
	CorporealComponentModelInstantiator,
} from "@/app/components/corporeal/CorporealComponentModel";
import {
	CorporealComponentModelInstanceIncarnation,
	CorporealComponentModelInstantiatorIncarnation,
} from "../../CorporealComponentModel";
import { Image } from "@/app/types/Image";

export const CLASS_NAME = "image-card";

export interface ImageCardModelInstance
	extends CorporealComponentModelInstance {
	readonly thumbnail: Image;
	readonly orientation: "horizontal" | "vertical" | "flexible";
}

export interface ImageCardModelInstantiator
	extends CorporealComponentModelInstantiator {
	instantiate({
		id,
		thumbnail,
		orientation,
	}: {
		id: string;
		thumbnail: Image;
		orientation: "horizontal" | "vertical" | "flexible";
	}): ImageCardModelInstance;
}

export abstract class ImageCardModelInstanceIncarnation
	extends CorporealComponentModelInstanceIncarnation
	implements ImageCardModelInstance
{
	constructor(
		id: string,
		readonly thumbnail: Image,
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
	extends CorporealComponentModelInstantiatorIncarnation
	implements ImageCardModelInstantiator
{
	abstract instantiate({
		id,
		thumbnail,
		orientation,
	}: {
		id: string;
		thumbnail: Image;
		orientation: "horizontal" | "vertical" | "flexible";
	}): ImageCardModelInstanceIncarnation;
}

class _ImageCardModelInstanceIncarnationImplementation extends ImageCardModelInstanceIncarnation {
	constructor(
		id: string,
		thumbnail: Image,
		orientation: "horizontal" | "vertical" | "flexible"
	) {
		super(id, thumbnail, orientation);
	}
}

class _ImageCardModelInstantiatorImplementation extends ImageCardModelInstantiatorIncarnation {
	instantiate({
		id,
		thumbnail,
		orientation,
	}: {
		id: string;
		thumbnail: Image;
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
