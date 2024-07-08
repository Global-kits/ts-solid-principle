import { ITestDocument } from "../../models/test.model";
import { createTest } from "../repository";

export interface TestServiceInterface {
    get(): Promise<ITestDocument[]>;
    create(data: createTest): Promise<ITestDocument>
}