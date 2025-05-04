import ImageCard from "@/app-library/components/widgets/image-card/ui/ImageCard";
import LinkedComponent from "@/app-library/components/widgets/linked-component/ui/LinkedComponent";
import { ELEMENT_NAME } from "./PostPreview";
import { FeaturedPostPreviewModel } from "../FeaturedPostPreviewModel";
import "./post-preview.scss";

export { ELEMENT_NAME };

export default function FeaturedPostPreview({
	model,
}: {
	model: FeaturedPostPreviewModel;
}) {
	const { id, title, snippet, byline, thumbnail, postLink } = model.modelView;

	return (
		<div className={ELEMENT_NAME} id={id} data-testid={ELEMENT_NAME}>
			<LinkedComponent
				model={{
					modelView: {
						link: postLink,
					},
				}}
			>
				<ImageCard
					model={{
						modelView: {
							thumbnail: thumbnail,
							orientation: "flexible",
						},
					}}
				>
					<h5 className="title" title={title}>
						{title}
					</h5>
					<span className="snippet">{snippet}</span>
					<span className="byline">{byline}</span>
				</ImageCard>
			</LinkedComponent>
		</div>
	);
}
