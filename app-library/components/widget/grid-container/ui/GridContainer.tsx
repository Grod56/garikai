import { ModeledContainerComponent } from "@/app-library/custom-types/ModeledComponent";
import { GridContainerModel, Orientation } from "../GridContainerModel";
import "./grid-container.scss";

export const ELEMENT_NAME = "grid-container";

const getStyle = (orientation: Orientation, maxXorY: number) => {
	switch (orientation) {
		case "horizontal":
			return { gridTemplateColumns: `repeat(${maxXorY}, 1fr)` };
		case "vertical":
			return { gridTemplateRows: `repeat(${maxXorY}, 1fr)` };
	}
};

const GridContainer = function ({ model, children }) {
	const { maxXorY, orientation, overflow } = model.modelView;

	return (
		<div
			className={ELEMENT_NAME}
			data-orientation={orientation}
			data-maxxory={maxXorY} // Now just exposed for testing
			data-overflow={overflow}
			data-testid={ELEMENT_NAME}
			style={getStyle(orientation, maxXorY)} // Iffy, but will do for now
		>
			{children}
		</div>
	);
} as ModeledContainerComponent<GridContainerModel>;

export default GridContainer;
