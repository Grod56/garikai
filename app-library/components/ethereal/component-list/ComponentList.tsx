import { Model, ModelView } from "@mvc-react/mvc";
import { ComponentListModel } from "./ComponentListModel";

function ComponentList<M extends Model<V>, V extends ModelView = ModelView>({
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
