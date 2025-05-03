import ImageCard from "@/app-library/components/widgets/image-card/ui/ImageCard";
import LinkedComponent from "@/app-library/components/widgets/linked-component/ui/LinkedComponent";
import { BookPreviewModel } from "../BookPreviewModel";
import "./book-preview.scss";

export const ELEMENT_NAME = "book-preview";

export default function BookPreview({ model }: { model: BookPreviewModel }) {
	const { id, title, author, cover, bookLink } = model.modelInstance;

	return (
		<div className={ELEMENT_NAME} id={id} data-testid={ELEMENT_NAME}>
			<LinkedComponent
				model={{
					modelInstance: {
						link: bookLink,
					},
				}}
			>
				<ImageCard
					model={{
						modelInstance: {
							thumbnail: cover,
							orientation: "flexible",
						},
					}}
				>
					<h5 className="title" title={title}>
						{title}
					</h5>
					<span className="author" title={author}>
						{author}
					</span>
				</ImageCard>
			</LinkedComponent>
		</div>
	);
}
