import { act, render, renderHook, screen } from "@testing-library/react";
import ConditionalComponent from "../ConditionalComponent";
import { TestCondition, useTestData } from "./data";
import { JSX } from "react";

describe("ConditionalComponent", () => {
	const getComponents = () =>
		new Map<TestCondition, () => JSX.Element>([
			["AB", jest.fn(() => <div data-testid="AB"></div>)],
			["CD", jest.fn(() => <div data-testid="CD"></div>)],
		]);
	beforeAll(() => {
		const renderedHook = renderHook(() => useTestData(getComponents()));
		const { testModel } = renderedHook.result.current;
		const { components } = testModel.modelView;
		components.values().forEach((component) => {
			expect(component).not.toHaveBeenCalled();
		});
	});

	it("only calls component corresponding to condition", async () => {
		const renderedHook = renderHook(() => useTestData(getComponents()));
		const { testModel, setCondition } = renderedHook.result.current;

		const renderedComponent = render(
			<ConditionalComponent model={testModel} />
		);

		act(() => {
			setCondition("CD");
		});

		renderedComponent.rerender(
			<ConditionalComponent
				model={renderedHook.result.current.testModel}
			/>
		);

		const components =
			renderedHook.result.current.testModel.modelView.components;
		expect(components.get("CD")).toHaveBeenCalled();
		components
			.keys()
			.filter((key) => key !== "CD")
			.forEach((filteredKey) =>
				expect(components.get(filteredKey)).not.toHaveBeenCalled()
			);
	});

	it("calls none of provided components when condition does not map to any", () => {
		const renderedHook = renderHook(() => useTestData(getComponents()));
		const { testModel, setCondition } = renderedHook.result.current;

		const renderedComponent = render(
			<ConditionalComponent model={testModel} />
		);
		act(() => {
			setCondition("EF");
		});

		renderedComponent.rerender(
			<ConditionalComponent
				model={renderedHook.result.current.testModel}
			/>
		);

		renderedHook.result.current.testModel.modelView.components
			.values()
			.forEach((component) => {
				expect(component).not.toHaveBeenCalled();
			});
	});

	it("only renders Component relevant to provided condition", () => {
		const renderedHook = renderHook(() => useTestData(getComponents()));
		const { setCondition } = renderedHook.result.current;

		act(() => setCondition("AB"));

		render(
			<ConditionalComponent
				model={renderedHook.result.current.testModel}
			/>
		);

		expect(screen.queryByTestId("AB")).toBeInTheDocument();
		expect(screen.queryByTestId("CD")).not.toBeInTheDocument();
	});

	it("renders none of provided components when condition does not map to any", () => {
		const renderedHook = renderHook(() => useTestData(getComponents()));
		const { setCondition } = renderedHook.result.current;

		act(() => setCondition("EF"));

		render(
			<ConditionalComponent
				model={renderedHook.result.current.testModel}
			/>
		);

		expect(screen.queryByTestId("AB")).not.toBeInTheDocument();
		expect(screen.queryByTestId("CD")).not.toBeInTheDocument();
	});
});
