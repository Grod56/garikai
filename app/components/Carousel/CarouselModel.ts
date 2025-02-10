const _NAME_OF_CLASS: string = 'embla';

export class CarouselModel implements Model{
    constructor() {}

    private _id: any;

    public get id(): any {
        return this._id;
    }
    nameOfClass: string = _NAME_OF_CLASS;
}