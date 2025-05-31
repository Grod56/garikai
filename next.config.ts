import type { NextConfig } from "next";

const IS_DEV = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
	compiler: !IS_DEV
		? {
				reactRemoveProperties: { properties: ["^data-testid$"] },
			}
		: {},
	eslint: {
		dirs: ["app-library", "app"],
	},
	sassOptions: {
		implementation: "sass-embedded",
	},
	// webpack: config => {
	// 	config.resolve.alias["@utilities"] = "/app-library/utilities";
	// 	config.resolve.alias["@components"] = "/app-library/components";
	// 	return config;
	// },
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
