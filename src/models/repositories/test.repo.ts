import TestModel, { ITestDocument } from '../test.model';
import { createTest, updateTest, TestRepoInterface } from '../../interfaces/repository';
import { Document, Model } from 'mongoose';

export class TestRepo implements TestRepoInterface {
  private model: Model<ITestDocument>;

  constructor(model: Model<ITestDocument>) {
    this.model = model;
  }

  async get(id: string): Promise<ITestDocument | null> {
    return await this.model.findById(id);
  }

  async getAll(): Promise<ITestDocument[]> {
    return await this.model.find();
  }

  async createTest(data: createTest): Promise<ITestDocument> {
    return await this.model.create(data);
  }

  async updateTest(id: string, data: updateTest): Promise<ITestDocument | null> {
    return await this.model.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string): Promise<ITestDocument | null> {
    return await this.model.findByIdAndDelete(id);
  }
}