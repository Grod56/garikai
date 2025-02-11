const _NAME_OF_CLASS: string = 'focal-post';

import { PostPreviewModel } from "../PostPreview/PostPreviewModel";

export class FocalPostModel extends PostPreviewModel {
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
        },
    ) {
        // TODO: Fix the magic input
        super(
            { id, postURL, postThumbnailSource, postTitle, postText, postAuthor, postDate, isFlexible: true }
        );
    }
    
    nameOfClass: string = `${this.nameOfClass} ${_NAME_OF_CLASS}`;
}