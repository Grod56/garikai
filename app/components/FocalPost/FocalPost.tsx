import PostPreview from "../PostPreview/PostPreview";
import { FocalPostModel } from "./FocalPostModel";

export default function FocalPost({
    focalPostModel,
    ...props
} : {
    focalPostModel: FocalPostModel,
    [key: string]: any
}) {
    return (
        <PostPreview
            {...props}
            className={focalPostModel.nameOfClass}
            postPreviewModel={focalPostModel}
        />
    );
}