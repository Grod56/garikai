import { SiteSubsectionModel } from "../SiteSubsectionModel";
import "./site-subsection.scss";

export default function SiteSubsection({
	model: { modelInstance },
	children,
}: {
	model: SiteSubsectionModel;
	children: React.ReactNode;
}) {
	return (
		<section
			className="site-subsection"
			id={modelInstance.id}
			data-testid="site-subsection"
		>
			<h4 className="subsection-title">
				{modelInstance.subsectionTitle}
			</h4>
			{children}
		</section>
	);
}
