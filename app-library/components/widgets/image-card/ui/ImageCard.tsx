import Image from "@/app-library/components/widgets/image/ui/Image";
import { ImageCardModel } from "../ImageCardModel";
import "./image-card.scss";

export default function ImageCard({
	model: { modelInstance },
	children,
}: {
	model: ImageCardModel;
	children: React.ReactNode;
}) {
	return (
		<div
			className="image-card"
			data-orientation={modelInstance.orientation}
			data-testid="image-card"
		>
			<Image
				model={{
					modelInstance: {
						image: modelInstance.thumbnail,
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
