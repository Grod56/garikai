import { ArtImagePreviewModel } from "../ArtImagePreviewModel";
import Image from "@/app-library/components/widgets/image/ui/Image";
import "./art-image-preview.scss";

export const ELEMENT_NAME = "art-image-preview";

export default function ArtImagePreview({
	model: { modelInstance },
}: {
	model: ArtImagePreviewModel;
}) {
	return (
		<div
			className={ELEMENT_NAME}
			id={modelInstance.id}
			title={modelInstance.title}
			data-testid={ELEMENT_NAME}
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
