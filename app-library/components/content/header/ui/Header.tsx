import { ModeledVoidComponent } from "@mvc-react/components";
import { HeaderModel } from "../header-model";
import "./header.scss";

export const ELEMENT_NAME = "header";

const Header = function ({ model }) {
	const { id, headerTitle, headerSubtitle } = model.modelView;

	return (
		<header className={ELEMENT_NAME} id={id} data-testid={ELEMENT_NAME}>
			<div className="header-background">
				<div className="header-content">
					<div className="hero">
						<h1 className="title">{headerTitle}</h1>
						<h2 className="subtitle">{headerSubtitle}</h2>
					</div>
				</div>
			</div>
		</header>
	);
} as ModeledVoidComponent<HeaderModel>;

export default Header;
