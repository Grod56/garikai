import {
	PortfolioItemAPI,
	PortfolioItemRecord,
} from "@/app-library/content-apis/portfolio-item";

const testRecords: PortfolioItemRecord[] = [
	{
		id: "9271938",
		title: "Test title",
		thumbnailSource: "/resources/dackanask/acs",
		thumbnailAlt: "asdffe",
		thumbnailPlaceholder: "data:thumbnail/adfasfasf",
		description:
			"Lorem ipsum asijioasjoieb ebfnwefunw neeunwiudnw edkendoiwnoeidnw",
		category: "Michael Timothy",
		link: "https://link.th/fgfghfnff",
	},
	{
		id: "askcnuiuiq8922212",
		title: "Another title",
		thumbnailSource: "/resources/acs",
		thumbnailAlt: "asduiahsduhwiuhqib ajkc",
		thumbnailPlaceholder: "data:sadarnng/adfasfasf",
		description:
			"anfiu uiefnwuifniu wuefniwufniwuefowuejfiuwbefiwbefneufnwuneifunwiune",
		category: "Theresa Nay",
		link: "https://my.link/dfdgd",
	},
];

export const testRepositoryInstantiatorAPI: PortfolioItemAPI = {
	retrieveRecords: jest.fn(() => {
		return Promise.resolve(testRecords);
	}),
};

export function faultyRepositoryInstantiatorAPI(
	errorMessage: string
): PortfolioItemAPI {
	return {
		retrieveRecords: jest.fn(() => {
			return Promise.reject(errorMessage);
		}),
	};
}
