import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
const cors = require('cors');
import projectRoutes from "./routes/projectsRoutes";
import serviceRoutes from "./routes/servicesRoutes";
import testimonialRoutes from "./routes/testimonialRoutes";
import contactRoutes from "./routes/contactRoutes";
import userRoutes from "./routes/usersRoute";
import routers from "./routes/aboutRoutes";
import faqRoutes from "./routes/faqRoutes";
import { S3 } from 'aws-sdk';
import {upload, storage, s3} from './Auth/bucketUpload';
import { Request, Response } from 'express';
import path from 'path';

dotenv.config();
const app = express();
const port = process.env.PORT;

const _dirname = path.dirname("")
const buildPath = path.join(_dirname , "../backend/dist");
app.use(express.static(buildPath))
app.get("/*", function(req,res){
  res.sendFile(
    path.join(_dirname, "../backend/dist/index.html"),
    function(err) {
      if (err) {
        res.status(500).send(err);
      }
    }
    );
})

app.use(express.json());
app.use(cors({
  origin: 'https://voltixsolutions.web.app', // Replace with your Firebase frontend URL
}));

const mongoURI = process.env.MONGO;

mongoose
  .connect(mongoURI as string)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use("/papi", projectRoutes);
app.use("/sapi", serviceRoutes);
app.use("/tapi", testimonialRoutes);
app.use("/capi", contactRoutes);
app.use("/api", userRoutes);
// app.use("/api",userRoutes);
// app.use("/api", userRoutes);
app.use("/api",routers);
app.use("/api",faqRoutes);

app.post('/upload', upload.single('file'), (req: Request, res: Response) => {
  if (!req.file) {
    console.log(req.file)
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const params: S3.Types.PutObjectRequest = {
    Bucket: process.env.WASABI_BUCKET as string,
    Key: `${Date.now()}_${path.basename(req.file.originalname)}`,
    Body: req.file.buffer,
    ACL: 'public-read', // Set ACL to public-read for public access
  };

  // Upload the file to the Wasabi S3 bucket
  s3.upload(params, (error: Error, data: S3.ManagedUpload.SendData) => {
    if (error) {
        console.log(error)
      return res.status(500).json({ error: 'File upload failed' });
    }
    const expirationTimeInSeconds = 48 * 60 * 60; 
    const fileKey = params.Key;
    const fileUrl = s3.getSignedUrl('getObject', { Bucket: params.Bucket, Key: fileKey,  Expires: expirationTimeInSeconds });

    res.json({ key: fileKey, url: fileUrl });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
