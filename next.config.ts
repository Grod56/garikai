import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	eslint: {
		dirs: ["app-library", "app"],
	},
	sassOptions: {
		implementation: "sass-embedded",
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "blogger.googleusercontent.com",
				port: "",
				pathname: "/img/**",
				search: "",
			},
		],
	},
};

export default nextConfig;
