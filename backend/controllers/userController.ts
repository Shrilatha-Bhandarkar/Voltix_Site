import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt, { VerifyErrors } from "jsonwebtoken";
import UserModel, { IUser } from "../models/usersModel";
import { check, validationResult } from "express-validator";
import * as dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.ACCESS_TOKEN_SECRET;

const refreshSecretKey = process.env.REFRESH_TOKEN_SECRET;
const generateAccessToken = (userId: string): string => {
  return jwt.sign({ userId }, secretKey as string, { expiresIn: "30m" });
};
const generateRefreshToken = (userId: string): string => {
  return jwt.sign({ userId }, refreshSecretKey as string, { expiresIn: "7d" });
};

export const validateUserInput = [
  check("email").notEmpty().isString(),
  check("password").notEmpty().isString(),
];

export const registerUser = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.json({ email:newUser.email, message: "Registration successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Registration failed" });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Authentication failed" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Authentication failed" });
    }

    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    res.json({ accessToken, refreshToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Authentication failed" });
  }
};

export const refreshToken = (req: Request, res: Response) => {
  try {
    const refreshToken = req.body.refreshToken;

    if (!refreshToken) {
      return res.status(400).json({ error: "No refresh token provided" });
    }
    jwt.verify(
      refreshToken,
      refreshSecretKey as string,
      (err: VerifyErrors | null, decoded: any) => {
        if (err) {
          return res
            .status(401)
            .json({ error: "Invalid or expired refresh token" });
        }
        const accessToken = generateAccessToken(decoded.userId);

        res.json({ accessToken });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Refresh token failed" });
  }
};