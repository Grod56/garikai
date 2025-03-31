import LinkedComponent from "../../../ethereal/linked-component/LinkedComponent";
import ImageCard from "../image-card/ImageCard";
import { BookPreviewModelInstance } from "./BookPreviewModel";

export default function BookPreview({
	bookPreviewModelInstance,
}: {
	bookPreviewModelInstance: BookPreviewModelInstance;
}) {
	return (
		<LinkedComponent
			linkedComponentModelInstance={bookPreviewModelInstance}
		>
			<ImageCard imageCardModelInstance={bookPreviewModelInstance}>
				<h5
					className="title"
					data-testid="title"
					title={bookPreviewModelInstance.title}
				>
					{bookPreviewModelInstance.title}
				</h5>
				<span
					className="author"
					data-testid="author"
					title={bookPreviewModelInstance.author}
				>
					{bookPreviewModelInstance.author}
				</span>
			</ImageCard>
		</LinkedComponent>
	);
}
