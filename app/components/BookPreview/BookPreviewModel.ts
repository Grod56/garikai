import { ImageCardModel } from "../ImageCard/ImageCardModel";

const _NAME_OF_CLASS: string = 'book-preview';

export class BookPreviewModel extends ImageCardModel {
    
    private _title: string;
    private _author: string;

    constructor(
        { 
            thumbnailSource,
            title,
            author,
            id
        }: { 
            thumbnailSource: string;
            title: string;
            author: string;
            id: number
        }
    ) {
        // TODO: clarify this
        super(thumbnailSource, true, id);
        this._title = title;
        this._author = author;
    }

    public get thumbnailSource(): string {
        return this.imageSource;
    }

    public get title(): string {
        return this._title;
    }

    public get author(): string {
        return this._author;
    }

    nameOfClass: string = `${this.nameOfClass} ${_NAME_OF_CLASS}`;
}