import { SiteSectionModel } from "../SiteSectionModel";
import "./site-section.scss";

export default function SiteSection({
	model: { modelInstance },
	children,
}: {
	model: SiteSectionModel;
	children: React.ReactNode;
}) {
	return (
		<section
			className="site-section"
			id={modelInstance.id}
			data-sectionname={modelInstance.sectionName}
			data-testid="site-section"
		>
			<div className="background-layer">
				<div className="content-layer">
					<h3 className="section-title">
						{modelInstance.sectionTitle}
					</h3>
					{children}
				</div>
			</div>
		</section>
	);
}
