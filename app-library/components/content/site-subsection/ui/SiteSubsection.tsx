import { SiteSubsectionModel } from "../SiteSubsectionModel";
import "./site-subsection.scss";

export const ELEMENT_NAME = "site-subsection";

export default function SiteSubsection({
	model,
	children,
}: {
	model: SiteSubsectionModel;
	children: React.ReactNode;
}) {
	const { id, subsectionTitle } = model.modelView;

	return (
		<section className={ELEMENT_NAME} id={id} data-testid={ELEMENT_NAME}>
			<h4 className="subsection-title">{subsectionTitle}</h4>
			{children}
		</section>
	);
}
