import SiteSection from "@/app-library/components/content/site-section/ui/SiteSection";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { instantiateBookPreviewRepositoryModel } from "@/app-library/default-implementations/content-repositories/BookPreviewRepositoryModelInstantiator";
import { useStatefulRepository } from "@/app-library/utilities/use-repository";
import BookPreviewsPlaceholder from "./book-previews-placeholder/BookPreviewsPlaceholder";
import { ReadingListSectionModel } from "./ReadingListSectionModel";
import { newReadonlyModel } from "@mvc-react/mvc";
import "./reading-list.scss";

const ReadingListSection = function ({ model }) {
	const { sectionTitle, bookPreviewAPI } = model.modelView;
	const { modelView: repositoryModelView } = useStatefulRepository(() =>
		instantiateBookPreviewRepositoryModel(bookPreviewAPI)
	);

	return (
		<SiteSection
			model={newReadonlyModel({
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
			<div className="book-previews-container">
				<BookPreviewsPlaceholder
					model={newReadonlyModel({
						bookPreviewModels:
							repositoryModelView?.bookPreviewModels,
					})}
				/>
			</div>
		</SiteSection>
	);
} as ModeledVoidComponent<ReadingListSectionModel>;

export default ReadingListSection;
