const _NAME_OF_CLASS: string = "art-image";

export class ArtImageModel implements Model {

    private _imageSourceURL: string;

    public get imageSourceURL(): string {
        return this._imageSourceURL;
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
        imageSourceURL,
        imageTitle
    } : {
        id: any,
        imageSourceURL: string,
        imageTitle: string
    }) {
        this._id = id;
        this._imageSourceURL = imageSourceURL;
        this._imageTitle = imageTitle;
    }

    nameOfClass: string = _NAME_OF_CLASS;
}