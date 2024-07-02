export interface RepositoryInterface<T> {
    get(id: string): Promise<T | null>;
    getAll(): Promise<T[]>;
}

export * from './test.repo.interface';


