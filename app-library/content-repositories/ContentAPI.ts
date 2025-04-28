export interface ContentAPI<T extends ContentRecord> {
	retrieveRecords(): Promise<T[]>;
}

export interface ContentRecord {
	id: string;
}
