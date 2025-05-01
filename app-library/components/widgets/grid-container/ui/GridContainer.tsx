import { GridContainerModel } from "../GridContainerModel";
import "./grid-container.scss";

export const ELEMENT_NAME = "grid-container";

export default function GridContainer({
	model: { modelInstance },
	children,
}: {
	model: GridContainerModel;
	children: React.ReactNode;
}) {
	return (
		<div
			className={ELEMENT_NAME}
			data-orientation={modelInstance.orientation}
			data-maxxory={modelInstance.maxXorY} // TODO: Cleaner implementation expected
			data-overflow={modelInstance.overflow}
			data-testid={ELEMENT_NAME}
		>
			{children}
		</div>
	);
}
