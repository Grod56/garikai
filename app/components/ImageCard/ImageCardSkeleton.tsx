import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { ImageCardSkeletonModel } from "./ImageCardSkeletonModel";
import 'react-loading-skeleton/dist/skeleton.css';

export default function ImageCardSkeleton ({
    imageCardSkeletonModel
}: {
    imageCardSkeletonModel: ImageCardSkeletonModel
}) {
    return (
        <SkeletonTheme baseColor="#00080a90" highlightColor='#11111190'>
            <Skeleton count={5} containerClassName={imageCardSkeletonModel.nameOfClass}/>
        </SkeletonTheme>
    )
}