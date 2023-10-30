import mongoose, { Document, Model } from "mongoose";

interface ITestimonial extends Document {
  testimonial_author: string;
  testimonial_content: string;
  testimonial_service:string;
  created_at: Date;
  created_by: string;
}

const testimonialsSchema = new mongoose.Schema<ITestimonial>({
  testimonial_author: { type: String, required: true },
  testimonial_content: { type: String, required: true },
  testimonial_service: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  created_by: { type: String, required: true}
});

const TestimonialModel: Model<ITestimonial> = mongoose.model<ITestimonial>(
  "Testimonials",
  testimonialsSchema
);
export default TestimonialModel;