import { ConditionalComponentModel } from "./ConditionalComponentModel";

function ConditionalComponent<C>({
	model,
}: {
	model: ConditionalComponentModel<C>;
}) {
	const { condition, components } = model.modelView;
	return <>{components.get(condition)?.()}</>;
}

export default ConditionalComponent;
