import { ArtImageSkeletonModel } from "../ArtImageSkeletonModel";
import "./art-image-skeleton.scss";

export const ELEMENT_NAME = "art-image-skeleton";

// eslint-disable-next-line no-empty-pattern
export default function ArtImageSkeleton({}: { model: ArtImageSkeletonModel }) {
	return <div className={ELEMENT_NAME} data-testid={ELEMENT_NAME}></div>;
}
