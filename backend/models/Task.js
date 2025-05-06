// models/Task.js
import mongoose from 'mongoose';
const timeLogSchema = new mongoose.Schema({
  minutes: {
    type: Number,
    required: true,
    min: [1, 'Logged time must be at least 1 minute'],
  },
  date: { type: Date, default: Date.now },
  note: {
    type: String, // Optional note like "Reviewed DOM", useful for insights
    trim: true,
  },
});

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ['pending', 'in progress', 'completed'],
      default: 'pending',
    },
    category: {
      type: String,
      default: 'general',
      trim: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    timeLogs: [timeLogSchema],
    
    // 🧠 NEW: Goal field
    goal: {
      type: String,
      trim: true,
    },

    // ⏰ NEW: Reminder field
    reminderDate: {
      type: Date,
    },

    // ✅ Optional: To track if reminder sent or not
    reminderSent: {
      type: Boolean,
      default: false,
    },
  },
  
  {
    timestamps: true, // adds createdAt and updatedAt fields
  }
);

export default mongoose.model('Task', taskSchema);
