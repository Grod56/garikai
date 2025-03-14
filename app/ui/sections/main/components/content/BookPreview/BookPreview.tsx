import LinkedImageCard from "../../widgets/ImageCard/LinkedImageCard/LinkedImageCard";
import { BookPreviewModelInstance } from "./BookPreviewModel";

export default function BookPreview({
    bookPreviewModelInstance
} : {
    bookPreviewModelInstance: BookPreviewModelInstance
}) {
    return (
        <LinkedImageCard
            linkedImageCardModelInstance={bookPreviewModelInstance}
        >
            <h5 className="book-title">{bookPreviewModelInstance.title}</h5>
            <span className="book-author">{bookPreviewModelInstance.author}</span>
        </LinkedImageCard>

    )
}