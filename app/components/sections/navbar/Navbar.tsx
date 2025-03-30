import { NavbarModelInstance } from "./NavbarModel";

export default function Navbar({
	navbarModelInstance,
}: {
	navbarModelInstance: NavbarModelInstance;
}) {
	return (
		<nav
			className={navbarModelInstance.compositeClassNameString}
			id={navbarModelInstance.id}
			data-testid={"navbarModelInstance.id"}
		>
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
