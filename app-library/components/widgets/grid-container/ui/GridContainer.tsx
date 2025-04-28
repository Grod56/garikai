import { GridContainerModel } from "../GridContainerModel";
import "./grid-container.scss";

export default function GridContainer({
	model: { modelInstance },
	children,
}: {
	model: GridContainerModel;
	children: React.ReactNode;
}) {
	return (
		<div
			className="grid-container"
			data-orientation={modelInstance.orientation}
			data-maxxory={modelInstance.maxXorY} // TODO: Cleaner implementation expected
			data-overflow={modelInstance.overflow}
			data-testid="grid-container"
		>
			{children}
		</div>
	);
}
