import { Request, Response } from "express";
import AboutModel from "../models/aboutModel";

export const getDataById = async (req: Request, res: Response) => {
    try {
      const Id = req.query.id;
      const data = await AboutModel.findById(Id);
  
      if (data) {
        res.status(200).json(data);
      } else {
        // const allProjects = await AboutModel.find();
        // res.status(404).json({ error: "Project not found", allProjects: allProjects });
        res.status(404).json({error:"Error"
        })
      }
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
    }
  };