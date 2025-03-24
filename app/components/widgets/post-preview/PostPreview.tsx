import { PostPreviewModelInstance } from "./PostPreviewModel";
import LinkedImageCard from "../image-card/linked-image-card/LinkedImageCard";

export default function PostPreview({
	postPreviewModelInstance,
}: {
	postPreviewModelInstance: PostPreviewModelInstance;
}) {
	return (
		<LinkedImageCard
			linkedImageCardModelInstance={postPreviewModelInstance}
		>
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
		</LinkedImageCard>
	);
}
