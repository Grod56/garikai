const _NAME_OF_CLASS: string = 'normal-post';

import { PostPreviewModel } from "../PostPreview/PostPreviewModel";

export class NormalPostModel extends PostPreviewModel {
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
            false
        );
    }

    nameOfClass: string = `${this.nameOfClass} ${_NAME_OF_CLASS}`;
}