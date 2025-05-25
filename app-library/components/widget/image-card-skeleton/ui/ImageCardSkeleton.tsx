import "./image-card-skeleton.scss";
import { ImageCardSkeletonModel } from "../image-card";
import { ModeledVoidComponent } from "@mvc-react/components";

export const ELEMENT_NAME = "image-card-skeleton";

const ImageCardSkeleton = function ({ model }) {
	const { orientation } = model.modelView;

	return (
		<div
			className={ELEMENT_NAME}
			data-orientation={orientation}
			data-testid={ELEMENT_NAME}
		>
			<div className="card-thumbnail"></div>
			<div className="card-details"></div>
		</div>
	);
} as ModeledVoidComponent<ImageCardSkeletonModel>;

export default ImageCardSkeleton;
