import { ModeledVoidComponent } from "@mvc-react/components";
import { PortfolioItemModel } from "../portfolio-item";
import LinkedComponent from "@/app-library/components/widget/linked-component/ui/LinkedComponent";
import { newReadonlyModel } from "@mvc-react/mvc";
import ImageCard from "@/app-library/components/widget/image-card/ui/ImageCard";
import "./portfolio-item.scss";

export const ELEMENT_NAME = "portfolio-item";

const PortfolioItem = function ({ model }) {
	const { id, title, description, category, thumbnail, link } =
		model.modelView;

	return (
		<div className={ELEMENT_NAME} id={id} data-testid={ELEMENT_NAME}>
			<LinkedComponent model={newReadonlyModel({ link })}>
				<ImageCard
					model={newReadonlyModel({
						thumbnail,
						orientation: "flexible",
					})}
				>
					<span className="title">{title}</span>
					<span className="description">{description}</span>
					<span className="category-container">
						categories: <span className="category">{category}</span>
					</span>
				</ImageCard>
			</LinkedComponent>
		</div>
	);
} as ModeledVoidComponent<PortfolioItemModel>;

export default PortfolioItem;
