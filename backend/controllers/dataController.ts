import { Request, Response } from "express";
import AboutModel from "../models/aboutModel";
import faqModel from "../models/faqModel";

export const getData = async (req: Request, res: Response) => {
    try {
      const data = await AboutModel.find();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
    }
  };
export const getFaq =async (req:Request, res: Response) => {
  try{
    const faq = await faqModel.find();
    res.status(200).json(faq);
  }catch(err){
    res.status(500).json({error: "Internal server error"});
  }
};