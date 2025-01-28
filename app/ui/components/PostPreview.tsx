import ImageCard from "./ImageCard"

export default function PostPreview({
    imageSource,
    isFlexible,
    postTitle,
    postText,
    postAuthor,
    postDate,
    ...props
} : {
    imageSource: string,
    isFlexible: boolean,
    postTitle: string,
    postText: string,
    postAuthor: string,
    postDate: string,
    [key: string]: any
}) {
    return (
        <ImageCard
            {...props}
            className={`post-preview ${props.className ? props.className : ''}`}
            imageSource={imageSource}
            cardDetails={
                <>
                    <h5 className="post-title">{postTitle}</h5>
                    <span className="post-text">{postText}</span>
                    <span className="post-byline">{postAuthor} | {postDate}</span>
                </>
            }
            isFlexible={isFlexible} 
        />
    );
}