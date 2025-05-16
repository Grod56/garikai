import { PostPreviewModel } from "@/app-library/components/content/post-preview/PostPreviewModel";
import PostPreview from "@/app-library/components/content/post-preview/ui/PostPreview";
import ComponentList from "@/app-library/components/ethereal/component-list/ComponentList";
import { ImageCardSkeletonModel } from "@/app-library/components/widget/image-card-skeleton/ImageCardSkeletonModel";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { instantiateReadonlyModel } from "@/app-library/utilities/miscelleneous";
import ComponentPlaceholder from "../../../../../../app-library/components/ethereal/component-placeholder/ComponentPlaceholder";
import ImageCardSkeleton from "../../../../../../app-library/components/widget/image-card-skeleton/ui/ImageCardSkeleton";
import { RecentPostPreviewsPlaceholderModel } from "./RecentPostPreviewsPlaceholderModel";
import { PlaceholderedComponentModel } from "@/app-library/components/ethereal/component-placeholder/ComponentPlaceholderModel";
import { ComponentListModel } from "@/app-library/components/ethereal/component-list/ComponentListModel";

const RecentPostPreviewsPlaceholder = function ({ model }) {
	const { recentPostPreviewModels } = model.modelView;

	const RecentPostPreviewsContainerComponent =
		ComponentList<PostPreviewModel>;
	const recentPostPreviewsContainerComponentModel: PlaceholderedComponentModel<
		ComponentListModel<PostPreviewModel>
	> =
		recentPostPreviewModels &&
		instantiateReadonlyModel({
			componentModels: recentPostPreviewModels,
			Component: PostPreview,
		});
	const PlaceholderComponent = () => (
		<ComponentList
			model={instantiateReadonlyModel({
				Component: ImageCardSkeleton,
				componentModels: Array<ImageCardSkeletonModel>(3).fill(
					instantiateReadonlyModel({
						orientation: "vertical",
					})
				),
			})}
		/>
	);

	return (
		<ComponentPlaceholder
			model={{
				modelView: {
					PlaceholderedComponent:
						RecentPostPreviewsContainerComponent,
					placeholderedComponentModel:
						recentPostPreviewsContainerComponentModel,
					PlaceholderComponent,
				},
			}}
		/>
	);
} as ModeledVoidComponent<RecentPostPreviewsPlaceholderModel>;

export default RecentPostPreviewsPlaceholder;
