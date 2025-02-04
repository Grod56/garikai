import { ComingSoonBannerModel } from "./ComingSoonBannerModel"

export default function ComingSoonBanner({
    comingSoonBannerModel
}: {
    comingSoonBannerModel: ComingSoonBannerModel
}) {
    return (
        <div className={comingSoonBannerModel.nameOfClass}>
            <span className="coming-soon-text">{comingSoonBannerModel.comingSoonText}</span>
        </div>
    )
}