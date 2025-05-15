import { ModeledContainerComponent } from "@/app-library/custom-types/ModeledComponent";
import { CSSProperties, useLayoutEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { GridContainerModel, Orientation } from "../GridContainerModel";
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

const GridContainer = function ({ model, children }) {
	const { maxXorY, orientation, overflow } = model.modelView;
	const isWideScreen = useMediaQuery({ minWidth: 768 });
	const [style, setStyle] = useState<CSSProperties | undefined>();

	// SSR fix (I hate everything about this)
	useLayoutEffect(() => {
		setStyle(getNewStyle(orientation, maxXorY, overflow, isWideScreen));
	}, [isWideScreen, maxXorY, orientation, overflow]);

	return (
		<div
			className={ELEMENT_NAME}
			data-orientation={orientation}
			data-maxxory={maxXorY} // Now just exposed for testing
			data-overflow={overflow}
			style={style} // Iffy, but will do for now
			data-testid={ELEMENT_NAME}
		>
			{children}
		</div>
	);
} as ModeledContainerComponent<GridContainerModel>;

export default GridContainer;
