import { LinkedImageCardModel } from "../../widget/ImageCard/LinkedImageCard/LinkedImageCardModel";

const _NAME_OF_CLASS: string = 'book-preview';

export class BookPreviewModel extends LinkedImageCardModel {
    
    private _title: string;
    private _author: string;

    constructor(
        {
            bookSourceURL,
            thumbnailSourceURL,
            title,
            author,
            id
        }: {
            bookSourceURL: URL;
            thumbnailSourceURL: string;
            title: string;
            author: string;
            id: number
        }
    ) {
        super({id, linkURL: bookSourceURL, imageSource: thumbnailSourceURL, isFlexible: true});
        // TODO: clarify this
        this._title = title;
        this._author = author;
    }

    public get thumbnailSourceURL(): string {
        return this.imageSource;
    }

    public get title(): string {
        return this._title;
    }

    public get author(): string {
        return this._author;
    }

    public get bookSourceURL() : URL {
        return this.linkURL;
    }

    public get nameOfClass(): string {
        return `${super.nameOfClass} ${_NAME_OF_CLASS}`;
    }
}