import { Metadata } from "next";
import Home from "./ui/Home";

export const metadata: Metadata = {
	title: "Home",
	description:
		"Welcome! You've found my digital home. This place is the nexus of all of my interests, hobbies, and projects.",
};

export default function Page() {
	return <Home />;
}
