const _NAME_OF_CLASS: string = 'main'

export class MainModel implements Model {
    private _id: any;

    public get nameOfClass(): string {
        return _NAME_OF_CLASS;
    }
    public get id(): any {
        return this._id;
    }

}