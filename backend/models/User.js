import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: String,
  email: { type: String, required: true, unique: true },
  password: String,
  googleId: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  }
});

export default mongoose.model("User", userSchema);
