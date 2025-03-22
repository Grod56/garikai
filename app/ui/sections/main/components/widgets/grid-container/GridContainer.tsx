import { GridContainerModelInstance } from "./GridContainerModel";

export default function GridContainer({
	gridContainerModelInstance,
	children,
}: {
	gridContainerModelInstance: GridContainerModelInstance;
	children: React.ReactNode;
}) {
	return (
		<div
			className={gridContainerModelInstance.compositeClassNameString}
			id={gridContainerModelInstance.id}
			data-orientation={gridContainerModelInstance.orientation}
			data-maxxory={gridContainerModelInstance.maxXorY} // TODO: Cleaner implementation expected
			data-overflow={gridContainerModelInstance.overflow}
			data-testid={gridContainerModelInstance.id}
		>
			{children}
		</div>
	);
}
