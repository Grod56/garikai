import { ConditionalComponentModel } from "./ConditionalComponentModel";

function ConditionalComponent<C>({
	model,
}: {
	model: ConditionalComponentModel<C>;
}) {
	const { condition, components, FallBackComponent } = model.modelView;
	return (
		<>
			{components.get(condition) ? (
				components.get(condition)!()
			) : (
				<FallBackComponent />
			)}
		</>
	);
}

export default ConditionalComponent;
