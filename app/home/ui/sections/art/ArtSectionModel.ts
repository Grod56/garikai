import { ArtImagePreviewAPI } from "@/app-library/content-apis/ArtImagePreviewAPI";
import { ReadonlyModel } from "@/app-library/custom-types/model/ReadonlyModel";
import { SectionModelView } from "../SectionModel";

export interface ArtSectionView extends SectionModelView {
	artImagePreviewAPI: ArtImagePreviewAPI;
}

export type ArtSectionModel = ReadonlyModel<ArtSectionView>;
