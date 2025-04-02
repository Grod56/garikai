import "./art-image.scss";
import Image from "next/image";
import { ArtImageModelInstance } from "./ArtImageModel";

export default function ArtImage({
	artImageModelInstance,
}: {
	artImageModelInstance: ArtImageModelInstance;
}) {
	return (
		<Image
			className={artImageModelInstance.compositeClassNameString}
			id={artImageModelInstance.id}
			src={artImageModelInstance.image.source}
			title={artImageModelInstance.title}
			data-testid={artImageModelInstance.id}
			alt={artImageModelInstance.image.alt}
			placeholder={artImageModelInstance.image.placeholder}
			height={410}
			width={420}
			quality={100}
		/>
	);
}
