import express from "express";
import { verifyAccessToken } from "../Auth/auth";
import * as serviceController from "../controllers/servicesController";
const s_router = express.Router();

s_router.get("/services/id", serviceController.getServiceById);
s_router.get("/services", serviceController.getAllServices);
s_router.get("/services/title", serviceController.getServiceByTitle);
s_router.post("/services", verifyAccessToken, serviceController.createService);
s_router.put("/services", verifyAccessToken, serviceController.updateService);
s_router.delete("/services", verifyAccessToken, serviceController.deleteService);
export default s_router;
