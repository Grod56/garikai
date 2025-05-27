import ImageCard from "@/app-library/components/widget/image-card/ui/ImageCard";
import LinkedComponent from "@/app-library/components/widget/linked-component/ui/LinkedComponent";
import { ELEMENT_NAME } from "./PostPreview";
import { FeaturedPostPreviewModel } from "../featured-post-preview-model";
import "./post-preview.scss";

import { newReadonlyModel } from "@mvc-react/mvc";
import { ModeledVoidComponent } from "@mvc-react/components";

export { ELEMENT_NAME };

const FeaturedPostPreview = function ({ model }) {
	const { id, title, snippet, byline, thumbnail, postLink } = model.modelView;

	return (
		<div className={ELEMENT_NAME} id={id} data-testid={ELEMENT_NAME}>
			<LinkedComponent
				model={newReadonlyModel({
					link: postLink,
				})}
			>
				<ImageCard
					model={newReadonlyModel({
						thumbnail: thumbnail,
						orientation: "flexible",
					})}
				>
					<h5 className="title" title={title}>
						{title}
					</h5>
					<span className="snippet">{snippet}</span>
					<span className="byline">{byline}</span>
				</ImageCard>
			</LinkedComponent>
		</div>
	);
} as ModeledVoidComponent<FeaturedPostPreviewModel>;

export default FeaturedPostPreview;
