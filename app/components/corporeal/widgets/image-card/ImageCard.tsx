import "./image-card.scss";
import Image from "next/image";
import { ImageCardModelInstance } from "./ImageCardModel";

export default function ImageCard({
	imageCardModelInstance,
	children,
}: {
	imageCardModelInstance: ImageCardModelInstance;
	children: React.ReactNode;
}) {
	return (
		<div
			className={imageCardModelInstance.compositeClassNameString}
			id={imageCardModelInstance.id}
			data-testid={imageCardModelInstance.id}
			data-orientation={imageCardModelInstance.orientation}
		>
			<Image
				className="card-thumbnail"
				src={imageCardModelInstance.thumbnail.source}
				alt={imageCardModelInstance.thumbnail.alt}
				placeholder={imageCardModelInstance.thumbnail.placeholder}
				width={300}
				height={250}
				data-testid={"thumbnail"}
			/>
			<div className="card-details">{children}</div>
		</div>
	);
}
