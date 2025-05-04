import {
	PostPreviewRecord,
	PostPreviewAPI,
} from "../../../../content-apis/PostPreviewAPI";

const testRecords: PostPreviewRecord[] = [
	{
		id: "9271938",
		title: "Test title",
		thumbnailSource: "/resources/dackanask/acs",
		snippet:
			"Lorem ipsum asijioasjoieb ebfnwefunw neeunwiudnw edkendoiwnoeidnw",
		author: "Michael Timothy",
		publishedDate: `${Date.now()}`,
		postLink: "https://link.th",
	},
	{
		id: "askcnuiuiq8922212",
		title: "Another title",
		thumbnailSource: "/resources/acs",
		snippet:
			"anfiu uiefnwuifniu wuefniwufniwuefowuejfiuwbefiwbefneufnwuneifunwiune",
		author: "Theresa Nay",
		publishedDate: `${Date.now()}`,
		postLink: "https://my.link",
	},
];

export const testRepositoryInstantiatorAPI: PostPreviewAPI = {
	retrieveRecords: jest.fn(async () => {
		return testRecords;
	}),
};

export const faultyRepositoryInstantiatorAPI: PostPreviewAPI = {
	retrieveRecords: jest.fn(async () => {
		throw new Error("This is an error");
	}),
};
