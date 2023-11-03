import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();
const secretKey = process.env.ACCESS_TOKEN_SECRET;

export interface CustomRequest extends Request {
    userId?: any;
}
export const verifyAccessToken = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ error: "Access token is missing or invalid" });
    }

    const accessToken = authHeader.substring(7);

    if (!accessToken) {
      return res.status(401).json({ error: "Access token is missing" });
    }
    const decoded = jwt.verify(accessToken, secretKey as string) as {
      userId: string;
    };
    req.userId = decoded.userId;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ error: "Invalid access token" });
  }
};
export const getUserId = (req: CustomRequest)=>{
  return req.userId;
}