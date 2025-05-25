import { ModeledContainerComponent } from "@mvc-react/components";
import { SiteSubsectionModel } from "../site-subsection";
import "./site-subsection.scss";

export const ELEMENT_NAME = "site-subsection";

const SiteSubsection = function ({ model, children }) {
	const { id, subsectionTitle } = model.modelView;

	return (
		<section className={ELEMENT_NAME} id={id} data-testid={ELEMENT_NAME}>
			<h4 className="subsection-title">{subsectionTitle}</h4>
			{children}
		</section>
	);
} as ModeledContainerComponent<SiteSubsectionModel>;

export default SiteSubsection;
