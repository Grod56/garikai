const _NAME_OF_CLASS: string = 'post-preview';

import { ImageCardModel } from "../ImageCard/ImageCardModel";

export class PostPreviewModel extends ImageCardModel {

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
    constructor(
        id: string,
        postThumbnailSource: string,
        postTitle: string,
        postText: string,
        postAuthor: string,
        postDate: Date,
        isFlexible: boolean
    ) {
        super(postThumbnailSource, isFlexible);
        this.id = id;
        this._postTitle = postTitle;
        this._postText = postText;
        this._postAuthor = postAuthor;
        this._postDate = postDate;
    }

    nameOfClass: string = `${this.nameOfClass} ${_NAME_OF_CLASS}`;
    id: string;
}