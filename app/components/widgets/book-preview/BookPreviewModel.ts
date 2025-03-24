import {
	ClassName,
	Model,
	ModelInstance,
	ModelInstantiator,
} from "@/app/components/Model";
import {
	LinkedImageCardModelInstance,
	LinkedImageCardModelInstanceIncarnation,
} from "../image-card/linked-image-card/LinkedImageCardModel";
import {
	ModelInstanceIncarnation,
	ModelInstantiatorIncarnation,
} from "@/app/components/ModelIncarnation";

export const CLASS_NAME = "book-preview";

export interface BookPreviewModelInstance extends LinkedImageCardModelInstance {
	readonly title: string;
	readonly author: string;
	readonly link: URL;
	readonly thumbnail: string;
}

export interface BookPreviewModelInstantiator extends ModelInstantiator {
	instantiate({
		id,
		thumbnail,
		title,
		author,
		link,
	}: {
		id: string;
		thumbnail: string;
		title: string;
		author: string;
		link: URL;
	}): BookPreviewModelInstance;
}

export abstract class BookPreviewModelInstanceIncarnation
	extends LinkedImageCardModelInstanceIncarnation
	implements BookPreviewModelInstance
{
	constructor(
		id: string,
		readonly thumbnail: string,
		readonly title: string,
		readonly author: string,
		readonly link: URL
	) {
		super(
			id,
			thumbnail,
			true, // TODO: Magic value
			link
		);
		this.bookPreviewModelInstanceClassName = {
			getClassNameString: CLASS_NAME,
		};
	}
	readonly bookPreviewModelInstanceClassName: ClassName<typeof CLASS_NAME>;
}

export abstract class BookPreviewModelInstantiatorIncarnation
	extends ModelInstantiatorIncarnation
	implements BookPreviewModelInstantiator
{
	abstract instantiate({
		id,
		thumbnail,
		title,
		author,
		link,
	}: {
		id: string;
		thumbnail: string;
		title: string;
		author: string;
		link: URL;
	}): BookPreviewModelInstanceIncarnation;
}

class _BookPreviewModelInstanceIncarnationImplementation extends BookPreviewModelInstanceIncarnation {
	constructor(
		id: string,
		thumbnail: string,
		title: string,
		author: string,
		link: URL
	) {
		super(id, thumbnail, title, author, link);
	}
}

class _BookPreviewModelInstantiatorIncarnationImplementation extends BookPreviewModelInstantiatorIncarnation {
	instantiate({
		id,
		thumbnail,
		title,
		author,
		link,
	}: {
		id: string;
		thumbnail: string;
		title: string;
		author: string;
		link: URL;
	}): BookPreviewModelInstanceIncarnation {
		return new _BookPreviewModelInstanceIncarnationImplementation(
			id,
			thumbnail,
			title,
			author,
			link
		);
	}
}

export default new _BookPreviewModelInstantiatorIncarnationImplementation() as BookPreviewModelInstantiator;
