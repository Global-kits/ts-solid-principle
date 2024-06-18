import { Request, Response } from "express";
import { TestService } from "../services/test.service";
import { TestControllerInterface } from "../interfaces/controller/test.controller";

export class TestController implements TestControllerInterface {
    private service: TestService;
    constructor(service: TestService) {
        this.service = service;
    }

    get(req: Request, res: Response) {
        const data = this.service.get();
        res.json(data);
    }

}   