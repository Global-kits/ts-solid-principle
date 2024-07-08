import TestModel, { ITestDocument} from "../models/test.model";
import { TestRepo } from "../models/repositories/test.repo";
import { TestService } from "./test.service";
import mongoose from "mongoose";


const TEST_DATA = {
    name: "Test",
    description: "Test description"
};

jest.mock('../models/test.model')

describe('Test service mock', () => {
    let testService: TestService;
    let testRepo: TestRepo;

    beforeEach(async () => {
        testRepo = new TestRepo(TestModel);
        testService = new TestService(testRepo);

        jest.clearAllMocks();
    })

    test('Should return created obj', async() => {
        const mockCreatedObject: Partial<ITestDocument> = {
            _id: new mongoose.Types.ObjectId(),
            ...TEST_DATA
        };

        (TestModel.create as jest.Mock).mockResolvedValue(mockCreatedObject)
        const test = await testService.create(TEST_DATA)

        expect(test).toBeDefined();
        expect(test.name).toBe(TEST_DATA.name);
        expect(test.description).toBe(TEST_DATA.description);

    })

    test('Should return array', async() => {
        (TestModel.find as jest.Mock).mockResolvedValue([]);

        const test = await testService.get();

        expect(test).toBeDefined();
        expect(test).toBeInstanceOf(Array);
        expect(test).toEqual([]);
    })
})