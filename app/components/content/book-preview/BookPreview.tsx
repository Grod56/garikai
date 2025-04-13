import LinkedComponent from "../../widgets/linked-component/LinkedComponent";
import ImageCard from "../../widgets/image-card/ImageCard";
import { BookPreviewModel } from "./BookPreviewModel";
import "./book-preview.scss";

export default function BookPreview({
	model: { modelInstance },
}: {
	model: BookPreviewModel;
}) {
	return (
		<div className="book-preview" id={modelInstance.id}>
			<LinkedComponent
				model={{
					modelInstance: {
						link: modelInstance.link,
					},
				}}
			>
				<ImageCard
					model={{
						modelInstance: {
							thumbnail: modelInstance.cover,
							orientation: "flexible", //TODO: Better solution to be implemented
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
