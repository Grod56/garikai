import { JSX, useState } from "react";
import { ConditionalComponentModel } from "../ConditionalComponentModel";

export type TestCondition = "AB" | "CD" | "EF";

export type TestConditionalComponentModel =
	ConditionalComponentModel<TestCondition>;

export function useTestData(components: Map<TestCondition, () => JSX.Element>) {
	const [condition, setCondition] = useState<TestCondition>("AB");
	const testModel = {
		modelView: {
			condition: condition,
			components: components,
		},
	};
	return { testModel, setCondition };
}
