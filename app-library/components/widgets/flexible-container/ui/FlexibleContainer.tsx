import { FlexibleContainerModel } from "../FlexibleContainerModel";
import "./flexible-container.scss";

export default function FlexibleContainer({
	children,
}: {
	model: FlexibleContainerModel;
	children: React.ReactNode;
}) {
	return (
		<div className="flexible-container" data-testid="flexible-container">
			{children}
		</div>
	);
}
