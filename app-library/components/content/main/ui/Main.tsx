import { MainModel } from "../MainModel";
import "./main.scss";

export const ELEMENT_NAME = "main";

export default function Main({
	model: { modelInstance },
	children,
}: {
	model: MainModel;
	children: React.ReactNode;
}) {
	return (
		<main
			className={ELEMENT_NAME}
			id={modelInstance.id}
			data-name={modelInstance.name}
			data-testid={ELEMENT_NAME}
		>
			{children}
		</main>
	);
}
