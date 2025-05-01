import { ArtImageSkeletonModel } from "../ArtImageSkeletonModel";
import "./art-image-skeleton.scss";

export const ELEMENT_NAME = "art-image-skeleton";

export default function ArtImageSkeleton({
	model: { modelInstance },
}: {
	model: ArtImageSkeletonModel;
}) {
	return (
		<div
			className={ELEMENT_NAME}
			data-testid={ELEMENT_NAME}
			data-customName={modelInstance.customName}
		></div>
	);
}
