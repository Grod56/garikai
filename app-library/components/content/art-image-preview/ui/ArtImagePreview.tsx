import { ArtImagePreviewModel } from "../ArtImagePreviewModel";
import Image from "@/app-library/components/widgets/image/ui/Image";
import "./art-image-preview.scss";

export default function ArtImagePreview({
	model: { modelInstance },
}: {
	model: ArtImagePreviewModel;
}) {
	return (
		<div
			className="art-image-preview"
			id={modelInstance.id}
			title={modelInstance.title}
			data-testid="art-image-preview"
		>
			<Image
				model={{
					modelInstance: {
						image: modelInstance.image,
						width: 420,
						height: 410,
					},
				}}
			/>
		</div>
	);
}
