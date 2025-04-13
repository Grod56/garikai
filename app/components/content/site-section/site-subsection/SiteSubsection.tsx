import { SiteSubsectionModel } from "./SiteSubsectionModel";

export default function SiteSubsection({
	model: { modelInstance },
	children,
}: {
	model: SiteSubsectionModel;
	children: React.ReactNode;
}) {
	return (
		<section className="site-subsection" id={modelInstance.id}>
			<h4 className="subsection-title">
				{modelInstance.subsectionTitle}
			</h4>
			{children}
		</section>
	);
}
