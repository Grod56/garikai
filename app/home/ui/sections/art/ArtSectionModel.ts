import { ArtImagePreviewRepositoryModel } from "@/app-library/content-repositories/ArtImagePreviewRepositoryModel";
import { ReadonlyModel } from "@/app-library/custom-types/model/ReadonlyModel";
import { SectionModelView } from "../SectionModel";

export interface ArtSectionView extends SectionModelView {
	artImagePreviewRepositoryModel: ArtImagePreviewRepositoryModel;
}

export type ArtSectionModel = ReadonlyModel<ArtSectionView>;
