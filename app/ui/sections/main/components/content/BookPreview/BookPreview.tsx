import LinkedImageCard from "../../widgets/ImageCard/LinkedImageCard/LinkedImageCard";
import { BookPreviewModel } from "./BookPreviewModel";

export default function BookPreview({
    bookPreviewModel
} : {
    bookPreviewModel: BookPreviewModel
}) {
    return (
        <LinkedImageCard
            linkedImageCardModel={bookPreviewModel}
        >
            <h5 className="book-title">{bookPreviewModel.title}</h5>
            <span className="book-author">{bookPreviewModel.author}</span>
        </LinkedImageCard>

    )
}