import mongoose, { Document, Model } from "mongoose";

interface IService extends Document {
  service_title: string;
  service_description: string;
  service_head : string;
  service_tag : string;
  service_category: string;
  service_template:string;
  image_url: string;
  created_at: Date;
  created_by: string;
}

const servicesSchema = new mongoose.Schema<IService>({
  service_title: { type: String, required: true, unique: true, trim: true },
  service_description: { type: String, required: true },
  service_category: { type: String, required: true },
  service_template: { type: String, required: true },
  service_head : {type: String},
  service_tag : {type: String},
  image_url: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  created_by: { type: String, required: true}
});

const ServiceModel: Model<IService> = mongoose.model<IService>(
  "Services",
  servicesSchema
);
export default ServiceModel;