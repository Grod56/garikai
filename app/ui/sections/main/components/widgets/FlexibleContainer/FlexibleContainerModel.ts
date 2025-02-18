const _NAME_OF_CLASS: string = 'flexible-container';

export class FlexibleContainerModel implements Model {

    private _id: any;

    public get id(): any {
        return this._id;
    }
    
    nameOfClass: string = _NAME_OF_CLASS;
    
}