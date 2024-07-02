import { Document } from 'mongoose';
export type createTest = {
    name: string;
    description: string;
}

export type updateTest = {
    name?: string;
    description?: string;
}

export interface TestRepoInterface {
    createTest(data: createTest): Promise<Document>;
    updateTest(id: string, data: updateTest): Promise<Document | null>;
}