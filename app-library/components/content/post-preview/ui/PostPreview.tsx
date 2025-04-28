import ImageCard from "@/app-library/components/widgets/image-card/ui/ImageCard";
import LinkedComponent from "@/app-library/components/widgets/linked-component/ui/LinkedComponent";
import { PostPreviewModel } from "../PostPreviewModel";
import "./post-preview.scss";

export default function PostPreview({
	model: { modelInstance },
}: {
	model: PostPreviewModel;
}) {
	return (
		<div
			className="post-preview"
			id={modelInstance.id}
			data-testid="post-preview"
		>
			<LinkedComponent
				model={{
					modelInstance: {
						link: modelInstance.postLink,
					},
				}}
			>
				<ImageCard
					model={{
						modelInstance: {
							thumbnail: modelInstance.thumbnail,
							orientation: "vertical",
						},
					}}
				>
					<h5 className="title" title={modelInstance.title}>
						{modelInstance.title}
					</h5>
					<span className="byline">{modelInstance.byline}</span>
				</ImageCard>
			</LinkedComponent>
		</div>
	);
}
