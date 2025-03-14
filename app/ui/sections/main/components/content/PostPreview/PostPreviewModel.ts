import { ClassName, ModelInstance, ModelInstantiator } from "@/app/ui/Model";
import { LinkedImageCardModelInstance, LinkedImageCardModelInstanceIncarnation } from "../../widgets/ImageCard/LinkedImageCard/LinkedImageCardModel";
import { ModelInstanceIncarnation, ModelInstantiatorIncarnation } from "@/app/ui/ModelIncarnation";

export const CLASS_NAME = 'post-preview';


export interface PostPreviewModelInstance extends ModelInstance, LinkedImageCardModelInstance {
    readonly postPreviewModelInstanceClassName: ClassName<typeof CLASS_NAME>;
    readonly postThumbnailSource: string;
    readonly postTitle: string;
    readonly postText: string;
    readonly postByline: string;
    readonly postAuthor: string;
    readonly postDate: Date;
    readonly postURL: URL;
    readonly flexible: 'true' | 'false';
}

export interface PostPreviewModelInstantiator extends ModelInstantiator {
    instantiate(
        id: string,
        postThumbnailSource: string,
        postTitle: string,
        postText: string,
        postAuthor: string,
        postDate: Date,
        postURL: URL,
        isFlexible: boolean
    ): PostPreviewModelInstance;
}

// TODO: Refine relationship definitions in the future
export abstract class PostPreviewModelInstanceIncarnation extends LinkedImageCardModelInstanceIncarnation implements PostPreviewModelInstance {
    readonly postPreviewModelInstanceClassName: ClassName<typeof CLASS_NAME>;
    constructor(
        id: string,
        readonly postThumbnailSource: string,
        readonly postTitle: string,
        readonly postText: string,
        readonly postAuthor: string,
        readonly postDate: Date,
        readonly postURL: URL,
        isFlexible: boolean //TODO: Revisit
    ) {
        super(id, postThumbnailSource, isFlexible, postURL);
        this.postPreviewModelInstanceClassName = { getClassNameString: CLASS_NAME };
    }
    get postByline(): string {
        return `${this.postAuthor} | ${this.postDate.toLocaleDateString(
                'en-US', {year: 'numeric', month: 'long', day: 'numeric' }
        )}`
    }
}

export abstract class PostPreviewModelInstantiatorIncarnation extends ModelInstantiatorIncarnation implements PostPreviewModelInstantiator {
    abstract instantiate(
        id: string,
        postThumbnailSource: string,
        postTitle: string,
        postText: string,
        postAuthor: string,
        postDate: Date,
        postURL: URL,
        isFlexible: boolean
    ): PostPreviewModelInstanceIncarnation;
}

class _PostPreviewModelInstanceIncarnationImplementation extends PostPreviewModelInstanceIncarnation {
    constructor(
        id: string,
        postThumbnailSource: string,
        postTitle: string,
        postText: string,
        postAuthor: string,
        postDate: Date,
        postURL: URL,
        isFlexible: boolean
    ){ 
        super(
            id,
            postThumbnailSource,
            postTitle,
            postText,
            postAuthor,
            postDate,
            postURL,
            isFlexible
        );
    }
}

export class PostPreviewModelInstantiatorIncarnationImplementation extends PostPreviewModelInstantiatorIncarnation {
    instantiate(
        id: string,
        postThumbnailSource: string,
        postTitle: string,
        postText: string,
        postAuthor: string,
        postDate: Date,
        postURL: URL,
        isFlexible: boolean
    ): PostPreviewModelInstanceIncarnation {
        return new _PostPreviewModelInstanceIncarnationImplementation(
            id,
            postThumbnailSource,
            postTitle,
            postText,
            postAuthor,
            postDate,
            postURL,
            isFlexible
        );
    }
}