import ImageCard from "@/app-library/components/widgets/image-card/ui/ImageCard";
import LinkedComponent from "@/app-library/components/widgets/linked-component/ui/LinkedComponent";
import { PostPreviewModel } from "../PostPreviewModel";
import "./post-preview.scss";

export const ELEMENT_NAME = "post-preview";

export default function PostPreview({ model }: { model: PostPreviewModel }) {
	const { id, title, byline, thumbnail, postLink } = model.modelView;

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
							orientation: "vertical",
						},
					}}
				>
					<h5 className="title" title={title}>
						{title}
					</h5>
					<span className="byline">{byline}</span>
				</ImageCard>
			</LinkedComponent>
		</div>
	);
}
