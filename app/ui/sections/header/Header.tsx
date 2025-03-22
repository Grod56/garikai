import { HeaderModelInstance } from "./HeaderModel";

export default function Header({
	headerModelInstance,
}: {
	headerModelInstance: HeaderModelInstance;
}) {
	return (
		<header
			className={headerModelInstance.compositeClassNameString}
			id={headerModelInstance.id}
			data-testid={headerModelInstance.id}
		>
			<div className="header-container">
				<div className="hero">
					<h1 className="title" data-testid="headerTitle">
						{headerModelInstance.headerTitle}
					</h1>
					<h2 className="subtitle" data-testid="headerSubtitle">
						{headerModelInstance.headerSubtitle}
					</h2>
				</div>
			</div>
		</header>
	);
}
