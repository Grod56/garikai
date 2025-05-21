import { Model } from "@mvc-react/mvc";
import { ComponentPlaceholderModel } from "./ComponentPlaceholderModel";

function ComponentPlaceholder<M extends Model<V>, V extends object = object>({
	model,
}: {
	model: ComponentPlaceholderModel<M>;
}) {
	const {
		placeholderedComponentModel,
		PlaceholderedComponent,
		PlaceholderComponent,
	} = model.modelView;
	return placeholderedComponentModel ? (
		<PlaceholderedComponent model={placeholderedComponentModel} />
	) : (
		<PlaceholderComponent />
	);
}

export default ComponentPlaceholder;
