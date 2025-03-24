import { SiteSectionModelInstance } from "./SiteSectionModel";

export default function SiteSection({
	siteSectionModelInstance,
	bottomRule = true,
	children,
}: {
	siteSectionModelInstance: SiteSectionModelInstance;
	bottomRule?: boolean; // TODO: To be fixed
	children: React.ReactNode;
}) {
	return (
		<section
			className={siteSectionModelInstance.compositeClassNameString}
			id={siteSectionModelInstance.id}
			data-sectionname={siteSectionModelInstance.sectionName}
			data-testid={siteSectionModelInstance.id}
		>
			<div className="background-layer">
				<div className="content-layer">
					<h3 className="section-title" data-testid={"sectionTitle"}>
						{siteSectionModelInstance.sectionTitle}
					</h3>
					{children}
				</div>
				{bottomRule ? <hr /> : <></>}
			</div>
		</section>
	);
}
