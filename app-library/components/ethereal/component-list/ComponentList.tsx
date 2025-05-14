import { Model } from "@/app-library/custom-types/model/Model";
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
