const _NAME_OF_CLASS: string = "art-image";

export class ArtImageModel implements Model {

    private _imageSource: string;

    public get imageSource(): string {
        return this._imageSource;
    }

    private _imageTitle: string;

    public get imageTitle(): string {
        return this._imageTitle;
    }

    private _id: any;

    public get id(): any {
        return this._id;
    }

    constructor({
        id,
        imageSource,
        imageTitle
    } : {
        id: any,
        imageSource: string,
        imageTitle: string
    }) {
        this._id = id;
        this._imageSource = imageSource;
        this._imageTitle = imageTitle;
    }

    nameOfClass: string = _NAME_OF_CLASS;
}