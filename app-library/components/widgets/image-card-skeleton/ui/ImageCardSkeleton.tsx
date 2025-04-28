import "./image-card-skeleton.scss";
import { ImageCardSkeletonModel } from "../ImageCardSkeletonModel";

export default function ImageCardSkeleton({
	model: { modelInstance },
}: {
	model: ImageCardSkeletonModel;
}) {
	return (
		<div
			className="image-card-skeleton"
			data-orientation={modelInstance.orientation}
			data-testid="image-card-skeleton"
		>
			<div className="card-thumbnail"></div>
			<div className="card-details"></div>
		</div>
	);
}
