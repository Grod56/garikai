import PostPreview from "../PostPreview/PostPreview";
import { FocalPostModel } from "./FocalPostModel";

export default function FocalPost({
    focalPostModel
} : {
    focalPostModel: FocalPostModel
}) {
    return (
        <PostPreview
            postPreviewModel={focalPostModel}
        />
    );
}