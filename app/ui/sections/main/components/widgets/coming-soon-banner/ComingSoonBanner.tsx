import { ComingSoonBannerModelInstance } from "./ComingSoonBannerModel";

export default function ComingSoonBanner({
	comingSoonBannerModelInstance,
}: {
	comingSoonBannerModelInstance: ComingSoonBannerModelInstance;
}) {
	return (
		<div
			className={comingSoonBannerModelInstance.compositeClassNameString}
			id={comingSoonBannerModelInstance.id}
			data-testid={comingSoonBannerModelInstance.id}
		>
			<span className="banner-text" data-testid="bannerText">
				{comingSoonBannerModelInstance.bannerText}
			</span>
		</div>
	);
}
