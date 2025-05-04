import Image from "@/app-library/components/widgets/image/ui/Image";
import { ModeledEmptyComponent } from "@/app-library/custom-types/ModeledComponent";
import { ArtImagePreviewModel } from "../ArtImagePreviewModel";
import "./art-image-preview.scss";

export const ELEMENT_NAME = "art-image-preview";

const ArtImagePreview = function ({ model }) {
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
} as ModeledEmptyComponent<ArtImagePreviewModel>;

export default ArtImagePreview;
