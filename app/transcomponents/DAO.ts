export interface DAO<T> {
    retrieveAll(...args: any): Promise<Array<T>>;
}