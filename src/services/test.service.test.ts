import TestModel from "../models/test.model";
import { TestRepo } from "../models/repositories/test.repo"
import { TestService } from "./test.service"
import mongoose from "mongoose";

describe('Test service', () => {
    let testRepo: TestRepo;
    let testService: TestService;

    beforeEach(async () => {
        await mongoose.connect("mongodb://localhost:27017/test")
                  .then()
                  .catch(err => console.log('Database connection error',err))
        
        testRepo = new TestRepo(TestModel);
        testService = new TestService(testRepo);
    })

    afterAll(async() => {
       await mongoose.connection.close()
    })



    test('should return', async() => {

        const result = await testService.get()
        expect(result).toStrictEqual([])
    })
})