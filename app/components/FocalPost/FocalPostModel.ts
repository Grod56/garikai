const _NAME_OF_CLASS: string = 'focal-post';

import { PostPreviewModel } from "../PostPreview/PostPreviewModel";

export class FocalPostModel extends PostPreviewModel {
    constructor(
        postThumbnailSource: string,
        postTitle: string,
        postText: string,
        postAuthor: string,
        postDate: string,
    ) {
        // TODO: Fix the magic input
        super(
            postThumbnailSource,
            postTitle,
            postText,
            postAuthor,
            postDate,
            true
        );
    }
    
    nameOfClass: string = `${this.nameOfClass} ${_NAME_OF_CLASS}`;
}