import { ImageCardModel } from "../ImageCard/ImageCardModel";

const _NAME_OF_CLASS: string = 'book-preview';

export class BookPreviewModel extends ImageCardModel {
    
    private _bookTitle: string;
    private _bookAuthor: string;

    constructor(
        bookThumbnailSource: string,
        bookTitle: string,
        bookAuthor: string
    ) {
        // TODO: clarify this
        super(bookThumbnailSource, true);
        this._bookTitle = bookTitle;
        this._bookAuthor = bookAuthor;
    }

    public get bookThumbnailSource(): string {
        return this.imageSource;
    }

    public get bookTitle(): string {
        return this._bookTitle;
    }

    public get bookAuthor(): string {
        return this._bookAuthor;
    }

    nameOfClass: string = `${this.nameOfClass} ${_NAME_OF_CLASS}`;
}