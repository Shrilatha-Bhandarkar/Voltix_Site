import mongoose, { Schema, Document } from "mongoose";

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

export interface IUser extends Document {
  email: string;
  password: string;
}

const userSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true, match: emailPattern },
  password: { type: String, required: true },
});

export default mongoose.model<IUser>("User", userSchema);
