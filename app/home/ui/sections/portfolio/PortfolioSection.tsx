import SiteSection from "@/app-library/components/content/site-section/ui/SiteSection";
import PortfolioItem from "@/app-library/components/content/portfolio-item/ui/PortfolioItem";
import {
	ComponentList,
	ComponentPlaceholder,
	ModeledVoidComponent,
} from "@mvc-react/components";
import { newReadonlyModel } from "@mvc-react/mvc";
import "./portfolio.scss";
import { PortfolioSectionModel } from "./PortfolioSectionModel";
import { useStatefulRepository } from "@/app-library/utilities/use-repository";
import { newStatifiableModel } from "@/app-library/utilities/miscelleneous";
import { newPortfolioItemRepositoryVIInterface } from "@/app-library/default-implementations/content-repositories/portfolio-item";
import { PortfolioItemModel } from "@/app-library/components/content/portfolio-item/portfolio-item";
import ImageCardSkeleton from "@/app-library/components/widget/image-card-skeleton/ui/ImageCardSkeleton";
import { ImageCardSkeletonModel } from "@/app-library/components/widget/image-card-skeleton/image-card";

const PortfolioSection = function ({ model }) {
	const { sectionTitle, portfolioItemAPI } = model.modelView;
	const { modelView: repositoryModelView } = useStatefulRepository(
		newStatifiableModel(
			newPortfolioItemRepositoryVIInterface(portfolioItemAPI)
		)
	);

	return (
		<SiteSection
			model={newReadonlyModel({
				id: "portfolio",
				sectionName: "portfolio",
				sectionTitle: sectionTitle,
			})}
		>
			<div className="portfolio-items-container">
				<ComponentPlaceholder
					model={newReadonlyModel({
						PlaceholderedComponent:
							ComponentList<PortfolioItemModel>,

						placeholderedComponentModel:
							repositoryModelView?.portfolioItemModels &&
							newReadonlyModel({
								Component: PortfolioItem,
								componentModels:
									repositoryModelView.portfolioItemModels,
							}),

						PlaceholderComponent: () => (
							<ComponentList
								model={newReadonlyModel({
									Component: ImageCardSkeleton,
									componentModels:
										Array<ImageCardSkeletonModel>(3).fill(
											newReadonlyModel({
												orientation: "flexible",
											})
										),
								})}
							/>
						),
					})}
				/>
			</div>
		</SiteSection>
	);
} as ModeledVoidComponent<PortfolioSectionModel>;

export default PortfolioSection;
