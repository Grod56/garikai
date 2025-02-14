const _NAME_OF_CLASS: string = 'normal-post';

import { PostPreviewModel } from "../PostPreviewModel";

export class NormalPostModel extends PostPreviewModel {
    constructor(
        { 
            id,
            postURL,
            postThumbnailSource,
            postTitle,
            postText,
            postAuthor,
            postDate 
        }: { 
            id: string;
            postURL: URL;
            postThumbnailSource: string;
            postTitle: string;
            postText: string;
            postAuthor: string;
            postDate: Date;
        }
    ) {
        // TODO: Fix the magic input
        super(
            { id, postURL, postThumbnailSource, postTitle, postText, postAuthor, postDate, isFlexible: false }        );
    }

    public get nameOfClass(): string {
        return  `${super.nameOfClass} ${_NAME_OF_CLASS}`;
    }
}