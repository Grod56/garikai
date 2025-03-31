import { PostPreviewModelInstance } from "./PostPreviewModel";
import ImageCard from "../image-card/ImageCard";
import LinkedComponent from "../../../ethereal/linked-component/LinkedComponent";

export default function PostPreview({
	postPreviewModelInstance,
}: {
	postPreviewModelInstance: PostPreviewModelInstance;
}) {
	return (
		<LinkedComponent
			linkedComponentModelInstance={postPreviewModelInstance}
		>
			<ImageCard imageCardModelInstance={postPreviewModelInstance}>
				<h5
					className="title"
					data-testid="title"
					title={postPreviewModelInstance.title}
				>
					{postPreviewModelInstance.title}
				</h5>
				<span className="snippet" data-testid="snippet">
					{postPreviewModelInstance.snippet}
				</span>
				<span className="byline" data-testid="byline">
					{postPreviewModelInstance.byline}
				</span>
			</ImageCard>
		</LinkedComponent>
	);
}
