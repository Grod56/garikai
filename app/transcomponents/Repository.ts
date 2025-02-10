export interface Repository<T> {

    retrieveAll(...args: any): Promise<Array<T>>;
    retrieveOne(id: any): Promise<T>;
    
}