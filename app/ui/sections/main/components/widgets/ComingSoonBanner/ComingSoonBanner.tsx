import { ComingSoonBannerModelInstance } from "./ComingSoonBannerModel"

export default function ComingSoonBanner({
    comingSoonBannerModelInstance
}: {
    comingSoonBannerModelInstance: ComingSoonBannerModelInstance
}) {
    return (
        <div className={
            comingSoonBannerModelInstance.compositeClassNameString}
            id={comingSoonBannerModelInstance.id}
        >
            <span className="coming-soon-text">{comingSoonBannerModelInstance.bannerText}</span>
        </div>
    )
}