import "./flexible-container.scss";
import { FlexibleContainerModel } from "./FlexibleContainerModel";

export default function FlexibleContainer({
	children,
}: {
	model: FlexibleContainerModel;
	children: React.ReactNode;
}) {
	return <div className="flexible-container">{children}</div>;
}
