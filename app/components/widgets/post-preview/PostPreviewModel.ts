import { ClassName, ModelInstantiator } from "@/app/components/Model";
import {
	LinkedImageCardModelInstance,
	LinkedImageCardModelInstanceIncarnation,
} from "../image-card/linked-image-card/LinkedImageCardModel";
import { ModelInstantiatorIncarnation } from "@/app/components/ModelIncarnation";

export const CLASS_NAME = "post-preview";

export interface PostPreviewModelInstance extends LinkedImageCardModelInstance {
	readonly thumbnail: string;
	readonly title: string;
	readonly snippet: string;
	readonly byline: string;
	readonly link: URL;
}

export interface PostPreviewModelInstantiator extends ModelInstantiator {
	instantiate({
		id,
		thumbnail,
		title,
		snippet,
		author,
		publishedDate,
		link,
		isFlexible,
	}: {
		id: string;
		thumbnail: string;
		title: string;
		snippet: string;
		author: string;
		publishedDate: Date;
		link: URL;
		isFlexible: boolean;
	}): PostPreviewModelInstance;
}

// TODO: Refine relationship definitions in the future
export abstract class PostPreviewModelInstanceIncarnation
	extends LinkedImageCardModelInstanceIncarnation
	implements PostPreviewModelInstance
{
	readonly postPreviewModelInstanceClassName: ClassName<typeof CLASS_NAME>;
	constructor(
		id: string,
		readonly thumbnail: string,
		readonly title: string,
		readonly snippet: string,
		readonly postAuthor: string,
		readonly postDate: Date,
		link: URL,
		isFlexible: boolean //TODO: Revisit
	) {
		super(id, thumbnail, isFlexible, link);
		this.postPreviewModelInstanceClassName = {
			getClassNameString: CLASS_NAME,
		};
	}
	get byline(): string {
		return `${this.postAuthor} | ${this.postDate.toLocaleDateString(
			"en-US",
			{ year: "numeric", month: "long", day: "numeric" }
		)}`;
	}
}

export abstract class PostPreviewModelInstantiatorIncarnation
	extends ModelInstantiatorIncarnation
	implements PostPreviewModelInstantiator
{
	abstract instantiate({
		id,
		thumbnail,
		title,
		snippet,
		author,
		publishedDate,
		link,
		isFlexible,
	}: {
		id: string;
		thumbnail: string;
		title: string;
		snippet: string;
		author: string;
		publishedDate: Date;
		link: URL;
		isFlexible: boolean;
	}): PostPreviewModelInstanceIncarnation;
}

class _PostPreviewModelInstanceIncarnationImplementation extends PostPreviewModelInstanceIncarnation {
	constructor(
		id: string,
		postThumbnailSource: string,
		postTitle: string,
		snippet: string,
		postAuthor: string,
		postDate: Date,
		postURL: URL,
		isFlexible: boolean
	) {
		super(
			id,
			postThumbnailSource,
			postTitle,
			snippet,
			postAuthor,
			postDate,
			postURL,
			isFlexible
		);
	}
}

class _PostPreviewModelInstantiatorIncarnationImplementation extends PostPreviewModelInstantiatorIncarnation {
	instantiate({
		id,
		thumbnail,
		title,
		snippet,
		author,
		publishedDate,
		link,
		isFlexible,
	}: {
		id: string;
		thumbnail: string;
		title: string;
		snippet: string;
		author: string;
		publishedDate: Date;
		link: URL;
		isFlexible: boolean;
	}): PostPreviewModelInstanceIncarnation {
		return new _PostPreviewModelInstanceIncarnationImplementation(
			id,
			thumbnail,
			title,
			snippet,
			author,
			publishedDate,
			link,
			isFlexible
		);
	}
}

export default new _PostPreviewModelInstantiatorIncarnationImplementation() as PostPreviewModelInstantiator;
