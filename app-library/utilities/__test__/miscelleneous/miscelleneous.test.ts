import { compositeClassNameResolver, removeMarkup } from "../../miscelleneous";

describe("compositeClassNameResolver", () => {
	const emptyList: string[] = [];
	const populatedList: string[] = ["class1", "class2", "class3"];
	it("outputs empty string when input is empty", () => {
		expect(compositeClassNameResolver(...emptyList)).toEqual("");
	});
	it("outputs space-delimited string representation of all individual input classes", () => {
		const output: string = compositeClassNameResolver(...populatedList);
		const classes: string[] = output.split(" ");
		expect(classes.toSorted()).toEqual(populatedList.toSorted());
	});
});

describe("removeMarkup", () => {
	const markedUpText = "<i>Italic</i> <span>content</span>";
	const nonMarkedUpText = "No markup here.";
	const matcher = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/;

	it("outputs text without markup when markup present in input", () => {
		expect(removeMarkup(markedUpText)).not.toMatch(matcher);
	});

	it("outputs text identical to input when markup not present in input", () => {
		expect(removeMarkup(nonMarkedUpText)).toEqual(nonMarkedUpText);
	});
});
