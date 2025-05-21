import { Model } from "@mvc-react/mvc";
import { ComponentListModel } from "./ComponentListModel";

function ComponentList<M extends Model<V>, V extends object = object>({
	model,
}: {
	model: ComponentListModel<M>;
}) {
	const { componentModels, Component } = model.modelView;
	return (
		<>
			{componentModels.map((componentModel, index) => (
				<Component key={index} model={componentModel} />
			))}
		</>
	);
}

export default ComponentList;
