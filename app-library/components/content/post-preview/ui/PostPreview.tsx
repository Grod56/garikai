import ImageCard from "@/app-library/components/widget/image-card/ui/ImageCard";
import LinkedComponent from "@/app-library/components/widget/linked-component/ui/LinkedComponent";
import { PostPreviewModel } from "../post-preview";
import "./post-preview.scss";

import { newReadonlyModel } from "@mvc-react/mvc";
import { ModeledVoidComponent } from "@mvc-react/components";

export const ELEMENT_NAME = "post-preview";

const PostPreview = function ({ model }) {
	const { id, title, byline, thumbnail, postLink } = model.modelView;

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
						orientation: "vertical",
					})}
				>
					<h5 className="title" title={title}>
						{title}
					</h5>
					<span className="byline">{byline}</span>
				</ImageCard>
			</LinkedComponent>
		</div>
	);
} as ModeledVoidComponent<PostPreviewModel>;

export default PostPreview;
