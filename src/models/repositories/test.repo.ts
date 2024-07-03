import TestModel, { ITestDocument } from '../test.model';
import { createTest, updateTest, TestRepoInterface } from '../../interfaces/repository';
import { Document, Model } from 'mongoose';

export class TestRepo implements TestRepoInterface {
  private model: Model<ITestDocument>;

  constructor(model: Model<ITestDocument>) {
    this.model = model;
  }

  async get(id: string): Promise<Document | null> {
    return await this.model.findById(id).exec();
  }

  async getAll(): Promise<Document[]> {
    return await this.model.find().exec();
  }

  async createTest(data: createTest): Promise<Document> {
    return await this.model.create(data);
  }

  async updateTest(id: string, data: updateTest): Promise<Document | null> {
    return await this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<Document | null> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}