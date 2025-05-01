import { FlexibleContainerModel } from "../FlexibleContainerModel";
import "./flexible-container.scss";

export const ELEMENT_NAME = "flexible-container";

export default function FlexibleContainer({
	children,
}: {
	model: FlexibleContainerModel;
	children: React.ReactNode;
}) {
	return (
		<div className={ELEMENT_NAME} data-testid={ELEMENT_NAME}>
			{children}
		</div>
	);
}
