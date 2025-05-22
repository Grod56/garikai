import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { SocialLinkModel } from "../SocialLinkModel";
import Link from "next/link";
import ConditionalComponent from "@/app-library/components/ethereal/conditional-component/ConditionalComponent";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
	faWhatsapp as WhatsApp,
	faInstagram as Instagram,
	faYoutube as Youtube,
	faFacebook as Facebook,
	faGithub as Github,
	faXTwitter as X,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as Email } from "@fortawesome/free-regular-svg-icons";
import { faEarthAmericas as Other } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GeneralComponent } from "@/app-library/custom-types/Miscellaneous";
import "./social-link.scss";
import { newReadonlyModel } from "@mvc-react/mvc";

export const ELEMENT_NAME = "social-link";

const SocialLink = function ({ model }) {
	const { socialLink } = model.modelView;

	return (
		<Link
			className={ELEMENT_NAME}
			href={socialLink.link}
			title={socialLink.type}
			target="_blank"
			data-testid={ELEMENT_NAME}
		>
			<ConditionalComponent
				model={newReadonlyModel({
					condition: socialLink.type,
					components: new Map<
						typeof socialLink.type,
						GeneralComponent
					>([
						["Facebook", () => <FontAwesomeIcon icon={Facebook} />],
						["Email", () => <FontAwesomeIcon icon={Email} />],
						["GitHub", () => <FontAwesomeIcon icon={Github} />],
						[
							"Instagram",
							() => <FontAwesomeIcon icon={Instagram} />,
						],
						["WhatsApp", () => <FontAwesomeIcon icon={WhatsApp} />],
						["X", () => <FontAwesomeIcon icon={X} />],
						["YouTube", () => <FontAwesomeIcon icon={Youtube} />],
					]),
					FallBackComponent: () => <FontAwesomeIcon icon={Other} />,
				})}
			/>
		</Link>
	);
} as ModeledVoidComponent<SocialLinkModel>;

export default SocialLink;
