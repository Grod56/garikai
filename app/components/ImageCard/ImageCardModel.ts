const _NAME_OF_CLASS: string = 'image-card';

export class ImageCardModel implements Model {

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
        isFlexible: boolean 
    ) {
        this._imageSource = imageSource;
        this._isFlexible = isFlexible;
    }

    nameOfClass: string = _NAME_OF_CLASS;
}