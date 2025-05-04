import { ModeledContainerComponent } from "@/app-library/custom-types/ModeledComponent";
import { GridContainerModel } from "../GridContainerModel";
import "./grid-container.scss";

export const ELEMENT_NAME = "grid-container";

const GridContainer = function ({ model, children }) {
	const { maxXorY, orientation, overflow } = model.modelView;

	return (
		<div
			className={ELEMENT_NAME}
			data-orientation={orientation}
			data-maxxory={maxXorY} // TODO: Cleaner implementation expected
			data-overflow={overflow}
			data-testid={ELEMENT_NAME}
		>
			{children}
		</div>
	);
} as ModeledContainerComponent<GridContainerModel>;

export default GridContainer;
