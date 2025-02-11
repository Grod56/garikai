import Link from "next/link";
import ImageCard from "../ImageCard/ImageCard"
import { PostPreviewModel } from "./PostPreviewModel";

export default function PostPreview({
    postPreviewModel
} : {
    postPreviewModel: PostPreviewModel
}) {
    return (
        <Link href={postPreviewModel.postURL.href}>
            <ImageCard
                imageCardModel={postPreviewModel}
            >
                <h5 className="post-title">{postPreviewModel.postTitle}</h5>
                <span className="post-text">{postPreviewModel.postText}</span>
                <span className="post-byline">{postPreviewModel.postAuthor} | {postPreviewModel.postDate.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </ImageCard>
        </Link>
    );
}