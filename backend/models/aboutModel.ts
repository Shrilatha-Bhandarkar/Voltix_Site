import mongoose, { Document, Model } from "mongoose";

interface IAbout extends Document{
    title: string;
    content : string;
}

const aboutSchema = new mongoose.Schema<IAbout>({
    title: String,
    content: String
  });
  
  const AboutModel: Model<IAbout> = mongoose.model<IAbout>(
    "abouts",
    aboutSchema
  );
  export default AboutModel;