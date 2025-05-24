import { PostPreviewModel } from "@/app-library/components/content/post-preview/PostPreviewModel";
import PostPreview from "@/app-library/components/content/post-preview/ui/PostPreview";
import { ImageCardSkeletonModel } from "@/app-library/components/widget/image-card-skeleton/ImageCardSkeletonModel";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import ImageCardSkeleton from "@/app-library/components/widget/image-card-skeleton/ui/ImageCardSkeleton";
import { RecentPostPreviewsPlaceholderModel } from "./RecentPostPreviewsPlaceholderModel";
import { newReadonlyModel } from "@mvc-react/mvc";
import {
	PlaceholderedComponentModel,
	ComponentListModel,
	ComponentList,
	ComponentPlaceholder,
} from "@mvc-react/components";

const RecentPostPreviewsPlaceholder = function ({ model }) {
	const { recentPostPreviewModels } = model.modelView;

	const RecentPostPreviewsContainerComponent =
		ComponentList<PostPreviewModel>;

	const recentPostPreviewsContainerComponentModel: PlaceholderedComponentModel<
		ComponentListModel<PostPreviewModel>
	> =
		recentPostPreviewModels &&
		newReadonlyModel({
			componentModels: recentPostPreviewModels,
			Component: PostPreview,
		});

	const PlaceholderComponent = () => (
		<ComponentList
			model={newReadonlyModel({
				Component: ImageCardSkeleton,
				componentModels: Array<ImageCardSkeletonModel>(3).fill(
					newReadonlyModel({
						orientation: "vertical",
					})
				),
			})}
		/>
	);

	return (
		<ComponentPlaceholder
			model={newReadonlyModel({
				PlaceholderedComponent: RecentPostPreviewsContainerComponent,
				placeholderedComponentModel:
					recentPostPreviewsContainerComponentModel,
				PlaceholderComponent,
			})}
		/>
	);
} as ModeledVoidComponent<RecentPostPreviewsPlaceholderModel>;

export default RecentPostPreviewsPlaceholder;
