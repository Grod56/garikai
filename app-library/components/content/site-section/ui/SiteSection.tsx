import { SiteSectionModel } from "../SiteSectionModel";
import "./site-section.scss";

export const ELEMENT_NAME = "site-section";

export default function SiteSection({
	model,
	children,
}: {
	model: SiteSectionModel;
	children: React.ReactNode;
}) {
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
}
