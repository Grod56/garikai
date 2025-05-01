type BlogPostsEndpointURL =
	`https://www.googleapis.com/blogger/v3/blogs/${bigint}/posts?fetchImages=true`;

function createBloggerClient(blogPostsEndpointURL: BlogPostsEndpointURL) {
	return {
		async fetchBlogPosts() {
			const data = await fetch(blogPostsEndpointURL, {
				headers: { "Content-Type": "application/json" },
			})
				.then((response) => {
					if (response.ok) {
						return response.json();
					} else {
						Promise.reject();
					}
				})
				.then((responseJSON) => {
					return responseJSON.items;
				})
				.catch(() => {
					return null;
				});
			return { data };
		},
	};
}

export default createBloggerClient(
	process.env.NEXT_PUBLIC_BLOGGER_POSTS_ENDPOINT_URL! as BlogPostsEndpointURL
);
