const _NAME_OF_CLASS: string = 'normal-post';

import { PostPreviewModel } from "../PostPreview/PostPreviewModel";

export class NormalPostModel extends PostPreviewModel {
    constructor(
        id: string,
        postThumbnailSource: string,
        postTitle: string,
        postText: string,
        postAuthor: string,
        postDate: Date,
    ) {
        // TODO: Fix the magic input
        super(
            id,
            postThumbnailSource,
            postTitle,
            postText,
            postAuthor,
            postDate,
            false
        );
    }

    nameOfClass: string = `${this.nameOfClass} ${_NAME_OF_CLASS}`;
}