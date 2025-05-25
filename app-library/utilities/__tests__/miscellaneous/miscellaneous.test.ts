import {
	compositeClassNameResolver,
	newStatifiableModel,
	removeMarkup,
} from "../../miscelleneous";

describe("compositeClassNameResolver", () => {
	it("outputs empty string when input is empty", () => {
		const emptyList: string[] = [];
		expect(compositeClassNameResolver(...emptyList)).toEqual("");
	});
	it("outputs space-delimited string representation of combined input classes", () => {
		const populatedList: string[] = ["class1", "class2", "class3"];
		const output: string = compositeClassNameResolver(...populatedList);
		const classes: string[] = output.split(" ");
		expect(classes.toSorted()).toEqual(populatedList.toSorted());
	});
});

describe("removeMarkup", () => {
	it("outputs text without markup when markup present in input", () => {
		const markedUpText = "<i>Italic</i> <span>content</span>";
		const markupMatcher = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/;
		expect(removeMarkup(markedUpText)).not.toMatch(markupMatcher);
	});

	it("outputs unaltered output when markup not present in input", () => {
		const nonMarkedUpText = "No markup here.";
		expect(removeMarkup(nonMarkedUpText)).toEqual(nonMarkedUpText);
	});
});

describe("newStatifiableModel", () => {
	it("outputs statifiable model with uninitialized model", () => {
		const viewInteractionInterface = {
			produceModelView: jest.fn(),
			testing123: "Is equal",
		};
		const model = newStatifiableModel(viewInteractionInterface);
		expect(model.modelView).toBeNull();
		expect(model.viewInteractionInterface).toEqual(
			viewInteractionInterface
		);
	});
});
