import { ModeledContainerComponent } from "@mvc-react/components";
import { SiteSectionModel } from "../site-section";
import "./site-section.scss";

export const ELEMENT_NAME = "site-section";

const SiteSection = function ({ model, children }) {
	const { id, sectionName, sectionTitle } = model.modelView;

	return (
		<section
			className={ELEMENT_NAME}
			id={id}
			data-sectionname={sectionName}
			data-testid={ELEMENT_NAME}
		>
			<div className="background-layer">
				<div className="content-layer">
					<h3 className="section-title">{sectionTitle}</h3>
					{children}
				</div>
			</div>
		</section>
	);
} as ModeledContainerComponent<SiteSectionModel>;

export default SiteSection;
