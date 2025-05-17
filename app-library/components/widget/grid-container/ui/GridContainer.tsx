import { ModeledContainerComponent } from "@/app-library/custom-types/ModeledComponent";
import { CSSProperties } from "react";
import { GridContainerModel, Orientation } from "../GridContainerModel";
import {
	MediaContextProvider,
	Media,
} from "@/app-library/third-party/fresnel/Media";
import "./grid-container.scss";

export const ELEMENT_NAME = "grid-container";

const getNewStyle = (
	orientation: Orientation,
	maxXorY: number,
	overflow: boolean,
	isWideScreen: boolean
): CSSProperties | undefined => {
	if (overflow || isWideScreen) {
		switch (orientation) {
			case "horizontal":
				return { gridTemplateColumns: `repeat(${maxXorY}, 1fr)` };
			case "vertical":
				return { gridTemplateRows: `repeat(${maxXorY}, 1fr)` };
		}
	}
	return undefined;
};

//TODO: To be polished in the future
const GridContainer = function ({ model, children }) {
	const { maxXorY, orientation, overflow } = model.modelView;

	return (
		<MediaContextProvider>
			<Media at="xs">
				<div
					className={ELEMENT_NAME}
					data-orientation={orientation}
					data-maxxory={maxXorY} // Now just exposed for testing
					data-overflow={overflow}
					style={getNewStyle(orientation, maxXorY, overflow, false)} // Iffy, but will do for now
					data-testid={ELEMENT_NAME}
				>
					{children}
				</div>
			</Media>
			<Media greaterThan="xs">
				<div
					className={ELEMENT_NAME}
					data-orientation={orientation}
					data-maxxory={maxXorY}
					data-overflow={overflow}
					style={getNewStyle(orientation, maxXorY, overflow, true)}
					data-testid={ELEMENT_NAME}
				>
					{children}
				</div>
			</Media>
		</MediaContextProvider>
	);
} as ModeledContainerComponent<GridContainerModel>;

export default GridContainer;
