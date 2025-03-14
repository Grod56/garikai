import Home from "./ui/sections/main/views/Home";
import { HomeModelInstantiator, HomeModelInstantiatorIncarnationImplementation } from "./ui/sections/main/views/HomeModel";
import { PostPreviewModelInstantiator, PostPreviewModelInstantiatorIncarnationImplementation } from "./ui/sections/main/components/content/PostPreview/PostPreviewModel";
import { BookPreviewModelInstantiator, BookPreviewModelInstantiatorIncarnationImplementation } from "./ui/sections/main/components/content/BookPreview/BookPreviewModel";
import { ArtImageModelInstantiator, ArtImageModelInstantiatorIncarnationImplementation } from "./ui/sections/main/components/content/ArtImage/ArtImageModel";
import { SiteSectionModelInstantiator, SiteSectionModelInstantiatorIncarnationImplementation } from "./ui/sections/main/components/widgets/SiteSection/SiteSectionModel";
import { CarouselModelInstantiator, CarouselModelInstantiatorIncarnationImplementation } from "./ui/sections/main/components/widgets/Carousel/CarouselModel";
import { ComingSoonBannerModelInstantiator, ComingSoonBannerModelInstantiatorIncarnationImplementation } from "./ui/sections/main/components/widgets/ComingSoonBanner/ComingSoonBannerModel";
import { ImageCardSkeletonModelInstantiator, ImageCardSkeletonModelInstantiatorIncarnationImplementation } from "./ui/sections/main/components/widgets/ImageCard/ImageCardSkeletonModel";
import { SiteSubsectionModelInstantiator, SiteSubsectionModelInstantiatorIncarnationImplementation } from "./ui/sections/main/components/widgets/SiteSection/SiteSubsection/SiteSubsectionModel";
import { GridContainerModelInstantiator, GridContainerModelInstantiatorIncarnationImplementation } from "./ui/sections/main/components/widgets/GridContainer/GridContainerModel";

export default function Page() {

	const homeModelInstantiator: HomeModelInstantiator = 
		new HomeModelInstantiatorIncarnationImplementation();

	const postPreviewModelInstantiator: PostPreviewModelInstantiator =
		new PostPreviewModelInstantiatorIncarnationImplementation();

	const bookPreviewModelInstantiator: BookPreviewModelInstantiator =
		new BookPreviewModelInstantiatorIncarnationImplementation();

	const artImageModelInstantiator: ArtImageModelInstantiator =
		new ArtImageModelInstantiatorIncarnationImplementation();

	const siteSectionModelInstantiator: SiteSectionModelInstantiator =
		new SiteSectionModelInstantiatorIncarnationImplementation();

	const carouselModelInstantiator: CarouselModelInstantiator =
		new CarouselModelInstantiatorIncarnationImplementation();

	const comingSoonBannerInstantiator: ComingSoonBannerModelInstantiator =
		new ComingSoonBannerModelInstantiatorIncarnationImplementation();

	const imageCardSkeletonModelInstantiator: ImageCardSkeletonModelInstantiator =
		new ImageCardSkeletonModelInstantiatorIncarnationImplementation();

	const siteSubsectionModelInstantiator: SiteSubsectionModelInstantiator =
		new SiteSubsectionModelInstantiatorIncarnationImplementation();

	const gridContainerModelInstantiator: GridContainerModelInstantiator =
		new GridContainerModelInstantiatorIncarnationImplementation();

	const postPreviewEndpoint: URL =
		new URL("https://www.googleapis.com/blogger/v3/blogs/5898866324901103466/posts?key=AIzaSyAYna19D_n2GTUDrowo0s2MVpm2JTluMK8&fetchImages=true&maxResults=3");
		
	return (
		<Home homeModelInstance={
			//TODO: Will need to be fixed
			JSON.parse(JSON.stringify(homeModelInstantiator.instantiate(
				'home',
				postPreviewModelInstantiator,
				bookPreviewModelInstantiator,
				artImageModelInstantiator,
				siteSectionModelInstantiator,
				carouselModelInstantiator,
				comingSoonBannerInstantiator,
				imageCardSkeletonModelInstantiator,
				siteSubsectionModelInstantiator,
				gridContainerModelInstantiator,
				postPreviewEndpoint
			)))
		}/>
	);
}
