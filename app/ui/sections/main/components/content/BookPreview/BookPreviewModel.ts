import { ClassName, Model, ModelInstance, ModelInstantiator } from "@/app/ui/Model";
import { LinkedImageCardModelInstance, LinkedImageCardModelInstanceIncarnation } from "../../widgets/ImageCard/LinkedImageCard/LinkedImageCardModel";
import { ModelInstanceIncarnation, ModelInstantiatorIncarnation } from "@/app/ui/ModelIncarnation";

export const CLASS_NAME = 'book-preview';

export interface BookPreviewModelInstance extends ModelInstance, LinkedImageCardModelInstance {
    readonly bookPreviewModelInstanceClassName: ClassName<typeof CLASS_NAME>
    readonly thumbnailSourceURLString: string;
    readonly title: string;
    readonly author: string;
    readonly bookSourceURL: URL;
}

export interface BookPreviewModelInstantiator extends ModelInstantiator {
    instantiate(id: string, thumbnailSourceURL: string, title: string, author: string, bookSourceURL: URL): BookPreviewModelInstance;
}

export abstract class BookPreviewModelInstanceIncarnation extends LinkedImageCardModelInstanceIncarnation implements BookPreviewModelInstance {
    constructor(
        id: string,
        readonly thumbnailSourceURLString: string,
        readonly title: string,
        readonly author: string,
        readonly bookSourceURL: URL
    ) {
        super(
            id,
            thumbnailSourceURLString,
            true, // TODO: Magic value
            bookSourceURL
        );
        this.bookPreviewModelInstanceClassName = { getClassNameString: CLASS_NAME }
    }
    bookPreviewModelInstanceClassName: ClassName<typeof CLASS_NAME>;
}

export abstract class BookPreviewModelInstantiatorIncarnation extends ModelInstantiatorIncarnation implements BookPreviewModelInstantiator {
    abstract instantiate(id: string, thumbnailSourceURL: string, title: string, author: string, bookSourceURL: URL): BookPreviewModelInstanceIncarnation;
}

class _BookPreviewModelInstanceIncarnationImplementation extends BookPreviewModelInstanceIncarnation {
    constructor(
        id: string,
        thumbnailSourceURLString: string,
        title: string,
        author: string,
        bookSourceURL: URL
    ){ 
        super(id, thumbnailSourceURLString, title, author, bookSourceURL);
    }
}

export class BookPreviewModelInstantiatorIncarnationImplementation extends BookPreviewModelInstantiatorIncarnation {
    instantiate(id: string, thumbnailSourceURL: string, title: string, author: string, bookSourceURL: URL): BookPreviewModelInstanceIncarnation {
        return new _BookPreviewModelInstanceIncarnationImplementation(id, thumbnailSourceURL, title, author, bookSourceURL);
    }
}