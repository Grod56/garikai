import { SiteSubsectionModel } from "../SiteSubsectionModel";
import "./site-subsection.scss";

export const ELEMENT_NAME = "site-subsection";

export default function SiteSubsection({
	model: { modelInstance },
	children,
}: {
	model: SiteSubsectionModel;
	children: React.ReactNode;
}) {
	return (
		<section
			className={ELEMENT_NAME}
			id={modelInstance.id}
			data-testid={ELEMENT_NAME}
		>
			<h4 className="subsection-title">
				{modelInstance.subsectionTitle}
			</h4>
			{children}
		</section>
	);
}
