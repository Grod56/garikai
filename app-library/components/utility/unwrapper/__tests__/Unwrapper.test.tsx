import { render, screen } from "@testing-library/react";
import Unwrapper from "../Unwrapper";
import { getTestModel, TestModel } from "./data";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";

describe("Unwrapper", () => {
	const getTestUnwrappedModeledComponent = () =>
		jest.fn(({ model }) => <li>{model.modelView.text}</li>);
	let wrappedModels: TestModel[],
		UnwrappedModeledComponent: ModeledVoidComponent<TestModel>;

	beforeEach(() => {
		const testModel = getTestModel(getTestUnwrappedModeledComponent());
		wrappedModels = testModel.modelView.wrappedModels;
		UnwrappedModeledComponent =
			testModel.modelView.UnwrappedModeledComponent;

		render(<Unwrapper model={testModel} />);
	});

	it("maps wrappedModels to UnwrappedModeledComponents", () => {
		wrappedModels.forEach((wrappedModel) => {
			expect(UnwrappedModeledComponent).toHaveBeenCalledWith(
				{
					model: wrappedModel,
				},
				undefined
			);
		});
		expect(UnwrappedModeledComponent).toHaveBeenCalledTimes(
			wrappedModels.length
		);
	});

	it("renders all wrappedModels", () => {
		wrappedModels.forEach((wrappedModel) => {
			const element = screen.getByText(wrappedModel.modelView.text);
			expect(element).toBeInTheDocument();
		});
	});
});
