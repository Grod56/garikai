import { LinkedComponentModel } from "./LinkedComponentModel";
import "./linked-component.scss";

export default function LinkedComponent({
	model: { modelInstance },
	children,
}: {
	model: LinkedComponentModel;
	children: React.ReactNode;
}) {
	return (
		<div
			className={"linked-component"}
			role="button"
			// May be a bit hacky, but better than previous solution
			onClick={() => window.open(modelInstance.link, "_blank")}
		>
			{children}
		</div>
	);
}
