const _NAME_OF_CLASS: string = 'site-section';

export class SiteSectionModel implements Model {
    private _sectionTitle: string;

    public get sectionTitle(): string {
        return this._sectionTitle;
    }

    private _id: string;

    public get id(): string {
        return this._id;
    }

    private _nameOfClass: string;

    constructor(className: string, id: string, sectionTitle: string) {
        this._sectionTitle = sectionTitle;
        this._nameOfClass = className;
        this._id = id;
    }

    public get nameOfClass(): string {
        return `${_NAME_OF_CLASS} ${this._nameOfClass}`
    }
    
}