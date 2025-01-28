import PostPreview from "./PostPreview";

export default function NormalPost({
    imageSource,
    postTitle,
    postText,
    postAuthor,
    postDate,
    ...props
} : {
    imageSource: string,
    postTitle: string,
    postText: string,
    postAuthor: string,
    postDate: string,
    [key: string]: any
}) {
    return (
        <PostPreview
            {...props}
            className={'normal-post'}
            imageSource={imageSource}
            isFlexible={false}
            postTitle={postTitle}
            postText={postText}
            postAuthor={postAuthor}
            postDate={postDate}
        />
    );
}