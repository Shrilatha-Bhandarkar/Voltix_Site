import { Request, Response } from "express";
import { verifyAccessToken, CustomRequest} from "../Auth/auth";
import ServiceModel from "../models/servicesModel";

export const getAllServices = async (req: CustomRequest, res: Response) => {
  try {
    const services = await ServiceModel.find();
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getServiceById = async (req: CustomRequest, res: Response) => {
  try {
    const serviceId = req.query.id;
    const service = await ServiceModel.findById(serviceId);

    if (service) {
      res.status(200).json(service);
    } else {
      const allServices = await ServiceModel.find();
      res.status(404).json({ error: "Service not found", allServices: allServices });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getServiceByTitle = async (req: CustomRequest, res: Response) => {
  try {
    const service_title = req.query.title;
    const service = await ServiceModel.findOne({
      service_title: service_title,
    });

    if (service) {
      res.status(200).json(service);
    } else {
      const allServices = await ServiceModel.find();
      res.status(404).json({ error: "Service not found", allServices: allServices });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
    console.log(err);
  }
};

export const createService = [
  verifyAccessToken,
  async (req: CustomRequest, res: Response) => {
    try {
      const serviceData = req.body;
      const createdBy = req.userId;
      serviceData.created_by = createdBy;
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
  async (req: CustomRequest, res: Response) => {
    try {
      const serviceId = req.query.id;
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
  async (req: CustomRequest, res: Response) => {
    try {
      const serviceId = req.query.id;
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