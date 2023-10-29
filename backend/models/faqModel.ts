import mongoose, { Document, Model } from "mongoose";

interface IFaq extends Document{
    question: string;
    answer: string;
}

const faqSchema = new mongoose.Schema<IFaq>({
    question: String,
    answer: String
  });
  
  const faqModel: Model<IFaq> = mongoose.model<IFaq>(
    "faq",
    faqSchema
  );
  export default faqModel;