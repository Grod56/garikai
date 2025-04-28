import Image from "next/image";
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
				className="card-thumbnail"
				src={modelInstance.thumbnail.source}
				alt={modelInstance.thumbnail.alt}
				blurDataURL={modelInstance.thumbnail.placeholder}
				placeholder="blur"
				width={300}
				height={250}
			/>
			<div className="card-details">{children}</div>
		</div>
	);
}
