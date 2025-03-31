import { ClassName, ModelInstantiator } from "@/app/components/Model";
import { ModelInstantiatorIncarnation } from "@/app/components/ModelIncarnation";
import {
	ImageCardModelInstance,
	ImageCardModelInstanceIncarnation,
} from "../image-card/ImageCardModel";
import { LinkedComponentModelInstance } from "@/app/components/ethereal/linked-component/LinkedComponentModel";

export const CLASS_NAME = "post-preview";

export interface PostPreviewModelInstance
	extends ImageCardModelInstance,
		LinkedComponentModelInstance {
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
		orientation,
	}: {
		id: string;
		thumbnail: string;
		title: string;
		snippet: string;
		author: string;
		publishedDate: Date;
		link: URL;
		orientation: "horizontal" | "vertical" | "flexible";
	}): PostPreviewModelInstance;
}

// TODO: Refine relationship definitions in the future
export abstract class PostPreviewModelInstanceIncarnation
	extends ImageCardModelInstanceIncarnation
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
		readonly link: URL,
		orientation: "horizontal" | "vertical" | "flexible" //TODO: Revisit
	) {
		super(id, thumbnail, orientation);
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
		orientation,
	}: {
		id: string;
		thumbnail: string;
		title: string;
		snippet: string;
		author: string;
		publishedDate: Date;
		link: URL;
		orientation: "horizontal" | "vertical" | "flexible";
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
		orientation: "horizontal" | "vertical" | "flexible"
	) {
		super(
			id,
			postThumbnailSource,
			postTitle,
			snippet,
			postAuthor,
			postDate,
			postURL,
			orientation
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
		orientation,
	}: {
		id: string;
		thumbnail: string;
		title: string;
		snippet: string;
		author: string;
		publishedDate: Date;
		link: URL;
		orientation: "horizontal" | "vertical" | "flexible";
	}): PostPreviewModelInstanceIncarnation {
		return new _PostPreviewModelInstanceIncarnationImplementation(
			id,
			thumbnail,
			title,
			snippet,
			author,
			publishedDate,
			link,
			orientation
		);
	}
}

export default new _PostPreviewModelInstantiatorIncarnationImplementation() as PostPreviewModelInstantiator;
