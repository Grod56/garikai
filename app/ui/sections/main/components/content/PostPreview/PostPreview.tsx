import { PostPreviewModelInstance } from "./PostPreviewModel";
import LinkedImageCard from "../../widgets/ImageCard/LinkedImageCard/LinkedImageCard";

export default function PostPreview({
    postPreviewModelInstance
} : {
    postPreviewModelInstance: PostPreviewModelInstance
}) {
    return (
            <LinkedImageCard
                linkedImageCardModelInstance={postPreviewModelInstance}
            >
                <h5 className="post-title">{postPreviewModelInstance.postTitle}</h5>
                <span className="post-text">{postPreviewModelInstance.postText}</span>
                <span className="post-byline">{postPreviewModelInstance.postByline}</span>
            </LinkedImageCard>
    );
}