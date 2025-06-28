import { Explora } from "next/font/google";
import { Metadata } from "next/types";
import AppDesign from "@/app-library/app-design/AppDesign";

// Configuration ---------------------------------------------------

export const metadata: Metadata = {
	metadataBase: new URL("https://garikai.org"),
	title: {
		template: "%s | Garikai Gumbo",
		default: "Garikai Gumbo",
	},
	openGraph: {
		title: "Garikai Gumbo",
		siteName: "Garikai Gumbo",
	},
};
const jsonLd = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	name: "Garikai Gumbo",
	url: "https://garikai.org/",
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
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(jsonLd),
					}}
				/>
			</head>
			<body suppressHydrationWarning>
				<AppDesign>{children}</AppDesign>
			</body>
		</html>
	);
}
