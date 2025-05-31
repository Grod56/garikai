import { Explora } from "next/font/google";
import { Metadata } from "next/types";
import AppDesign from "@/app-library/app-design/AppDesign";

// Initial configuration ---------------------------------------------------

export const metadata: Metadata = {
	title: {
		template: process.env.TITLE_TEMPLATE!,
		default: process.env.DEFAULT_TITLE!,
	},
};
const exploraFont = Explora({ weight: "400", subsets: ["latin"] });

// -------------------------------------------------------------------------

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={exploraFont.className}>
			<head>
				<meta
					name="google-site-verification"
					content="UY7Ym8IOpWKyjiL3REW9YXXS-T6g637HgcAx2tYYyDQ"
				/>
			</head>
			<body suppressHydrationWarning>
				<AppDesign>{children}</AppDesign>
			</body>
		</html>
	);
}
