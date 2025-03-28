import { ClassName, ModelInstantiator } from "@/app/components/Model";
import {
	ImageCardModelInstance,
	ImageCardModelInstanceIncarnation,
} from "../ImageCardModel";
import { ModelInstantiatorIncarnation } from "@/app/components/ModelIncarnation";

const CLASS_NAME = "linked-image-card";

export interface LinkedImageCardModelInstance extends ImageCardModelInstance {
	readonly link: URL;
}

export interface LinkedImageCardModelInstantiator extends ModelInstantiator {
	instantiate({
		id,
		thumbnail,
		orientation,
		link,
	}: {
		id: string;
		thumbnail: string;
		orientation: "horizontal" | "vertical" | "flexible";
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
		orientation: "horizontal" | "vertical" | "flexible",
		readonly link: URL
	) {
		super(id, thumbnail, orientation);
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
		orientation,
		link,
	}: {
		id: string;
		thumbnail: string;
		orientation: "horizontal" | "vertical" | "flexible";
		link: URL;
	}): LinkedImageCardModelInstanceIncarnation;
}

class _LinkedImageCardModelInstanceIncarnationImplementation extends LinkedImageCardModelInstanceIncarnation {
	constructor(
		id: string,
		thumbnail: string,
		orientation: "horizontal" | "vertical" | "flexible",
		link: URL
	) {
		super(id, thumbnail, orientation, link);
	}
}

class _LinkedImageCardModelInstantiatorImplementation extends LinkedImageCardModelInstantiatorIncarnation {
	instantiate({
		id,
		thumbnail,
		orientation,
		link,
	}: {
		id: string;
		thumbnail: string;
		orientation: "horizontal" | "vertical" | "flexible";
		link: URL;
	}): LinkedImageCardModelInstanceIncarnation {
		return new _LinkedImageCardModelInstanceIncarnationImplementation(
			id,
			thumbnail,
			orientation,
			link
		);
	}
}

export default new _LinkedImageCardModelInstantiatorImplementation() as LinkedImageCardModelInstantiator;
