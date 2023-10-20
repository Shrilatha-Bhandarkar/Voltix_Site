import express from "express";
import * as projectController from "../controllers/projectsController";
import { verifyAccessToken } from "../Auth/auth";
const p_router = express.Router();

p_router.get("/projects/:id", projectController.getProjectById);
p_router.get("/projects", projectController.getAllProjects);
p_router.get("/projects/title/:title", projectController.getProjectByTitle);
p_router.post(
  "/projects/create",
  verifyAccessToken,
  projectController.createProject
);
p_router.put(
  "/projects/update/:id",
  verifyAccessToken,
  projectController.updateProject
);
p_router.delete(
  "/projects/delete/:id",
  verifyAccessToken,
  projectController.deleteProject
);

export default p_router;
