import Image from "@/app-library/components/widgets/image/ui/Image";
import { ImageCardModel } from "../ImageCardModel";
import "./image-card.scss";
import { ModeledContainerComponent } from "@/app-library/custom-types/ModeledComponent";

export const ELEMENT_NAME = "image-card";

const ImageCard = function ({ model, children }) {
	const { thumbnail, orientation } = model.modelView;

	return (
		<div
			className={ELEMENT_NAME}
			data-orientation={orientation}
			data-testid={ELEMENT_NAME}
		>
			<Image
				model={{
					modelView: {
						image: thumbnail,
						width: 300,
						height: 250,
						customName: "card-thumbnail",
					},
				}}
			/>
			<div className="card-details">{children}</div>
		</div>
	);
} as ModeledContainerComponent<ImageCardModel>;

export default ImageCard;
