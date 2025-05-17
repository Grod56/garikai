import FresnelHead from "@/app-library/third-party/fresnel/FresnelHead";
import "bootstrap/dist/css/bootstrap.min.css";
import { Explora } from "next/font/google";
import { Metadata } from "next/types";
import AppDesign from "./app-design/AppDesign";

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
			<FresnelHead />
			<body suppressHydrationWarning>
				<AppDesign>{children}</AppDesign>
			</body>
		</html>
	);
}
