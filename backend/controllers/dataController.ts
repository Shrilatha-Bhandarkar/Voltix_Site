import { Request, Response } from "express";
import AboutModel from "../models/aboutModel";

export const getData = async (req: Request, res: Response) => {
    try {
      const data = await AboutModel.find();
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
    }
  };