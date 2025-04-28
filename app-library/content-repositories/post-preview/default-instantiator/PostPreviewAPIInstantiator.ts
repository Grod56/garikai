import { PostPreviewAPI, PostPreviewRecord } from "../PostPreviewAPI";
import blogger from "@/external-apis/blogger";

type BloggerBlogPostItem = {
	id: string;
	title: string;
	author: {
		displayName: string;
	};
	published: string;
	content: string;
	url: string;
	images: {
		url: string;
	}[];
};

export function getBloggerPostPreviewAPI(): PostPreviewAPI {
	return {
		retrieveRecords: async () => {
			const { data } = await blogger.fetchBlogPosts();
			if (data) {
				const records: PostPreviewRecord[] = data.map(
					(item: BloggerBlogPostItem) =>
						({
							id: item.id,
							title: item.title,
							author: item.author.displayName,
							publishedDate: item.published,
							snippet: item.content,
							postLink: item.url,
							thumbnailSource: item.images[0].url,
						}) as PostPreviewRecord
				);
				return records;
			}
			throw new Error("Blogger returned an error on request");
		},
	};
}
