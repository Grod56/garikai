import { ClassName, ModelInstantiator } from "@/app/ui/Model";
import {
	ImageCardModelInstance,
	ImageCardModelInstanceIncarnation,
} from "../ImageCardModel";
import { ModelInstantiatorIncarnation } from "@/app/ui/ModelIncarnation";

const CLASS_NAME = "linked-image-card";

export interface LinkedImageCardModelInstance extends ImageCardModelInstance {
	readonly link: URL;
}

export interface LinkedImageCardModelInstantiator extends ModelInstantiator {
	instantiate({
		id,
		thumbnail,
		isFlexible,
		link,
	}: {
		id: string;
		thumbnail: string;
		isFlexible: boolean;
		link: URL;
	}): LinkedImageCardModelInstance;
}

export abstract class LinkedImageCardModelInstanceIncarnation extends ImageCardModelInstanceIncarnation {
	readonly linkedImageCardModelInstanceClassName: ClassName<
		typeof CLASS_NAME
	>;
	constructor(
		id: string,
		thumbnail: string,
		isFlexible: boolean,
		readonly link: URL
	) {
		super(id, thumbnail, isFlexible);
		this.linkedImageCardModelInstanceClassName = {
			getClassNameString: CLASS_NAME,
		};
	}
}

export abstract class LinkedImageCardModelInstantiatorIncarnation
	extends ModelInstantiatorIncarnation
	implements LinkedImageCardModelInstantiator
{
	abstract instantiate({
		id,
		thumbnail,
		isFlexible,
		link,
	}: {
		id: string;
		thumbnail: string;
		isFlexible: boolean;
		link: URL;
	}): LinkedImageCardModelInstanceIncarnation;
}

class _LinkedImageCardModelInstanceIncarnationImplementation extends LinkedImageCardModelInstanceIncarnation {
	constructor(id: string, thumbnail: string, isFlexible: boolean, link: URL) {
		super(id, thumbnail, isFlexible, link);
	}
}

class _LinkedImageCardModelInstantiatorImplementation extends LinkedImageCardModelInstantiatorIncarnation {
	instantiate({
		id,
		thumbnail,
		isFlexible,
		link,
	}: {
		id: string;
		thumbnail: string;
		isFlexible: boolean;
		link: URL;
	}): LinkedImageCardModelInstanceIncarnation {
		return new _LinkedImageCardModelInstanceIncarnationImplementation(
			id,
			thumbnail,
			isFlexible,
			link
		);
	}
}

export default new _LinkedImageCardModelInstantiatorImplementation() as LinkedImageCardModelInstantiator;
