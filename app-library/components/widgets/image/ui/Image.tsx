import NextImage from "next/image";
import { ImageModel } from "../ImageModel";

export default function Image({
	model: { modelInstance },
}: {
	model: ImageModel;
}) {
	return (
		<NextImage
			className="image"
			src={modelInstance.image.source}
			alt={modelInstance.image.alt}
			placeholder="blur"
			blurDataURL={modelInstance.image.placeholder}
			height={modelInstance.height}
			width={modelInstance.width}
			quality={100}
			data-customname={modelInstance.customName}
			data-testid="image"
			data-placeholder={modelInstance.image.placeholder} // To expose purely for testing purposes
		/>
	);
}
