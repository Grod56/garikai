import "./art-image-skeleton.scss";
import { ArtImageSkeletonModelInstance } from "./ArtImageSkeletonModel";

export default function ArtImageSkeleton({
	artImageSkeletonModelInstance,
}: {
	artImageSkeletonModelInstance: ArtImageSkeletonModelInstance;
}) {
	return (
		<div
			className={artImageSkeletonModelInstance.compositeClassNameString}
			id={artImageSkeletonModelInstance.id}
			data-testid={artImageSkeletonModelInstance.id}
		></div>
	);
}
