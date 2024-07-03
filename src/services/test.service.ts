import { TestServiceInterface } from 'src/interfaces/service/test.service.interface';
import { TestRepo } from '../models/repositories/test.repo';
import { TestRepoInterface } from 'src/interfaces/repository';

export class TestService implements TestServiceInterface {
   
    constructor(private repo: TestRepo) {}

    async get() {
        return await this.repo.getAll();
    }

}