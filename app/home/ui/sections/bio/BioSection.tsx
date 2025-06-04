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
				Welcome! You&apos;ve found my digital home. This place is the
				nexus of all of my interests, hobbies, and projects. Feel free
				to check out what interests you. You can get in touch with me
				through my <a href="#contact-details">email and socials</a> for
				any inquiries. I guess I&apos;ll just go ahead and give a brief
				&quot;summary&quot; of myself.
			</p>
			<p>
				My name is Garikai Gumbo. I&apos;m an engineer by training, and
				a software programmer by night—to put it most appropriately. My
				interests include pencil drawing, cursive calligraphy, classical
				literature, symbolism, Orthodox iconography, patristics, and a
				whole bunch of other things which I will be documenting here.
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
