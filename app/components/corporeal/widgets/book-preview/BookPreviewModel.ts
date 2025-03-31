import { ClassName, ModelInstantiator } from "@/app/components/Model";
import { ModelInstantiatorIncarnation } from "@/app/components/ModelIncarnation";
import { LinkedComponentModelInstance } from "../../../ethereal/linked-component/LinkedComponentModel";
import {
	ImageCardModelInstance,
	ImageCardModelInstanceIncarnation,
} from "../image-card/ImageCardModel";

export const CLASS_NAME = "book-preview";

export interface BookPreviewModelInstance
	extends ImageCardModelInstance,
		LinkedComponentModelInstance {
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
	extends ImageCardModelInstanceIncarnation
	implements BookPreviewModelInstance
{
	constructor(
		id: string,
		thumbnail: string,
		readonly title: string,
		readonly author: string,
		readonly link: URL
	) {
		super(
			id,
			thumbnail,
			"flexible" // TODO: Magic value
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
