import { ArtImageSkeletonModel } from "../ArtImageSkeletonModel";
import "./art-image-skeleton.scss";

// eslint-disable-next-line no-empty-pattern
export default function ArtImageSkeleton({}: { model: ArtImageSkeletonModel }) {
	return (
		<div
			className="art-image-skeleton"
			data-testid="art-image-skeleton"
		></div>
	);
}
