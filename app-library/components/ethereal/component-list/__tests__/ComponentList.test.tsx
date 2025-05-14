import { render, screen } from "@testing-library/react";
import ComponentList from "../ComponentList";
import { getTestModel, TestModel } from "./data";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";

describe("ComponentList", () => {
	const getTestComponent = () =>
		jest.fn(({ model }) => <li>{model.modelView.text}</li>);
	let componentModels: TestModel[];
	let Component: ModeledVoidComponent<TestModel>;

	beforeEach(() => {
		const testModel = getTestModel(getTestComponent());
		componentModels = testModel.modelView.componentModels;
		Component = testModel.modelView.Component;

		render(<ComponentList model={testModel} />);
	});

	it("maps componentModels to Components", () => {
		componentModels.forEach((componentModel) => {
			expect(Component).toHaveBeenCalledWith(
				{
					model: componentModel,
				},
				undefined
			);
		});
		expect(Component).toHaveBeenCalledTimes(componentModels.length);
	});

	it("renders all componentModels", () => {
		componentModels.forEach((componentModel) => {
			const element = screen.getByText(componentModel.modelView.text);
			expect(element).toBeInTheDocument();
		});
	});
});
