import TestModel from '../test.model';
import { createTest, TestRepoInterface, updateTest, RepositoryInterface  } from '../../interfaces/repository';
import { Document } from 'mongoose';

export class TestRepo implements TestRepoInterface, RepositoryInterface<Document> {

    private model: typeof TestModel;
    constructor(model: typeof TestModel) {
        this.model = model;
    }

    async get(id: string): Promise<Document> {
        const result = await this.model.findById(id);
        return result;
    }
    
    async getAll(): Promise<Document[]> {
        return await this.model.find();
    }

    async createTest(data: createTest): Promise<Document> {
       const newT = await this.model.create(data);
       return newT; 
    }

    async updateTest(id: string, data: updateTest): Promise<Document | null> {
        const updateNew = await this.model.findByIdAndUpdate(id, data, { new: true })
        return updateNew;
    }
    
}