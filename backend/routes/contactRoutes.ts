import express from "express";
import * as contactController from "../controllers/contactController";

const c_router = express.Router();

c_router.post("/contact-entries", contactController.postContact);

export default c_router;
