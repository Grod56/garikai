import { ModeledVoidComponent } from "@mvc-react/components";
import { ArtImageSkeletonModel } from "../art-image-skeleton-model";
import "./art-image-skeleton.scss";

export const ELEMENT_NAME = "art-image-skeleton";

const ArtImageSkeleton = function () {
	return <div className={ELEMENT_NAME} data-testid={ELEMENT_NAME}></div>;
} as ModeledVoidComponent<ArtImageSkeletonModel>;

export default ArtImageSkeleton;
