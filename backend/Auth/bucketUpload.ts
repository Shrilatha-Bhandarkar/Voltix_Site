import express, { Request, Response } from 'express';
import aws, { S3 } from 'aws-sdk';
import multer, { memoryStorage } from 'multer';
import dotenv from 'dotenv';

dotenv.config();

// Configure AWS S3 client with your Wasabi credentials
export const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY as string,
  secretAccessKey: process.env.AWS_SECRET_KEY as string,
  endpoint: 'https://s3.wasabisys.com', // Wasabi S3 endpoint
});

// Set up CORS to allow cross-origin requests


// Set up multer to handle file uploads
export const storage = multer.memoryStorage();


export const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // Limit file size to 5MB
});