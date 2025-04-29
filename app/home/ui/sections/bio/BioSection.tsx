import { instantiateSiteSectionModel } from "@/app-library/components/content/site-section/model-instantiator/SiteSectionModelInstantiator";
import SiteSection from "@/app-library/components/content/site-section/ui/SiteSection";

export default function BioSection() {
	const sectionModel = instantiateSiteSectionModel({
		id: "bio",
		sectionName: "bio",
		sectionTitle: "Bio",
	});

	return (
		<SiteSection model={sectionModel}>
			<p>
				Welcome! This place is the nexus of all of my interests,
				hobbies, projects, and professional undertakings. Feel free to
				check out what interests you. You can get in touch with me
				through my <a href="#contact-details">email and socials</a> for
				any inquiries. I guess I&apos;ll just go ahead and
				&quot;summarize&quot; myself.
			</p>
			<p>
				My name is Garikai Rodney Gumbo, I&apos;m an Electrical
				Engineering student by day, and a software coder by night—to put
				it most appropriately. Besides these areas of
				&quot;specialization&quot;, I am also interested in pencil
				drawing, cursive calligraphy, classical literature, biblical
				symbolism, Orthodox iconography, patristics... among other
				things.
			</p>
			<p>
				You may check out what I&apos;m thinking about or currently
				studying in detail from my{" "}
				<a href="#reading-list">reading list</a>. If I stumble upon
				something particularly interesting, insightful, or compelling,
				I&apos;ll probably jot something down on it on my{" "}
				<a href="#blog">blog</a> (a work in progress currently).
			</p>
			<p>
				That&apos;s it from me, thank you again for stopping by and
				happy scrolling!
			</p>
		</SiteSection>
	);
}
