import express from "express";
import { verifyAccessToken } from "../Auth/auth";
import * as serviceController from "../controllers/servicesController";
const s_router = express.Router();

s_router.get("/services/:id", serviceController.getServiceById);
s_router.get("/services", serviceController.getAllServices);
s_router.get("/services/title/:title", serviceController.getServiceByTitle);
s_router.post("/services/create", verifyAccessToken, serviceController.createService);
s_router.put("/services/update/:id", verifyAccessToken, serviceController.updateService);
s_router.delete("/services/delete/:id", verifyAccessToken, serviceController.deleteService);
export default s_router;
