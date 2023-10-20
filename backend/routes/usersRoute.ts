import express from "express";
import {
  registerUser,
  loginUser,
  refreshToken,
  validateUserInput,
} from "../controllers/userController";

const router = express.Router();

router.post("/register",validateUserInput, registerUser);
router.post("/login", validateUserInput,loginUser);
router.post("/refresh", validateUserInput,refreshToken);

export default router;
