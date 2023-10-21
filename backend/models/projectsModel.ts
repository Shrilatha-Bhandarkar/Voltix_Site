import mongoose, { Document, Model } from "mongoose";

interface IProject extends Document {
  project_title: string;
  project_description: string;
  project_category: string;
  image_url: string;
  created_at: Date;
  created_by: string;
}

const projectsSchema = new mongoose.Schema<IProject>({
  project_title: { type: String, required: true, unique: true, trim: true },
  project_description: { type: String, required: true },
  project_category: { type: String, required: true },
  image_url: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  created_by: { type: String, required: true}
});

const ProjectModel: Model<IProject> = mongoose.model<IProject>(
  "Projects",
  projectsSchema
);
export default ProjectModel;