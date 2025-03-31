import { BannerModelInstance } from "./BannerModel";

export default function Banner({
	bannerModelInstance,
}: {
	bannerModelInstance: BannerModelInstance;
}) {
	return (
		<div
			className={bannerModelInstance.compositeClassNameString}
			id={bannerModelInstance.id}
			data-testid={bannerModelInstance.id}
		>
			<span className="banner-text" data-testid="bannerText">
				{bannerModelInstance.bannerText}
			</span>
		</div>
	);
}
