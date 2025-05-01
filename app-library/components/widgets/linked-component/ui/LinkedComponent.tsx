import { openExternalSite } from "@/app-library/utilities/ui";
import { LinkedComponentModel } from "../LinkedComponentModel";
import "./linked-component.scss";

export const ELEMENT_NAME = "linked-component";

export default function LinkedComponent({
	model: { modelInstance },
	children,
}: {
	model: LinkedComponentModel;
	children: React.ReactNode;
}) {
	return (
		<div
			className={ELEMENT_NAME}
			role="button"
			// May be a bit hacky, but better than previous solution
			onClick={() => {
				openExternalSite(modelInstance.link);
			}}
			// Mainly to make link value for accessible for testing
			data-href={modelInstance.link.href}
			data-testid={ELEMENT_NAME}
		>
			{children}
		</div>
	);
}
