import Home from "./ui/sections/main/views/Home";
import homeModelInstantiator from "./ui/sections/main/views/HomeModel";
import postPreviewModelInstantiator from "./ui/sections/main/components/content/post-preview/PostPreviewModel";
import bookPreviewModelInstantiator from "./ui/sections/main/components/content/book-preview/BookPreviewModel";
import artImageModelInstantiator from "./ui/sections/main/components/content/art-image/ArtImageModel";
import siteSectionModelInstantiator from "./ui/sections/main/components/widgets/site-section/SiteSectionModel";
import carouselModelInstantiator from "./ui/sections/main/components/widgets/carousel/CarouselModel";
import comingSoonBannerModelInstantiator from "./ui/sections/main/components/widgets/coming-soon-banner/ComingSoonBannerModel";
import imageCardSkeletonModelInstantiator from "./ui/sections/main/components/widgets/image-card/image-card-skeleton/ImageCardSkeletonModel";
import siteSubsectionModelInstantiator from "./ui/sections/main/components/widgets/site-section/site-subsection/SiteSubsectionModel";
import gridContainerModelInstantiator from "./ui/sections/main/components/widgets/grid-container/GridContainerModel";

export default function Page() {
	const postPreviewEndpoint: URL = new URL(
		"https://www.googleapis.com/blogger/v3/blogs/5898866324901103466/posts?key=AIzaSyAYna19D_n2GTUDrowo0s2MVpm2JTluMK8&fetchImages=true&maxResults=3"
	);

	return (
		<Home
			homeModelInstance={
				//TODO: Will need to be fixed
				JSON.parse(
					JSON.stringify(
						homeModelInstantiator.instantiate(
							"home",
							postPreviewModelInstantiator,
							bookPreviewModelInstantiator,
							artImageModelInstantiator,
							siteSectionModelInstantiator,
							carouselModelInstantiator,
							comingSoonBannerModelInstantiator,
							imageCardSkeletonModelInstantiator,
							siteSubsectionModelInstantiator,
							gridContainerModelInstantiator,
							postPreviewEndpoint
						)
					)
				)
			}
		/>
	);
}
