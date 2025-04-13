import "./image-card.scss";
import Image from "next/image";
import { ImageCardModel, ImageCardModelInstance } from "./ImageCardModel";

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
		>
			<Image
				className="card-thumbnail"
				src={modelInstance.thumbnail.source}
				alt={modelInstance.thumbnail.alt}
				placeholder={modelInstance.thumbnail.placeholder}
				width={300}
				height={250}
			/>
			<div className="card-details">{children}</div>
		</div>
	);
}
