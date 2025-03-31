import { LinkedComponentModelInstance } from "./LinkedComponentModel";

export default function LinkedComponent({
	linkedComponentModelInstance,
	children,
}: {
	linkedComponentModelInstance: LinkedComponentModelInstance;
	children: React.ReactNode;
}) {
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
