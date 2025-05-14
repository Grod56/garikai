import SiteSection from "@/app-library/components/content/site-section/ui/SiteSection";
import GridContainer from "@/app-library/components/widget/grid-container/ui/GridContainer";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { instantiateBookPreviewRepositoryModel } from "@/app-library/default-implementations/content-repositories/BookPreviewRepositoryModelInstantiator";
import { instantiateGridContainerModel } from "@/app-library/default-implementations/model-instantiators/GridContainerModelInstantiator";
import { instantiateSiteSectionModel } from "@/app-library/default-implementations/model-instantiators/SiteSectionModelInstantiator";
import { useRepository } from "@/app-library/utilities/use-repository";
import BookPreviewsPlaceholder from "./book-previews-placeholder/BookPreviewsPlaceholder";
import { ReadingListSectionModel } from "./ReadingListSectionModel";

const ReadingListSection = function ({ model }) {
	const { sectionTitle, bookPreviewAPI } = model.modelView;
	const { modelView: repositoryModelView } = useRepository(() =>
		instantiateBookPreviewRepositoryModel(bookPreviewAPI)
	);

	return (
		<SiteSection
			model={instantiateSiteSectionModel({
				id: "reading-list",
				sectionName: "reading-list",
				sectionTitle: sectionTitle,
			})}
		>
			<p>
				Collection of material that has greatly influenced the way I
				think—together with stuff I&apos;m currently working on. Will
				probably split these into their appropriate categories for
				clarity in the near future.
			</p>
			<GridContainer
				model={instantiateGridContainerModel({
					maxXorY: 2,
					orientation: "horizontal",
					overflow: false,
				})}
			>
				<BookPreviewsPlaceholder
					model={{
						modelView: {
							placeholderedBookPreviewModels:
								repositoryModelView?.bookPreviewModels,
						},
					}}
				/>
			</GridContainer>
		</SiteSection>
	);
} as ModeledVoidComponent<ReadingListSectionModel>;

export default ReadingListSection;
