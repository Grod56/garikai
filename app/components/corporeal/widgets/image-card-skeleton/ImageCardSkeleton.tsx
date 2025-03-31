import "./image-card-skeleton.scss";
import { ImageCardSkeletonModelInstance } from "./ImageCardSkeletonModel";

export default function ImageCardSkeleton({
	imageCardSkeletonModelInstance,
}: {
	imageCardSkeletonModelInstance: ImageCardSkeletonModelInstance;
}) {
	return (
		<div
			id={imageCardSkeletonModelInstance.id}
			className={imageCardSkeletonModelInstance.compositeClassNameString}
			data-orientation={imageCardSkeletonModelInstance.orientation}
			data-testid={imageCardSkeletonModelInstance.id}
		>
			<div className="card-thumbnail"></div>
			<div className="card-details"></div>
		</div>
	);
}
