import { ModeledVoidComponent } from "@mvc-react/components";
import { ArtImageSkeletonModel } from "../art-image-skeleton-model";
import "./art-image-skeleton.scss";

export const ELEMENT_NAME = "art-image-skeleton";

/* Too trivial? Useful for React component manipulations tho.
 * Maybe new kind of modeled component in the future?
 */
const ArtImageSkeleton = function () {
	return <div className={ELEMENT_NAME} data-testid={ELEMENT_NAME} />;
} as ModeledVoidComponent<ArtImageSkeletonModel>;

export default ArtImageSkeleton;
