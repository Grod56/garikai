import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { NavbarModel } from "../NavbarModel";
import "./navbar.scss";

export const ELEMENT_NAME = "navbar";

const Navbar = function ({ model }) {
	const { id } = model.modelView;

	return (
		<nav className={ELEMENT_NAME} id={id} data-testid={ELEMENT_NAME}>
			<li className="navlinks">
				<a href="/home#top">Home</a>
				<a href="/home#bio">Bio</a>
				<a href="/home#portfolio">Portfolio</a>
				<a href="/home#art">Art</a>
				<a href="/home#blog">Blog</a>
				<a href="/home#reading-list">Reading List</a>
				<a href="/home#contact-details">Contact Details</a>
			</li>
		</nav>
	);
} as ModeledVoidComponent<NavbarModel>;

export default Navbar;
