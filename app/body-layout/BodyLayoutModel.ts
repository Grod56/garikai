import { FooterModel } from "@/app-library/components/content/footer/FooterModel";
import { HeaderModel } from "@/app-library/components/content/header/HeaderModel";
import { NavbarModel } from "@/app-library/components/content/navbar/NavbarModel";
import { ReadonlyModel } from "@/app-library/custom-types/model/ReadonlyModel";

export interface BodyLayoutView {
	headerModel: HeaderModel;
	navbarModel: NavbarModel;
	footerModel: FooterModel;
}

export type BodyLayoutModel = ReadonlyModel<BodyLayoutView>;
