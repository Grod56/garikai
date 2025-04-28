import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope as Email } from "@fortawesome/free-regular-svg-icons";
import {
	faWhatsapp as WhatsApp,
	faInstagram as Instagram,
	faYoutube as Youtube,
	faFacebook as Facebook,
	faGithub as Github,
} from "@fortawesome/free-brands-svg-icons";
import { FooterModel } from "../FooterModel";
import Link from "next/link";
import "./footer.scss";

export default function Footer({
	model: { modelInstance },
}: {
	model: FooterModel;
}) {
	return (
		<footer className="footer" id={modelInstance.id} data-testid="footer">
			<div className="footer-container">
				<hr />
				<span className="copyright">{modelInstance.copyright}</span>
				<div className="socials">
					<Link href="mailto:rodneygaryx29@gmail.com" target="_blank">
						<FontAwesomeIcon icon={Email} />
					</Link>
					<Link
						href="https://wa.me/263733343216?text=Hello Garikai, I was referred to this number from your website."
						target="_blank"
					>
						<FontAwesomeIcon icon={WhatsApp} />
					</Link>
					<Link
						href="https://instagram.com/garikai_art"
						target="_blank"
					>
						<FontAwesomeIcon icon={Instagram} />
					</Link>
					<Link
						href="https://youtube.com/c/GarikaiGumbo"
						target="_blank"
					>
						<FontAwesomeIcon icon={Youtube} />
					</Link>
					<Link
						href="https://facebook.com/garikairodney"
						target="_blank"
					>
						<FontAwesomeIcon icon={Facebook} />
					</Link>
					<Link href="https://github.com/Grod56" target="_blank">
						<FontAwesomeIcon icon={Github} />
					</Link>
				</div>
			</div>
		</footer>
	);
}
