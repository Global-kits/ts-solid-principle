import { Request, Response } from "express";
import { TestService } from "../services/test.service";
import { TestControllerInterface } from "../interfaces/controller/test.controller";
import AutoBindMethod from "../utils/auto-bind";

export class TestController implements TestControllerInterface {

    constructor(private service: TestService) {}

    @AutoBindMethod
    async get(req: Request, res: Response) {
        const data = await this.service.get();
        res.json(data);
    }

}   