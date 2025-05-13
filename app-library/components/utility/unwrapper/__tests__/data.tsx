import { Model } from "@/app-library/custom-types/model/Model";
import { UnwrapperModel } from "../UnwrapperModel";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";

type TestModelView = {
	text: string;
};

export type TestModel = Model<TestModelView>;

const testWrappedModels: TestModel[] = [
	{ modelView: { text: "summer" } },
	{ modelView: { text: "autumn" } },
	{ modelView: { text: "winter" } },
	{ modelView: { text: "spring" } },
];

export function getTestModel(
	UnwrappedModeledComponent: ModeledVoidComponent<TestModel>
): UnwrapperModel<TestModel> {
	const model = {
		modelView: {
			wrappedModels: testWrappedModels,
			UnwrappedModeledComponent,
		},
	};
	return model;
}
