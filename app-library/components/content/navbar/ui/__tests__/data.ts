import { NavbarModel } from "../../NavbarModel";

export const testModel: NavbarModel = {
	modelView: {
		id: "test-id",
		navlinkModels: [
			{ modelView: { link: "/home#top", linkText: "Home" } },
			{ modelView: { link: "/bottom", linkText: "Bottom" } },
		],
	},
};
