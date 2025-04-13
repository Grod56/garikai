import "./art-image-preview.scss";
import Image from "next/image";
import { ArtImagePreviewModel } from "./ArtImagePreviewModel";

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
			placeholder={modelInstance.image.placeholder}
			height={410}
			width={420}
			quality={100}
		/>
	);
}
