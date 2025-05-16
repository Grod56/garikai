import SiteSection from "@/app-library/components/content/site-section/ui/SiteSection";
import GridContainer from "@/app-library/components/widget/grid-container/ui/GridContainer";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { instantiateBookPreviewRepositoryModel } from "@/app-library/default-implementations/content-repositories/BookPreviewRepositoryModelInstantiator";
import { instantiateReadonlyModel } from "@/app-library/utilities/miscelleneous";
import { useStatefulRepository } from "@/app-library/utilities/use-repository";
import BookPreviewsPlaceholder from "./book-previews-placeholder/BookPreviewsPlaceholder";
import { ReadingListSectionModel } from "./ReadingListSectionModel";

const ReadingListSection = function ({ model }) {
	const { sectionTitle, bookPreviewAPI } = model.modelView;
	const { modelView: repositoryModelView } = useStatefulRepository(() =>
		instantiateBookPreviewRepositoryModel(bookPreviewAPI)
	);

	return (
		<SiteSection
			model={instantiateReadonlyModel({
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
				model={instantiateReadonlyModel({
					maxXorY: 2,
					orientation: "horizontal",
					overflow: false,
				})}
			>
				<BookPreviewsPlaceholder
					model={instantiateReadonlyModel({
						bookPreviewModels:
							repositoryModelView?.bookPreviewModels,
					})}
				/>
			</GridContainer>
		</SiteSection>
	);
} as ModeledVoidComponent<ReadingListSectionModel>;

export default ReadingListSection;
