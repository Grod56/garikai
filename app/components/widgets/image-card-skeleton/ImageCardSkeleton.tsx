import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { ImageCardSkeletonModelInstance } from "./ImageCardSkeletonModel";
import "react-loading-skeleton/dist/skeleton.css";

export default function ImageCardSkeleton({
	imageCardSkeletonModelInstance,
}: {
	imageCardSkeletonModelInstance: ImageCardSkeletonModelInstance;
}) {
	return (
		// TODO: Tidy this up
		<SkeletonTheme baseColor="#00080a90" highlightColor="#11111190">
			<Skeleton
				containerClassName={
					imageCardSkeletonModelInstance.compositeClassNameString
				}
				containerTestId={imageCardSkeletonModelInstance.id}
				count={5}
			/>
		</SkeletonTheme>
	);
}
