import mongoose from "mongoose";

const TaskRulesSchema = new mongoose.Schema({
    categories: {
      type: [String],
      required: true
    },
    statuses: {
      type: [String],
      required: true
    }
  });
  

export default mongoose.model("TaskRules", TaskRulesSchema);
