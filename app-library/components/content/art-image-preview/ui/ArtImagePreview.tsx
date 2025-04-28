import Image from "next/image";
import { ArtImagePreviewModel } from "../ArtImagePreviewModel";
import "./art-image-preview.scss";

export default function ArtImagePreview({
	model: { modelInstance },
}: {
	model: ArtImagePreviewModel;
}) {
	return (
		<Image
			className="art-image-preview"
			id={modelInstance.id}
			src={modelInstance.image.source}
			title={modelInstance.title}
			alt={modelInstance.image.alt}
			placeholder="blur"
			blurDataURL={modelInstance.image.placeholder}
			height={410}
			width={420}
			quality={100}
			data-testid="art-image-preview"
		/>
	);
}
