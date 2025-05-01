import { BannerModel } from "../BannerModel";
import "./banner.scss";

export const ELEMENT_NAME = "banner";

export default function Banner({
	model: { modelInstance },
}: {
	model: BannerModel;
}) {
	return (
		<div
			className={ELEMENT_NAME}
			id={modelInstance.id}
			data-testid={ELEMENT_NAME}
		>
			<span className="banner-text">{modelInstance.bannerText}</span>
		</div>
	);
}
