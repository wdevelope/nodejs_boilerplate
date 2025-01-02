import { Schema, Document, model } from "mongoose";

export interface ITest extends Document {
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

// * test 스키마 정의
const TestSchema = new Schema<ITest>({
  title: { type: String, required: true },

  createdAt: { type: Date, default: Date.now },

  updatedAt: { type: Date },
});

export const Course = model<ITest>("Course", TestSchema);
