import { ModeledContainerComponent } from "@/app-library/custom-types/ModeledComponent";
import { FlexibleContainerModel } from "../FlexibleContainerModel";
import "./flexible-container.scss";

export const ELEMENT_NAME = "flexible-container";

const FlexibleContainer = function ({ children }) {
	return (
		<div className={ELEMENT_NAME} data-testid={ELEMENT_NAME}>
			{children}
		</div>
	);
} as ModeledContainerComponent<FlexibleContainerModel>;

export default FlexibleContainer;
