import { NavbarModelInstance } from "./NavbarModel";

export default function Navbar({
    navbarModelInstance
}: {
    navbarModelInstance: NavbarModelInstance
}) {
    return (
        <nav className={navbarModelInstance.compositeClassNameString} id={navbarModelInstance.id}>
            <li className="navlinks">
                <a href="#top">Home</a>
                <a href="#bio">Bio</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#art">Art</a>
                <a href="#blog">Blog</a>
                <a href="#reading-list">Reading List</a>
                <a href="#contact-details">Contact Details</a>
            </li>
        </nav>
    );
}