import PostPreview from "../PostPreview/PostPreview";
import { NormalPostModel } from "./NormalPostModel";

export default function NormalPost({
    normalPostModel
} : {
    normalPostModel: NormalPostModel
}) {
    return (
        <PostPreview
            postPreviewModel={normalPostModel}
        />
    );
}