import { createTest, TestRepoInterface, updateTest, RepositoryInterface  } from '../../interfaces/repository';

export class TestRepo implements TestRepoInterface, RepositoryInterface {

    constructor() {}

    get(): Object {
        console.log('get one');
        return {"hi testing": "good one good"};
    }
    getAll(): Object[] {
        console.log('get all');
        return [{}];
    }

    createTest(data: createTest): Object {
        console.log('create');
        return {};
    }

    updateTest(id: string, data: updateTest): Object {
        console.log('update');
        return {};
    }
    
}