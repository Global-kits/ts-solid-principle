import { Express } from "express";
import { TestController } from "../controllers/test.controller";
import { TestService } from "../services/test.service";
import { TestRepo } from "../models/repositories/test.repo";

const PREFIX = "/api";

const testRepo = new TestRepo()
const testService = new TestService(testRepo);
const testController = new TestController(testService)

export default (router: Express) => {

  router.get('/test', (req, res) => testController.get(req, res))
  
  return;
};
