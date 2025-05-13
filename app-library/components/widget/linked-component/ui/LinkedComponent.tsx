import { ModeledContainerComponent } from "@/app-library/custom-types/ModeledComponent";
import { openExternalSite } from "@/app-library/utilities/ui";
import { LinkedComponentModel } from "../LinkedComponentModel";
import "./linked-component.scss";

export const ELEMENT_NAME = "linked-component";

const LinkedComponent = function ({ model, children }) {
	const { link } = model.modelView;

	return (
		<div
			className={ELEMENT_NAME}
			role="button"
			// May be a bit hacky, but better than previous solution
			onClick={() => {
				openExternalSite(link);
			}}
			// Mainly to make link value accessible for testing
			data-href={link.href}
			data-testid={ELEMENT_NAME}
		>
			{children}
		</div>
	);
} as ModeledContainerComponent<LinkedComponentModel>;

export default LinkedComponent;
