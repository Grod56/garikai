const _NAME_OF_CLASS = 'image-card-skeleton'

export class ImageCardSkeletonModel implements Model {

    constructor() {

    }
    private _id: any;

    public get id(): any {
        return this._id;
    }
    nameOfClass: string = _NAME_OF_CLASS;
}