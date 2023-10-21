import express from "express";
import {
  registerUser,
  loginUser,
  refreshToken,
  validateUserInput,
} from "../controllers/userController";

const router = express.Router();

router.post("/registration",validateUserInput, registerUser);
router.post("/login", validateUserInput,loginUser);
router.post("/refresh", validateUserInput,refreshToken);

export default router;
