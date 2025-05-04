import { ModeledEmptyComponent } from "@/app-library/custom-types/ModeledComponent";
import { ArtImageSkeletonModel } from "../ArtImageSkeletonModel";
import "./art-image-skeleton.scss";

export const ELEMENT_NAME = "art-image-skeleton";

const ArtImageSkeleton = function () {
	return <div className={ELEMENT_NAME} data-testid={ELEMENT_NAME}></div>;
} as ModeledEmptyComponent<ArtImageSkeletonModel>;

export default ArtImageSkeleton;
