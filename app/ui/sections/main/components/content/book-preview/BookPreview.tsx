import LinkedImageCard from "../../widgets/image-card/linked-image-card/LinkedImageCard";
import { BookPreviewModelInstance } from "./BookPreviewModel";

export default function BookPreview({
	bookPreviewModelInstance,
}: {
	bookPreviewModelInstance: BookPreviewModelInstance;
}) {
	return (
		<LinkedImageCard
			linkedImageCardModelInstance={bookPreviewModelInstance}
		>
			<h5 className="title" data-testid="title">
				{bookPreviewModelInstance.title}
			</h5>
			<span className="author" data-testid="author">
				{bookPreviewModelInstance.author}
			</span>
		</LinkedImageCard>
	);
}
