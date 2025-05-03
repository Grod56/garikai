import { GridContainerModel } from "../GridContainerModel";
import "./grid-container.scss";

export const ELEMENT_NAME = "grid-container";

export default function GridContainer({
	model,
	children,
}: {
	model: GridContainerModel;
	children: React.ReactNode;
}) {
	const { maxXorY, orientation, overflow } = model.modelInstance;

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
}
