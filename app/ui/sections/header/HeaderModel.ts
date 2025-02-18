const _NAME_OF_CLASS: string = 'header'

export class HeaderModel implements Model {

    private _headerTitle: string;

    public get headerTitle(): string {
        return this._headerTitle;
    }
    
    private _headerSubtitle: string;

    public get headerSubtitle(): string {
        return this._headerSubtitle;
    }

    constructor({
        headerTitle,
        headerSubtitle
    } : {
        headerTitle: string,
        headerSubtitle: string
    }) {
        this._headerTitle = headerTitle;
        this._headerSubtitle = headerSubtitle;
    }

    private _id: any;
    
    public get id() : string {
        return this._id;
    }
    
    public get nameOfClass(): string {
        return _NAME_OF_CLASS;
    }
}