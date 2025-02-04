import PostPreview from "../PostPreview/PostPreview";
import { NormalPostModel } from "./NormalPostModel";

export default function NormalPost({
    normalPostModel,
    ...props
} : {
    normalPostModel: NormalPostModel,
    [key: string]: any
}) {
    return (
        <PostPreview
            {...props}
            className={normalPostModel.nameOfClass}
            postPreviewModel={normalPostModel}
        />
    );
}