import { ModelInstantiator, ClassName } from "@/app/ui/Model";
import { ModelInstantiatorIncarnation } from "@/app/ui/ModelIncarnation";
import artImageModelInstantiator, {
	ArtImageModelInstantiator,
} from "../components/content/art-image/ArtImageModel";
import bookPreviewModelInstantiator, {
	BookPreviewModelInstantiator,
} from "../components/content/book-preview/BookPreviewModel";
import postPreviewModelInstantiator, {
	PostPreviewModelInstantiator,
} from "../components/content/post-preview/PostPreviewModel";
import carouselModelInstantiator, {
	CarouselModelInstantiator,
} from "../components/widgets/carousel-widget/CarouselModel";
import comingSoonBannerModelInstantiator, {
	ComingSoonBannerModelInstantiator,
} from "../components/widgets/coming-soon-banner/ComingSoonBannerModel";
import gridContainerModelInstantiator, {
	GridContainerModelInstantiator,
} from "../components/widgets/grid-container/GridContainerModel";
import imageCardSkeletonModelInstantiator, {
	ImageCardSkeletonModelInstantiator,
} from "../components/widgets/image-card/image-card-skeleton/ImageCardSkeletonModel";
import siteSubsectionModelInstantiator, {
	SiteSubsectionModelInstantiator,
} from "../components/widgets/site-section/site-subsection/SiteSubsectionModel";
import siteSectionModelInstantiator, {
	SiteSectionModelInstantiator,
} from "../components/widgets/site-section/SiteSectionModel";
import { MainModelInstance, MainModelInstanceIncarnation } from "../MainModel";

const CLASS_NAME = "home";

export interface HomeModelInstance extends MainModelInstance {
	readonly postPreviewModelInstantiator: PostPreviewModelInstantiator;
	readonly bookPreviewModelInstantiator: BookPreviewModelInstantiator;
	readonly artImageModelInstantiator: ArtImageModelInstantiator;
	readonly siteSectionModelInstantiator: SiteSectionModelInstantiator;
	readonly carouselModelInstantiator: CarouselModelInstantiator;
	readonly comingSoonBannerModelInstantiator: ComingSoonBannerModelInstantiator;
	readonly imageCardSkeletonModelInstantiator: ImageCardSkeletonModelInstantiator;
	readonly siteSubsectionModelInstantiator: SiteSubsectionModelInstantiator;
	readonly gridContainerModelInstantiator: GridContainerModelInstantiator;
	readonly postPreviewEndpoint: URL;
}

export interface HomeModelInstantiator extends ModelInstantiator {
	instantiate(
		id: string,
		postPreviewModelInstantiator: PostPreviewModelInstantiator,
		bookPreviewModelInstantiator: BookPreviewModelInstantiator,
		artImageModelInstantiator: ArtImageModelInstantiator,
		siteSectionModelInstantiator: SiteSectionModelInstantiator,
		carouselModelInstantiator: CarouselModelInstantiator,
		comingSoonBannerModelInstantiator: ComingSoonBannerModelInstantiator,
		imageCardSkeletonModelInstantiator: ImageCardSkeletonModelInstantiator,
		siteSubsectionModelInstantiator: SiteSubsectionModelInstantiator,
		gridContainerModelInstantiator: GridContainerModelInstantiator,
		postPreviewEndpoint: URL
	): HomeModelInstance;
}

export abstract class HomeModelInstanceIncarnation
	extends MainModelInstanceIncarnation
	implements HomeModelInstance
{
	constructor(
		id: string,
		readonly postPreviewModelInstantiator: PostPreviewModelInstantiator,
		readonly bookPreviewModelInstantiator: BookPreviewModelInstantiator,
		readonly artImageModelInstantiator: ArtImageModelInstantiator,
		readonly siteSectionModelInstantiator: SiteSectionModelInstantiator,
		readonly carouselModelInstantiator: CarouselModelInstantiator,
		readonly comingSoonBannerModelInstantiator: ComingSoonBannerModelInstantiator,
		readonly imageCardSkeletonModelInstantiator: ImageCardSkeletonModelInstantiator,
		readonly siteSubsectionModelInstantiator: SiteSubsectionModelInstantiator,
		readonly gridContainerModelInstantiator: GridContainerModelInstantiator,
		readonly postPreviewEndpoint: URL
	) {
		super(id);
		this.homeModelInstanceClassName = { getClassNameString: CLASS_NAME };
	}
	readonly homeModelInstanceClassName: ClassName<typeof CLASS_NAME>;
}

