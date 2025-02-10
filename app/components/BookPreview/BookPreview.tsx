import ImageCard from "../ImageCard/ImageCard";
import { BookPreviewModel } from "./BookPreviewModel";

export default function BookPreview({
    bookPreviewModel
} : {
    bookPreviewModel: BookPreviewModel
}) {
    return (
        <ImageCard
            className={`${bookPreviewModel.nameOfClass}`}
            imageCardModel={bookPreviewModel}
        >
            <h5 className="book-title">{bookPreviewModel.title}</h5>
            <span className="book-author">{bookPreviewModel.author}</span>
        </ImageCard>

    )
}