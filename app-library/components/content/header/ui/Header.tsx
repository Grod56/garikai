import { HeaderModel } from "../HeaderModel";
import "./header.scss";

export const ELEMENT_NAME = "header";

export default function Header({ model }: { model: HeaderModel }) {
	const { id, headerTitle, headerSubtitle } = model.modelInstance;

	return (
		<header className={ELEMENT_NAME} id={id} data-testid={ELEMENT_NAME}>
			<div className="header-container">
				<div className="hero">
					<h1 className="title">{headerTitle}</h1>
					<h2 className="subtitle">{headerSubtitle}</h2>
				</div>
			</div>
		</header>
	);
}
