const _NAME_OF_CLASS: string = "coming-soon-banner";

export class ComingSoonBannerModel implements Model {

    private _comingSoonText: string;

    public get comingSoonText(): string {
        return this._comingSoonText;
    }
    
    constructor(comingSoonText: string) {
        this._comingSoonText = comingSoonText;
    }
    
    private _id: any;

    public get id(): any {
        return this._id;
    }
    nameOfClass: string = _NAME_OF_CLASS;
}