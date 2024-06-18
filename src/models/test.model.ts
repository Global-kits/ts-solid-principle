import mongoose from "mongoose";

const testSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
        description: { 
            type: String, 
            required: false 
        },
	},
	{ 
        timestamps: true,
        toJSON: {
            transform(doc, ret) {
                delete ret.__v;
            }
        }
    }
);

const TestModel = mongoose.model("Test", testSchema);

export default TestModel;
