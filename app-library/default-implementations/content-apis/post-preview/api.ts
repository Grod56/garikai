import { PostPreviewAPI } from "../../../content-apis/post-preview";
import { retrieveBloggerRecords } from "./server-actions";

export function newBloggerPostPreviewAPI(): PostPreviewAPI {
	return {
		retrieveRecords: retrieveBloggerRecords,
	};
}
