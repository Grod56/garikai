import "./navbar.scss";
import { NavbarModel } from "./NavbarModel";

export default function Navbar({
	model: { modelInstance },
}: {
	model: NavbarModel;
}) {
	return (
		<nav className="navbar" id={modelInstance.id}>
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
}
