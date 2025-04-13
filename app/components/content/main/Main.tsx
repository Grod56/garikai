"use client"; //TODO: Revisit
import "./main.scss";
import { MainModel } from "./MainModel";

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
		>
			{children}
		</main>
	);
}
