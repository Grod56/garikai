import '../../../../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope as Email } from '@fortawesome/free-regular-svg-icons';
import { 
    faWhatsapp as WhatsApp,
    faInstagram as Instagram,
    faYoutube as Youtube,
    faFacebook as Facebook,
    faGithub as Github
} from '@fortawesome/free-brands-svg-icons';
import { FooterModelInstance } from './FooterModel';


export default function Footer(
    {
        footerModelInstance
    }: {
        footerModelInstance: FooterModelInstance
    }
) {
    return (
        <footer 
            className={footerModelInstance.compositeClassNameString}
            id={footerModelInstance.id}
            data-testid={footerModelInstance.footerModelInstanceClassName.getClassNameString}
        >
            <div className="footer-container">
                <hr />
                <span className="copyright" data-testid='copyright'> 
                    {footerModelInstance.copyright}
                </span>
                <div className="socials">
                    <a href="mailto:rodneygaryx29@gmail.com"><FontAwesomeIcon icon={Email} /></a>
                    <a href="https://wa.me/263733343216?text=Hello Garikai, I was referred to this number from your website."><FontAwesomeIcon icon={WhatsApp} /></a>
                    <a href="https://instagram.com/garikai_art"><FontAwesomeIcon icon={Instagram} /></a>
                    <a href="https://youtube.com/c/GarikaiGumbo"><FontAwesomeIcon icon={Youtube} /></a>
                    <a href="https://facebook.com/garikairodney"><FontAwesomeIcon icon={Facebook} /></a>
                    <a href="https://github.com/Grod56"><FontAwesomeIcon icon={Github} /></a>
                </div>
            </div>
        </footer>
    );
}