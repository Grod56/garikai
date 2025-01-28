import PostPreview from "./PostPreview";

export default function FocalPost({
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
            className={'focal-post'}
            imageSource={imageSource}
            isFlexible={true}
            postTitle={postTitle}
            postText={postText}
            postAuthor={postAuthor}
            postDate={postDate}
        />
    );
}