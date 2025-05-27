import SiteSection from "@/app-library/components/content/site-section/ui/SiteSection";

import { BioSectionModel } from "./bio-section-model";
import { newReadonlyModel } from "@mvc-react/mvc";
import { ModeledVoidComponent } from "@mvc-react/components";

const BioSection = function ({ model }) {
	const { sectionTitle } = model.modelView;
	return (
		<SiteSection
			model={newReadonlyModel({
				id: "bio",
				sectionName: "bio",
				sectionTitle: sectionTitle,
			})}
		>
			<p>
				Welcome! This place is the nexus of all of my interests,
				hobbies, projects, and professional undertakings. Feel free to
				check out what interests you. You can get in touch with me
				through my <a href="#contact-details">email and socials</a> for
				any inquiries. I guess I&apos;ll just go ahead and
				&quot;summarize&quot; myself.
			</p>
			<p>
				My name is Garikai Gumbo, I&apos;m an Electrical Engineer by
				training, and a software coder by night—to put it most
				appropriately. Outside these areas of
				&quot;specialization&quot;, I am also interested in pencil
				drawing, cursive calligraphy, classical literature, Biblical
				symbolism, Orthodox iconography, patristics... among other
				things. Will be sharing more on these here in the near future.
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
} as ModeledVoidComponent<BioSectionModel>;

export default BioSection;
