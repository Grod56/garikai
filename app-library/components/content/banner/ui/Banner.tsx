import { BannerModel } from "../BannerModel";
import "./banner.scss";

export const ELEMENT_NAME = "banner";

export default function Banner({ model }: { model: BannerModel }) {
	const { id, bannerText } = model.modelView;

	return (
		<div className={ELEMENT_NAME} id={id} data-testid={ELEMENT_NAME}>
			<span className="banner-text">{bannerText}</span>
		</div>
	);
}
