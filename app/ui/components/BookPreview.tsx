import ImageCard from "./ImageCard"

export default function BookPreview({
    imageSource,
    bookTitle,
    bookAuthor,
    ...props
} : {
    imageSource: string,
    bookTitle: string,
    bookAuthor: string,
    [key: string]: any
}) {
    return (
        <ImageCard
            {...props}
            className={`book-preview ${props.className ? props.className : ''}`}
            imageSource={imageSource}
            cardDetails={
                <>
                    <h5 className="book-title">{bookTitle}</h5>
                    <span className="book-author">{bookAuthor}</span>
                </>
            }
            isFlexible={true} 
        />
    )
}