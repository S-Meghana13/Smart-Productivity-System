// models/Productivity.js
/*import mongoose from 'mongoose';
const productivitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  productivityScore: { type: Number, required: true },
  activityDetails: { type: String },
  trends: [String],
  lastActivity: { type: Date, default: Date.now }
});
export default mongoose.model('Productivity', productivitySchema);*/import mongoose from 'mongoose';

const productivitySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  productivityScore: { type: Number, required: true },
  lastActivity: { type: Date, default: Date.now },
  activityDetails: {
    timeSpent: { type: Number, default: 0 },
    tasksCompleted: { type: Number, default: 0 },
  },
  trends: [String],
});

export default mongoose.model("Productivity", productivitySchema);
