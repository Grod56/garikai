import "./image-card-skeleton.scss";
import { ImageCardSkeletonModel } from "../ImageCardSkeletonModel";

export const ELEMENT_NAME = "image-card-skeleton";

export default function ImageCardSkeleton({
	model: { modelInstance },
}: {
	model: ImageCardSkeletonModel;
}) {
	return (
		<div
			className={ELEMENT_NAME}
			data-orientation={modelInstance.orientation}
			data-testid={ELEMENT_NAME}
		>
			<div className="card-thumbnail"></div>
			<div className="card-details"></div>
		</div>
	);
}
