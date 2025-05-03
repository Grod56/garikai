import Image from "@/app-library/components/widgets/image/ui/Image";
import { ImageCardModel } from "../ImageCardModel";
import "./image-card.scss";

export const ELEMENT_NAME = "image-card";

export default function ImageCard({
	model,
	children,
}: {
	model: ImageCardModel;
	children: React.ReactNode;
}) {
	const { thumbnail, orientation } = model.modelInstance;

	return (
		<div
			className={ELEMENT_NAME}
			data-orientation={orientation}
			data-testid={ELEMENT_NAME}
		>
			<Image
				model={{
					modelInstance: {
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
}
