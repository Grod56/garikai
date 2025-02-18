const _NAME_OF_CLASS: string = 'footer'

export class FooterModel implements Model {

    constructor({id}:{id: string}) {
        this._id = id;
    }

    private _id: string;
    
    public get id() : string {
        return this._id;
    }
    
    public get nameOfClass(): string {
        return _NAME_OF_CLASS;
    }
}