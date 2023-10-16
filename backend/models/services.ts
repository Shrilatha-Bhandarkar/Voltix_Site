import mongoose, { Document, Model } from "mongoose";

// Define the interface for the Service document
interface IService extends Document {
  serviceId: string;
  serviceTitle: string;
  serviceDescription: string;
  serviceCategory: string;
  imageURL: string;
  createdAt: Date;
}

// Create the Mongoose schema for the Service model
const servicesSchema = new mongoose.Schema<IService>({
  serviceId: { type: String, required: true, unique: true, trim: true },
  serviceTitle: { type: String, required: true, unique: true, trim: true },
  serviceDescription: { type: String, required: true },
  serviceCategory: { type: String, required: true },
  imageURL: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Create and export the Service model
const ServiceModel: Model<IService> = mongoose.model<IService>("Services", servicesSchema);
export default ServiceModel;