const _NAME_OF_CLASS: string = 'site-subsection';

export class SiteSubsectionModel implements Model {
    private _subsectionTitle: string;
    public get subsectionTitle(): string {
        return this._subsectionTitle;
    }

    private _id: any;

    public get id(): any {
        return this._id;
    }

    constructor(subsectionTitle: string) {
        this._subsectionTitle = subsectionTitle;
    }

    nameOfClass: string = _NAME_OF_CLASS;
}