import { openExternalSite } from "@/app-library/utilities/ui";
import { LinkedComponentModel } from "../LinkedComponentModel";
import "./linked-component.scss";

export const ELEMENT_NAME = "linked-component";

export default function LinkedComponent({
	model,
	children,
}: {
	model: LinkedComponentModel;
	children: React.ReactNode;
}) {
	const { link } = model.modelView;

	return (
		<div
			className={ELEMENT_NAME}
			role="button"
			// May be a bit hacky, but better than previous solution
			onClick={() => {
				openExternalSite(link);
			}}
			// Mainly to make link value for accessible for testing
			data-href={link.href}
			data-testid={ELEMENT_NAME}
		>
			{children}
		</div>
	);
}
