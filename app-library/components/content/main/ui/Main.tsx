"use client"; //TODO: Revisit
import { MainModel } from "../MainModel";
import "./main.scss";

export default function Main({
	model: { modelInstance },
	children,
}: {
	model: MainModel;
	children: React.ReactNode;
}) {
	return (
		<main
			className="main"
			id={modelInstance.id}
			data-name={modelInstance.name}
			data-testid="main"
		>
			{children}
		</main>
	);
}
