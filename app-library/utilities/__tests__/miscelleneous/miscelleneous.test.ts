import {
	compositeClassNameResolver,
	instantiateReadonlyModel,
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

describe("instantiateReadonlyModel", () => {
	it("outputs model with equivalent modelview", () => {
		const modelView = { name: "John", surname: "Vervaeke" };
		const model = instantiateReadonlyModel(modelView);

		expect(model.modelView).toEqual(modelView);
	});
});
