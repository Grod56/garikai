import ImageCard from "@/app-library/components/widgets/image-card/ui/ImageCard";
import LinkedComponent from "@/app-library/components/widgets/linked-component/ui/LinkedComponent";
import { BookPreviewModel } from "../BookPreviewModel";
import "./book-preview.scss";

export const ELEMENT_NAME = "book-preview";

export default function BookPreview({
	model: { modelInstance },
}: {
	model: BookPreviewModel;
}) {
	return (
		<div
			className={ELEMENT_NAME}
			id={modelInstance.id}
			data-testid={ELEMENT_NAME}
		>
			<LinkedComponent
				model={{
					modelInstance: {
						link: modelInstance.bookLink,
					},
				}}
			>
				<ImageCard
					model={{
						modelInstance: {
							thumbnail: modelInstance.cover,
							orientation: "flexible",
						},
					}}
				>
					<h5 className="title" title={modelInstance.title}>
						{modelInstance.title}
					</h5>
					<span className="author" title={modelInstance.author}>
						{modelInstance.author}
					</span>
				</ImageCard>
			</LinkedComponent>
		</div>
	);
}
