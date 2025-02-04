import ImageCard from "../ImageCard/ImageCard";
import { BookPreviewModel } from "./BookPreviewModel";

export default function BookPreview({
    bookPreviewModel,
    ...props
} : {
    bookPreviewModel: BookPreviewModel,
    [key: string]: any
}) {
    return (
        <ImageCard
            {...props}
            className={`${bookPreviewModel.nameOfClass} ${props.className ? props.className : ''}`}
            imageCardModel={bookPreviewModel}
        >
            <h5 className="book-title">{bookPreviewModel.bookTitle}</h5>
            <span className="book-author">{bookPreviewModel.bookAuthor}</span>
        </ImageCard>

    )
}