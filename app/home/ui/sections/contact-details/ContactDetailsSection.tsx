import SiteSection from "@/app-library/components/content/site-section/ui/SiteSection";

import { ContactDetailsSectionModel } from "./contact-details-section-model";
import { newReadonlyModel } from "@mvc-react/mvc";
import { ModeledVoidComponent } from "@mvc-react/components";

const ContactDetailsSection = function ({ model }) {
	const { sectionTitle } = model.modelView;

	return (
		<SiteSection
			model={newReadonlyModel({
				id: "contact-details",
				sectionName: "contact-details",
				sectionTitle: sectionTitle,
			})}
		>
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
				annoyed you (I take it all in spades I promise 😌), my personal
				email is right <a href="mailto:rodneygaryx29@gmail.com">here</a>
				. The rest of my socials are down in the footer.
			</p>
		</SiteSection>
	);
} as ModeledVoidComponent<ContactDetailsSectionModel>;

export default ContactDetailsSection;
