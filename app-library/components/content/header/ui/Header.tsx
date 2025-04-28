import { HeaderModel } from "../HeaderModel";
import "./header.scss";

export default function Header({
	model: { modelInstance },
}: {
	model: HeaderModel;
}) {
	return (
		<header className="header" id={modelInstance.id} data-testid="header">
			<div className="header-container">
				<div className="hero">
					<h1 className="title">{modelInstance.headerTitle}</h1>
					<h2 className="subtitle">{modelInstance.headerSubtitle}</h2>
				</div>
			</div>
		</header>
	);
}
