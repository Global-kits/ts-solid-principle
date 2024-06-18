import { TestServiceInterface } from 'src/interfaces/service/test.service.interface';
import { TestRepo } from '../models/repositories/test.repo';

export class TestService implements TestServiceInterface {
    private repo: TestRepo;
    constructor(repo: TestRepo) {
        this.repo = repo;
    }
    get() {
        return this.repo.get();
    }

}