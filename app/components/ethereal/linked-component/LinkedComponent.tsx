import { LinkedComponentModelInstance } from "./LinkedComponentModel";

export default function LinkedComponent({
	linkedComponentModelInstance,
	children,
}: {
	linkedComponentModelInstance: LinkedComponentModelInstance;
	children: React.ReactNode;
}) {
	// Hacky but better than previous solution
	return (
		<div
			className={"linked-component"}
			role="button"
			onClick={() =>
				window.open(linkedComponentModelInstance.link, "_blank")
			}
		>
			{children}
		</div>
	);
}
