const _NAME_OF_CLASS: string = 'site-section';

export class SiteSectionModel implements Model {
    private _sectionTitle: string;
    private _id: string;

    public get sectionTitle(): string {
        return this._sectionTitle;
    }

    public get id(): string {
        return this._id;
    }

    constructor(className: string, id: string, sectionTitle: string) {
        this._sectionTitle = sectionTitle;
        this.nameOfClass = `${_NAME_OF_CLASS} ${className}`;
        this._id = id;
    }

    nameOfClass: string;
    
}