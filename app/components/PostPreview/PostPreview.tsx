import ImageCard from "../ImageCard/ImageCard"
import { PostPreviewModel } from "./PostPreviewModel";

export default function PostPreview({
    postPreviewModel,
    ...props
} : {
    postPreviewModel: PostPreviewModel,
    [key: string]: any
}) {
    return (
        <ImageCard
            {...props}
            className={`${postPreviewModel.nameOfClass} ${props.className ? props.className : ''}`}
            imageCardModel={postPreviewModel}
        >
            <h5 className="post-title">{postPreviewModel.postTitle}</h5>
            <span className="post-text">{postPreviewModel.postText}</span>
            <span className="post-byline">{postPreviewModel.postAuthor} | {postPreviewModel.postDate}</span>
        </ImageCard>
    );
}