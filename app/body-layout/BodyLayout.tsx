import { ModeledContainerComponent } from "@/app-library/custom-types/ModeledComponent";
import { BodyLayoutModel } from "./BodyLayoutModel";
import Footer from "@/app-library/components/content/footer/ui/Footer";
import Header from "@/app-library/components/content/header/ui/Header";
import Navbar from "@/app-library/components/content/navbar/ui/Navbar";

const BodyLayout = function ({ model, children }) {
	const { headerModel, navbarModel, footerModel } = model.modelView;

	return (
		<>
			<Header model={headerModel} />
			<Navbar model={navbarModel} />
			{children}
			<Footer model={footerModel} />
		</>
	);
} as ModeledContainerComponent<BodyLayoutModel>;

export default BodyLayout;
