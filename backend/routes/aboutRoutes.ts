import express from "express";
import * as dataController from "../controllers/dataController";
const routers = express.Router();

routers.get("/data",dataController.getDataById);

export default routers;