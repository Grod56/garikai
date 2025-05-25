import { PortfolioItemModel } from "../components/content/portfolio-item/portfolio-item";
import { RepositoryModel, RepositoryModelInteraction } from "./repository";

export interface PortfolioItemRepositoryModelView {
	portfolioItemModels: PortfolioItemModel[];
}

export type PortfolioItemRepositoryModelInteraction =
	RepositoryModelInteraction;

export type PortfolioItemRepositoryModel = RepositoryModel<
	PortfolioItemRepositoryModelView,
	RepositoryModelInteraction
>;
