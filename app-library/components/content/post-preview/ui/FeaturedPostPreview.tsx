import ImageCard from "@/app-library/components/widgets/image-card/ui/ImageCard";
import LinkedComponent from "@/app-library/components/widgets/linked-component/ui/LinkedComponent";
import { ELEMENT_NAME } from "./PostPreview";
import { FeaturedPostPreviewModel } from "../FeaturedPostPreviewModel";
import "./post-preview.scss";

export { ELEMENT_NAME };

export default function FeaturedPostPreview({
	model: { modelInstance },
}: {
	model: FeaturedPostPreviewModel;
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
						link: modelInstance.postLink,
					},
				}}
			>
				<ImageCard
					model={{
						modelInstance: {
							thumbnail: modelInstance.thumbnail,
							orientation: "flexible",
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
