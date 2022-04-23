import { model, Schema, Types } from "mongoose";

interface ITask {
  staffId: Types.ObjectId;
  text: string;
  isComplete: boolean;
  timestamp: string;
}

const TaskSchema = new Schema<ITask>({
  staffId: { type: Schema.Types.ObjectId, required: true },
  text: { type: String, required: true },
  isComplete: { type: Boolean, required: true, default: false },
  timestamp: { type: String, required: true, default: Date.now().toString() }
});

export const TaskModel = model("tasks", TaskSchema);
