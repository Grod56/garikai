import { SiteSubsectionModelInstance } from "./SiteSubsectionModel";

export default function SiteSubsection({
	siteSubsectionModelInstance,
	children,
}: {
	siteSubsectionModelInstance: SiteSubsectionModelInstance;
	children: React.ReactNode;
}) {
	return (
		<section
			className={siteSubsectionModelInstance.compositeClassNameString}
			id={siteSubsectionModelInstance.id}
			data-testid={siteSubsectionModelInstance.id}
		>
			<h4 className="subsection-title" data-testid="subsectionTitle">
				{siteSubsectionModelInstance.subsectionTitle}
			</h4>
			{children}
		</section>
	);
}
