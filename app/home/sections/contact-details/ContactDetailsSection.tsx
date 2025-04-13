import { useSiteSectionModel } from "@/app/components/content/site-section/SiteSectionModel";
import SiteSection from "@/app/components/content/site-section/SiteSection";
export default function ContactDetailsSection() {
	const siteSectionModel = useSiteSectionModel(
		"contact-details",
		"contact-details",
		"Contact Details"
	);
	return (
		<SiteSection model={siteSectionModel}>
			<p>
				For professional inquiries, shoot me an email @{" "}
				<a href="mailto:providenceuniversalstudios@gmail.com">
					providenceuniversalstudios@gmail.com
				</a>
				. You may also reach out to me on{" "}
				<a href="https://wa.me/263784310140?text=Hello Garikai, I was referred to this number from your website.">
					Whatsapp
				</a>
				. If perhaps something piqued your interest here, or maybe even
				annoyed you (I take it all in spades I promise 😤), my personal
				email is right <a href="mailto:rodneygaryx29@gmail.com">here</a>
				. The rest of my socials are down in the{" "}
				<a href="#footer">footer</a>.
			</p>
		</SiteSection>
	);
}
