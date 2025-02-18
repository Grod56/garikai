const _NAME_OF_CLASS: string = 'image-card';

export class ImageCardModel implements Model {

    private _id: any;

    public get id(): any {
        return this._id;
    }

    private _imageSource: string;

    public get imageSource(): string {
        return this._imageSource;
    }
    
    private _isFlexible: boolean;

    public get isFlexible(): boolean {
        return this._isFlexible;
    }

    constructor(
        imageSource: string,
        isFlexible: boolean,
        id: any
    ) {
        this._id = id;
        this._imageSource = imageSource;
        this._isFlexible = isFlexible;
    }

    public get nameOfClass(): string {
        return `${_NAME_OF_CLASS}${this.isFlexible ? ' flexible': ''}`;
    }
}