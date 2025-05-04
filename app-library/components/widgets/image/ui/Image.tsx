import NextImage from "next/image";
import { ImageModel } from "../ImageModel";

export const ELEMENT_NAME = "image";

export default function Image({ model }: { model: ImageModel }) {
	const { image, height, width, customName } = model.modelView;

	return (
		<NextImage
			className={ELEMENT_NAME}
			src={image.source}
			alt={image.alt}
			width={width}
			height={height}
			quality={100}
			blurDataURL={image.placeholder}
			loading="lazy"
			placeholder="blur"
			data-customname={customName}
			data-originalsrc={image.source} // To expose purely for testing purposes
			data-placeholder={image.placeholder} // ditto
			data-testid={ELEMENT_NAME}
		/>
	);
}
