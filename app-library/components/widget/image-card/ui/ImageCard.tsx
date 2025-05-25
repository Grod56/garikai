import Image from "@/app-library/components/widget/image/ui/Image";
import { ImageCardModel } from "../image-card";
import "./image-card.scss";

import { newReadonlyModel } from "@mvc-react/mvc";
import { ModeledContainerComponent } from "@mvc-react/components";

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
				model={newReadonlyModel({
					image: thumbnail,
					width: 300,
					height: 250,
					customName: "card-thumbnail",
				})}
			/>
			<div className="card-details">{children}</div>
		</div>
	);
} as ModeledContainerComponent<ImageCardModel>;

export default ImageCard;
