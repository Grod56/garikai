import "./image-card-skeleton.scss";
import { ImageCardSkeletonModel } from "../ImageCardSkeletonModel";

export const ELEMENT_NAME = "image-card-skeleton";

export default function ImageCardSkeleton({
	model,
}: {
	model: ImageCardSkeletonModel;
}) {
	const { orientation } = model.modelInstance;

	return (
		<div
			className={ELEMENT_NAME}
			data-orientation={orientation}
			data-testid={ELEMENT_NAME}
		>
			<div className="card-thumbnail"></div>
			<div className="card-details"></div>
		</div>
	);
}
