import { PostPreviewModel } from "./PostPreviewModel";
import ImageCard from "../../widgets/image-card/ImageCard";
import LinkedComponent from "../../widgets/linked-component/LinkedComponent";
import "./post-preview.scss";

export default function PostPreview({
	model: { modelInstance },
}: {
	model: PostPreviewModel;
}) {
	return (
		<div className="post-preview" id={modelInstance.id}>
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
							thumbnail: modelInstance.thumbnail,
							orientation: modelInstance.orientation,
						},
					}}
				>
					<h5 className="title" title={modelInstance.title}>
						{modelInstance.title}
					</h5>
					<span className="snippet">{modelInstance.snippet}</span>
					<span className="byline">{modelInstance.byline}</span>
				</ImageCard>
			</LinkedComponent>
		</div>
	);
}