export abstract class HomeModelInstantiatorIncarnation
	extends ModelInstantiatorIncarnation
	implements HomeModelInstantiator
{
	abstract instantiate(
		id: string,
		postPreviewModelInstantiator: PostPreviewModelInstantiator,
		bookPreviewModelInstantiator: BookPreviewModelInstantiator,
		artImageModelInstantiator: ArtImageModelInstantiator,
		siteSectionModelInstantiator: SiteSectionModelInstantiator,
		carouselModelInstantiator: CarouselModelInstantiator,
		comingSoonBannerModelInstantiator: ComingSoonBannerModelInstantiator,
		imageCardSkeletonModelInstantiator: ImageCardSkeletonModelInstantiator,
		siteSubsectionModelInstantiator: SiteSubsectionModelInstantiator,
		gridContainerModelInstantiator: GridContainerModelInstantiator,
		postPreviewEndpoint: URL
	): HomeModelInstanceIncarnation;
}

class _HomeModelInstanceIncarnationImplementation extends HomeModelInstanceIncarnation {
	constructor(
		id: string,
		postPreviewModelInstantiator: PostPreviewModelInstantiator,
		bookPreviewModelInstantiator: BookPreviewModelInstantiator,
		artImageModelInstantiator: ArtImageModelInstantiator,
		siteSectionModelInstantiator: SiteSectionModelInstantiator,
		carouselModelInstantiator: CarouselModelInstantiator,
		comingSoonBannerModelInstantiator: ComingSoonBannerModelInstantiator,
		imageCardSkeletonModelInstantiator: ImageCardSkeletonModelInstantiator,
		siteSubsectionModelInstantiator: SiteSubsectionModelInstantiator,
		gridContainerModelInstantiator: GridContainerModelInstantiator,
		postPreviewEndpoint: URL
	) {
		super(
			id,
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
		);
	}
}

class _HomeModelInstantiatorIncarnationImplementation extends HomeModelInstantiatorIncarnation {
	instantiate(
		id: string,
		postPreviewModelInstantiator: PostPreviewModelInstantiator,
		bookPreviewModelInstantiator: BookPreviewModelInstantiator,
		artImageModelInstantiator: ArtImageModelInstantiator,
		siteSectionModelInstantiator: SiteSectionModelInstantiator,
		carouselModelInstantiator: CarouselModelInstantiator,
		comingSoonBannerModelInstantiator: ComingSoonBannerModelInstantiator,
		imageCardSkeletonModelInstantiator: ImageCardSkeletonModelInstantiator,
		siteSubsectionModelInstantiator: SiteSubsectionModelInstantiator,
		gridContainerModelInstantiator: GridContainerModelInstantiator,
		postPreviewEndpoint: URL
	): HomeModelInstanceIncarnation {
		return new _HomeModelInstanceIncarnationImplementation(
			id,
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
		);
	}
}

export function parseJSONToModelInstance(object: any): HomeModelInstance {
	if (
		object.homeModelInstanceClassName &&
		object.homeModelInstanceClassName.getClassNameString == CLASS_NAME &&
		object.id &&
		typeof object.id === "string" &&
		object.postPreviewEndpoint &&
		new URL(object.postPreviewEndpoint)
	) {
		return new _HomeModelInstantiatorIncarnationImplementation().instantiate(
			object.id,
			postPreviewModelInstantiator,
			bookPreviewModelInstantiator,
			artImageModelInstantiator,
			siteSectionModelInstantiator,
			carouselModelInstantiator,
			comingSoonBannerModelInstantiator,
			imageCardSkeletonModelInstantiator,
			siteSubsectionModelInstantiator,
			gridContainerModelInstantiator,
			new URL(object.postPreviewEndpoint)
		);
	}
	throw new Error(
		"Could not parse object: Passed object is not valid HomeModelInstance"
	);
}

export default new _HomeModelInstantiatorIncarnationImplementation() as HomeModelInstantiator;
