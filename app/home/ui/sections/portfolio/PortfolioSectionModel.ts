import { ReadonlyModel } from "@mvc-react/mvc";
import { SectionModelView } from "../section";
import { PortfolioItemAPI } from "@/app-library/content-apis/portfolio-item";

export interface PortfolioSectionView extends SectionModelView {
	portfolioItemAPI: PortfolioItemAPI;
}
export type PortfolioSectionModel = ReadonlyModel<PortfolioSectionView>;
