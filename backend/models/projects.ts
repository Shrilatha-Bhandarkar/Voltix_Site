import mongoose, { Document, Model } from "mongoose";

// Define the interface for the Project document
interface IProject extends Document {
  ProjectId: string;
  ProjectTitle: string;
  ProjectDescription: string;
  ProjectCategory: string;
  imageURL: string;
  createdAt: Date;
}

// Create the Mongoose schema for the Project model
const projectsSchema = new mongoose.Schema<IProject>({
  ProjectId: { type: String, required: true, unique: true, trim: true },
  ProjectTitle: { type: String, required: true, unique: true, trim: true },
  ProjectDescription: { type: String, required: true },
  ProjectCategory: { type: String, required: true },
  imageURL: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Create and export the Project model
const ProjectModel: Model<IProject> = mongoose.model<IProject>("Projects", projectsSchema);
export default ProjectModel;