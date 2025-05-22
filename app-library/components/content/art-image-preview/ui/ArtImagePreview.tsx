import Image from "@/app-library/components/widget/image/ui/Image";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { ArtImagePreviewModel } from "../ArtImagePreviewModel";
import "./art-image-preview.scss";
import { newReadonlyModel } from "@mvc-react/mvc";

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
				model={newReadonlyModel({
					image: image,
					width: 520,
					height: 410,
				})}
			/>
		</div>
	);
} as ModeledVoidComponent<ArtImagePreviewModel>;

export default ArtImagePreview;
