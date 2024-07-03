import mongoose, { Schema, Document, Model } from "mongoose";

interface ITest {
  name: string;
  description?: string;
}

interface ITestDocument extends ITest, Document {}

const testSchema = new Schema<ITestDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
      },
    },
  }
);

const TestModel: Model<ITestDocument> = mongoose.model<ITestDocument>("Test", testSchema);

export default TestModel;
export type { ITest, ITestDocument };