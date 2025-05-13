import { act, render, renderHook, screen } from "@testing-library/react";
import ComponentPlaceholder from "../ComponentPlaceholder";
import { useTestData } from "./data";

describe("ComponentPlaceholder", () => {
	const getPlaceholderedComponent = () =>
		jest.fn(() => <div data-testid="placeholderedComponent"></div>);
	const getPlaceholderComponent = () =>
		jest.fn(() => <div data-testid="placeholderComponent"></div>);

	beforeAll(() => {
		const renderedHook = renderHook(() =>
			useTestData(getPlaceholderedComponent(), getPlaceholderComponent())
		);
		const { PlaceholderComponent, PlaceholderedComponent } =
			renderedHook.result.current.testModel.modelView;
		expect(PlaceholderComponent).not.toHaveBeenCalled();
		expect(PlaceholderedComponent).not.toHaveBeenCalled();
	});

	it("only calls PlaceholderComponent when placeholderedComponentModel is undefined", async () => {
		const renderedHook = renderHook(() =>
			useTestData(getPlaceholderedComponent(), getPlaceholderComponent())
		);
		act(() =>
			renderedHook.result.current.setPlaceholderedComponentModel(
				undefined
			)
		);

		const { testModel } = renderedHook.result.current;

		render(<ComponentPlaceholder model={testModel} />);

		expect(
			renderedHook.result.current.testModel.modelView.PlaceholderComponent
		).toHaveBeenCalled();
		expect(
			renderedHook.result.current.testModel.modelView
				.PlaceholderedComponent
		).not.toHaveBeenCalled();
	});

	it(
		"only calls PlaceholderedComponent with placeholderedComponentModel " +
			"when placeholderedComponentModel is truthy",
		() => {
			const renderedHook = renderHook(() =>
				useTestData(
					getPlaceholderedComponent(),
					getPlaceholderComponent()
				)
			);
			const truthyPlaceholderedComponentModel = {
				modelView: { text: "winter" },
			};
			act(() =>
				renderedHook.result.current.setPlaceholderedComponentModel(
					truthyPlaceholderedComponentModel
				)
			);

			const { testModel } = renderedHook.result.current;

			render(<ComponentPlaceholder model={testModel} />);

			const { PlaceholderedComponent } =
				renderedHook.result.current.testModel.modelView;

			expect(PlaceholderedComponent).toHaveBeenCalledWith(
				{ model: truthyPlaceholderedComponentModel },
				undefined
			);
			expect(
				renderedHook.result.current.testModel.modelView
					.PlaceholderComponent
			).not.toHaveBeenCalled();
		}
	);

	it(
		"calls PlaceholderedComponent with new placeholderedComponentModel " +
			"when placeholderedComponentModel mutates post render",
		async () => {
			const renderedHook = renderHook(() =>
				useTestData(
					getPlaceholderedComponent(),
					getPlaceholderComponent()
				)
			);

			const { testModel, setPlaceholderedComponentModel } =
				renderedHook.result.current;

			const renderedComponent = render(
				<ComponentPlaceholder model={testModel} />
			);

			const newPlaceholderedComponentModel = {
				modelView: { text: "autumn" },
			};

			act(() =>
				setPlaceholderedComponentModel(newPlaceholderedComponentModel)
			);

			//TODO: Sus. Look for alternatives in the future
			renderedComponent.rerender(
				<ComponentPlaceholder
					model={renderedHook.result.current.testModel}
				/>
			);

			const { PlaceholderedComponent } =
				renderedHook.result.current.testModel.modelView;
			expect(PlaceholderedComponent).toHaveBeenCalledWith(
				{ model: newPlaceholderedComponentModel },
				undefined
			);
		}
	);

	it("only renders PlaceholderComponent when placeholderedComponentModel is undefined", () => {
		const renderedHook = renderHook(() =>
			useTestData(getPlaceholderedComponent(), getPlaceholderComponent())
		);
		act(() =>
			renderedHook.result.current.setPlaceholderedComponentModel(
				undefined
			)
		);

		const { testModel } = renderedHook.result.current;

		render(<ComponentPlaceholder model={testModel} />);

		expect(
			screen.queryByTestId("placeholderComponent")
		).toBeInTheDocument();
		expect(
			screen.queryByTestId("placeholderedComponent")
		).not.toBeInTheDocument();
	});

	it(
		"only renders PlaceholderedComponent when when placeholderedComponentModel " +
			"is truthy",
		() => {
			const renderedHook = renderHook(() =>
				useTestData(
					getPlaceholderedComponent(),
					getPlaceholderComponent()
				)
			);
			act(() =>
				renderedHook.result.current.setPlaceholderedComponentModel({
					modelView: { text: "spring" },
				})
			);

			const { testModel } = renderedHook.result.current;

			render(<ComponentPlaceholder model={testModel} />);

			expect(
				screen.queryByTestId("placeholderedComponent")
			).toBeInTheDocument();
			expect(
				screen.queryByTestId("placeholderComponent")
			).not.toBeInTheDocument();
		}
	);
});
