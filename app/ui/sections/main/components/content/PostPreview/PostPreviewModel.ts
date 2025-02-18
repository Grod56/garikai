import { LinkedImageCardModel } from "../../widgets/ImageCard/LinkedImageCard/LinkedImageCardModel";

const _NAME_OF_CLASS: string = 'post-preview';

export class PostPreviewModel extends LinkedImageCardModel {

    public get postThumbnailSource(): string {
        return this.imageSource;
    }

    private _postTitle: string;
    public get postTitle(): string {
        return this._postTitle;
    }
    private _postText: string;
    public get postText(): string {
        return this._postText;
    }
    private _postAuthor: string;
    public get postAuthor(): string {
        return this._postAuthor;
    }
    private _postDate: Date;
    public get postDate(): Date {
        return this._postDate;
    }

    public get postURL(): URL {
        return this.linkURL;
    }
    
    constructor(
        { 
            id,
            postURL,
            postThumbnailSource,
            postTitle,
            postText, 
            postAuthor,
            postDate,
            isFlexible
        }: {
            id: string;
            postURL: URL;
            postThumbnailSource: string;
            postTitle: string;
            postText: string;
            postAuthor: string;
            postDate: Date;
            isFlexible: boolean;

        }    ) {
        super({id, linkURL: postURL, imageSource: postThumbnailSource, isFlexible});
        this._postTitle = postTitle;
        this._postText = postText;
        this._postAuthor = postAuthor;
        this._postDate = postDate;
    }

    public get nameOfClass(): string {
        return `${super.nameOfClass} ${_NAME_OF_CLASS}`
    }
}