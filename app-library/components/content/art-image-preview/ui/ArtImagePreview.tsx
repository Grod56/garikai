import { ArtImagePreviewModel } from "../ArtImagePreviewModel";
import Image from "@/app-library/components/widgets/image/ui/Image";
import "./art-image-preview.scss";

export const ELEMENT_NAME = "art-image-preview";

export default function ArtImagePreview({
	model,
}: {
	model: ArtImagePreviewModel;
}) {
	const { id, title, image } = model.modelView;

	return (
		<div
			className={ELEMENT_NAME}
			id={id}
			title={title}
			data-testid={ELEMENT_NAME}
		>
			<Image
				model={{
					modelView: {
						image: image,
						width: 420,
						height: 410,
					},
				}}
			/>
		</div>
	);
}
