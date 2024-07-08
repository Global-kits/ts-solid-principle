import TestModel from "../models/test.model";
import { TestRepo } from "../models/repositories/test.repo";
import { TestService } from "./test.service";
import mongoose from "mongoose";

const TEST_DATA = {
    name: "Test",
    description: "Test description"
};


describe('Test service', () => {
    let testRepo: TestRepo;
    let testService: TestService;

    beforeAll(async () => {
        await mongoose.connect("mongodb://localhost:27017/test")
            .catch(err => console.log('Database connection error', err));
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    beforeEach(async () => {
        testRepo = new TestRepo(TestModel);
        testService = new TestService(testRepo);
        await TestModel.deleteMany({}); // Clean the collection before each test
    });

    test('should return created obj', async () => {
        const test = await testService.create(TEST_DATA);
        expect(test).toBeDefined();
        expect(test.name).toBe(TEST_DATA.name);
        expect(test.description).toBe(TEST_DATA.description);
    });

    test('should return array', async () => {
        const result = await testService.get();
        expect(result).toBeInstanceOf(Array); // Check if result is an array
        expect(result).toEqual([]); // Check if result is an empty array
    });
});