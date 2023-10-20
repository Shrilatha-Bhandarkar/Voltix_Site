import express from "express";
import { verifyAccessToken } from "../Auth/auth";
import * as testimonialController from "../controllers/testimonialsController";
const t_router = express.Router();

t_router.get("/testimonials", testimonialController.getAllTestimonials);
t_router.get("/testimonials/:id",verifyAccessToken,testimonialController.getTestimonialById);
t_router.post("/testimonials/create",verifyAccessToken,testimonialController.createTestimonial);
t_router.put("/testimonials/update/:id",verifyAccessToken,testimonialController.updateTestimonial);
t_router.delete("/testimonials/delete/:id",verifyAccessToken,testimonialController.deleteTestimonial);

export default t_router;
