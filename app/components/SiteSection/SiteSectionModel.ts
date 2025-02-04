const _NAME_OF_CLASS: string = 'site-section';

export class SiteSectionModel implements Model {
    private _sectionTitle: string;
    public get sectionTitle(): string {
        return this._sectionTitle;
    }

    constructor(sectionTitle: string) {
        this._sectionTitle = sectionTitle;
    }

    nameOfClass: string = _NAME_OF_CLASS;
    
}