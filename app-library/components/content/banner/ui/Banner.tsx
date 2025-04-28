import { BannerModel } from "../BannerModel";
import "./banner.scss";

export default function Banner({
	model: { modelInstance },
}: {
	model: BannerModel;
}) {
	return (
		<div className="banner" id={modelInstance.id} data-testid={"banner"}>
			<span className="banner-text">{modelInstance.bannerText}</span>
		</div>
	);
}
