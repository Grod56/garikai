import { ImageCardModel } from "../ImageCardModel";

const _NAME_OF_CLASS: string = 'linked-image-card'

export class LinkedImageCardModel extends ImageCardModel {

    private _linkURL: URL;
    
    public get linkURL() : URL {
        return this._linkURL;
    }

    constructor({
        id,
        linkURL,
        imageSource,
        isFlexible,
    } : {
        id: any,
        linkURL: URL,
        imageSource: string,
        isFlexible: boolean
    }) {
        super(imageSource, isFlexible, id);
        this._linkURL = linkURL;
    }

    public get nameOfClass(): string {
        return `${super.nameOfClass} ${_NAME_OF_CLASS}`;
    }

}