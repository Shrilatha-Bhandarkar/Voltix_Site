import express from "express";
import * as dataController from "../controllers/dataController";
const f_routers = express.Router();

f_routers.get("/faq",dataController.getFaq);

export default f_routers;