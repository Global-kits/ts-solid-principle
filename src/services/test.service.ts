import { TestServiceInterface } from 'src/interfaces/service/test.service.interface';
import { TestRepo } from '../models/repositories/test.repo';
import { createTest, TestRepoInterface } from 'src/interfaces/repository';
import { ITestDocument } from '../models/test.model';

export class TestService implements TestServiceInterface {
   
    constructor(private repo: TestRepo) {}

    async get(): Promise<ITestDocument[]> {
        return await this.repo.getAll();
    }

    async create(data: createTest): Promise<ITestDocument> {
        const result = await this.repo.createTest(data);
        return result;
    }

}