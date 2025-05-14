import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { BannerModel } from "../BannerModel";
import "./banner.scss";

export const ELEMENT_NAME = "banner";

const Banner = function ({ model }) {
	const { bannerText } = model.modelView;

	return (
		<div className={ELEMENT_NAME} data-testid={ELEMENT_NAME}>
			<span className="banner-text">{bannerText}</span>
		</div>
	);
} as ModeledVoidComponent<BannerModel>;

export default Banner;
