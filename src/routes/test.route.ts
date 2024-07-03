import { Express, Router } from "express";
import { TestController } from "../controllers/test.controller";
import { TestService } from "../services/test.service";
import { TestRepo } from "../models/repositories/test.repo";
import TestModel from "../models/test.model";

const router = Router();

const testRepo = new TestRepo(TestModel)
const testService = new TestService(testRepo);
const testController = new TestController(testService)

router.get('/test', testController.get)

export default router;