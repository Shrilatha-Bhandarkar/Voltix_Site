import { Request, Response } from "express";
import { verifyAccessToken } from "../Auth/auth";
import ServiceModel from "../models/servicesModel";

export const getAllServices = async (req: Request, res: Response) => {
  try {
    const services = await ServiceModel.find();
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getServiceById = async (req: Request, res: Response) => {
  try {
    const serviceId = req.params.id;
    const service = await ServiceModel.findById(serviceId);

    if (service) {
      res.status(200).json(service);
    } else {
      res.status(404).json({ error: "Service not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getServiceByTitle = async (req: Request, res: Response) => {
  try {
    const service_title = req.params.title;
    const service = await ServiceModel.findOne({
      service_title: service_title,
    });

    if (service) {
      res.status(200).json(service);
    } else {
      res.status(404).json({ error: "Service not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
    console.log(err);
  }
};

export const createService = [
  verifyAccessToken,
  async (req: Request, res: Response) => {
    try {
      const serviceData = req.body;
      const createdService = await ServiceModel.create(serviceData);
      res.status(201).json(createdService);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  },
];

export const updateService = [
  verifyAccessToken,
  async (req: Request, res: Response) => {
    try {
      const serviceId = req.params.id;
      const serviceData = req.body;
      const updatedService = await ServiceModel.findByIdAndUpdate(
        serviceId,
        serviceData,
        { new: true }
      );

      if (updatedService) {
        res.status(200).json(updatedService);
      } else {
        res.status(404).json({ error: "Service not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  },
];

export const deleteService = [
  verifyAccessToken,
  async (req: Request, res: Response) => {
    try {
      const serviceId = req.params.id;
      const deletedService = await ServiceModel.findByIdAndDelete(serviceId);

      if (deletedService) {
        res.status(200).send("Service deleted successfully" );
      } else {
        res.status(404).json({ error: "Service not found" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  },
];