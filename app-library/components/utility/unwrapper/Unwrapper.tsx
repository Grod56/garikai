import { Model } from "@/app-library/custom-types/model/Model";
import { UnwrapperModel } from "./UnwrapperModel";

function Unwrapper<M extends Model<V>, V extends object = object>({
	model,
}: {
	model: UnwrapperModel<M>;
}) {
	const { wrappedModels, UnwrappedModeledComponent } = model.modelView;
	return (
		<>
			{wrappedModels.map((wrappedModel, index) => (
				<UnwrappedModeledComponent key={index} model={wrappedModel} />
			))}
		</>
	);
}

export default Unwrapper;
