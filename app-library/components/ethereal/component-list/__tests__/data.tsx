import { Model } from "@/app-library/custom-types/model/Model";
import { ComponentListModel } from "../ComponentListModel";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";

type TestModelView = {
	text: string;
};

export type TestModel = Model<TestModelView>;

const testComponentModels: TestModel[] = [
	{ modelView: { text: "summer" } },
	{ modelView: { text: "autumn" } },
	{ modelView: { text: "winter" } },
	{ modelView: { text: "spring" } },
];

export function getTestModel(
	Component: ModeledVoidComponent<TestModel>
): ComponentListModel<TestModel> {
	const model = {
		modelView: {
			componentModels: testComponentModels,
			Component,
		},
	};
	return model;
}
