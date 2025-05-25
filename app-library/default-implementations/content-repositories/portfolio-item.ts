import { PortfolioItemModel } from "@/app-library/components/content/portfolio-item/portfolio-item";
import {
	PortfolioItemAPI,
	PortfolioItemRecord,
} from "@/app-library/content-apis/portfolio-item";
import {
	PortfolioItemRepositoryModelInteraction,
	PortfolioItemRepositoryModelView,
} from "@/app-library/content-repositories/portfolio-item";
import {
	RepositoryInteractionType,
	RepositoryModelInteraction,
} from "@/app-library/content-repositories/repository";
import { ImagePlaceholder } from "@/app-library/utility-types/image";
import { newReadonlyModel } from "@mvc-react/mvc";
import { ViewInteractionInterface } from "@mvc-react/stateful";

type PortfolioItemRepositoryVIInterface = ViewInteractionInterface<
	PortfolioItemRepositoryModelView,
	RepositoryModelInteraction | { type: "Alala" }
>;

export function newPortfolioItemRepositoryVIInterface(
	api: PortfolioItemAPI
): PortfolioItemRepositoryVIInterface {
	function produceModelView(
		interaction: PortfolioItemRepositoryModelInteraction
	): Promise<PortfolioItemRepositoryModelView> {
		switch (interaction.type) {
			case RepositoryInteractionType.RETRIEVE:
				return _retrievePortfolioItemRepositorySnapshot(api);
		}
	}

	return { produceModelView };
}

async function _retrievePortfolioItemRepositorySnapshot(
	api: PortfolioItemAPI
): Promise<PortfolioItemRepositoryModelView> {
	const records = await api.retrieveRecords();
	const retrievedModels: PortfolioItemModel[] = records.map(
		(record: PortfolioItemRecord) => {
			return newReadonlyModel({
				id: `portfolio-item_${record.id}`,
				title: record.title,
				description: record.description,
				category: record.category,
				link: new URL(record.link),
				thumbnail: {
					source: record.thumbnailSource,
					alt: record.thumbnailAlt,
					placeholder:
						record.thumbnailPlaceholder as ImagePlaceholder,
				},
			});
		}
	);
	return { portfolioItemModels: retrievedModels };
}
