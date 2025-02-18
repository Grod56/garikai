import { PostPreviewModel } from "./PostPreviewModel";
import LinkedImageCard from "../../widgets/ImageCard/LinkedImageCard/LinkedImageCard";

export default function PostPreview({
    postPreviewModel
} : {
    postPreviewModel: PostPreviewModel
}) {
    return (
            <LinkedImageCard
                linkedImageCardModel={postPreviewModel}
            >
                <h5 className="post-title">{postPreviewModel.postTitle}</h5>
                <span className="post-text">{postPreviewModel.postText}</span>
                <span className="post-byline">{postPreviewModel.postAuthor} | {postPreviewModel.postDate.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </LinkedImageCard>
    );
}