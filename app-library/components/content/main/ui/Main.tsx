import { ModeledContainerComponent } from "@mvc-react/components";
import { MainModel } from "../main";
import "./main.scss";

export const ELEMENT_NAME = "main";

const Main = function ({ model, children }) {
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
} as ModeledContainerComponent<MainModel>;

export default Main;
