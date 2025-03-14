import { ClassName, ModelInstantiator } from "@/app/ui/Model";
import { ArtImageModelInstantiator, ArtImageModelInstantiatorIncarnationImplementation } from "../components/content/ArtImage/ArtImageModel";
import { BookPreviewModelInstantiator, BookPreviewModelInstantiatorIncarnationImplementation } from "../components/content/BookPreview/BookPreviewModel";
import { PostPreviewModelInstantiator, PostPreviewModelInstantiatorIncarnationImplementation } from "../components/content/PostPreview/PostPreviewModel";
import { CarouselModelInstantiator, CarouselModelInstantiatorIncarnationImplementation } from "../components/widgets/Carousel/CarouselModel";
import { GridContainerModelInstantiator, GridContainerModelInstantiatorIncarnationImplementation } from "../components/widgets/GridContainer/GridContainerModel";
import { ImageCardSkeletonModelInstantiator, ImageCardSkeletonModelInstantiatorIncarnationImplementation } from "../components/widgets/ImageCard/ImageCardSkeletonModel";
import { SiteSectionModelInstantiator, SiteSectionModelInstantiatorIncarnationImplementation } from "../components/widgets/SiteSection/SiteSectionModel";
import { SiteSubsectionModelInstantiator, SiteSubsectionModelInstantiatorIncarnationImplementation } from "../components/widgets/SiteSection/SiteSubsection/SiteSubsectionModel";
import { MainModelInstance, MainModelInstanceIncarnation } from "../MainModel";
import { ModelInstantiatorIncarnation } from "@/app/ui/ModelIncarnation";
import { ComingSoonBannerModelInstantiator, ComingSoonBannerModelInstantiatorIncarnationImplementation } from "../components/widgets/ComingSoonBanner/ComingSoonBannerModel";

const CLASS_NAME = 'home';

export interface HomeModelInstance extends MainModelInstance {

    readonly homeModelInstanceClassName: ClassName<typeof CLASS_NAME>
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

export abstract class HomeModelInstanceIncarnation extends MainModelInstanceIncarnation implements HomeModelInstance {
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
        this.homeModelInstanceClassName = { getClassNameString: CLASS_NAME }
    }
    homeModelInstanceClassName: ClassName<typeof CLASS_NAME>;
}

export abstract class HomeModelInstantiatorIncarnation extends ModelInstantiatorIncarnation implements HomeModelInstantiator {
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
    ){
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

export class HomeModelInstantiatorIncarnationImplementation extends HomeModelInstantiatorIncarnation {
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
    if (object.homeModelInstanceClassName
        && object.homeModelInstanceClassName.getClassNameString == CLASS_NAME
        && object.id && typeof object.id === 'string'
        && object.postPreviewEndpoint && new URL(object.postPreviewEndpoint)
    ) {
        
        return new HomeModelInstantiatorIncarnationImplementation().instantiate(
            object.id,
            new PostPreviewModelInstantiatorIncarnationImplementation(),
            new BookPreviewModelInstantiatorIncarnationImplementation(),
            new ArtImageModelInstantiatorIncarnationImplementation(),
            new SiteSectionModelInstantiatorIncarnationImplementation(),
            new CarouselModelInstantiatorIncarnationImplementation(),
            new ComingSoonBannerModelInstantiatorIncarnationImplementation(),
            new ImageCardSkeletonModelInstantiatorIncarnationImplementation(),
            new SiteSubsectionModelInstantiatorIncarnationImplementation(),
            new GridContainerModelInstantiatorIncarnationImplementation(),
            new URL(object.postPreviewEndpoint)
        );
    }
    throw new Error('Could not parse object: Passed object is not valid HomeModelInstance');
}