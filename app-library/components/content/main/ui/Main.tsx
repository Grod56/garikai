import { MainModel } from "../MainModel";
import "./main.scss";

export const ELEMENT_NAME = "main";

export default function Main({
	model,
	children,
}: {
	model: MainModel;
	children: React.ReactNode;
}) {
	const { id, name } = model.modelView;

	return (
		<main
			className={ELEMENT_NAME}
			id={id}
			data-name={name}
			data-testid={ELEMENT_NAME}
		>
			{children}
		</main>
	);
}
