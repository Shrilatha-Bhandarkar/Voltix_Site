"use strict";
// // routes.ts
// import { Router, Request, Response } from 'express';
// import { upload, s3 } from '../Auth/bucketUpload'
// import { S3 } from 'aws-sdk';
// const router = Router();
// router.post('/upload', upload.single('file'), (req: Request, res: Response) => {
//   const file = req.file as Express.Multer.File;
//   if (!file) {
//     return res.status(400).send('No file uploaded.');
//   }
//   const params: S3.PutObjectRequest = {
//     Bucket: process.env.WASABI_BUCKET as string,
//     Key: generateUniqueFileName(file.originalname),
//     Body: file.buffer,
//   };
//   s3.upload(params, (err, data) => {
//     if (err) {
//       console.error('Error uploading file:', err);
//       return res.status(500).send('Error uploading file to Wasabi: ' + err.message);
//     }
//     console.log('File uploaded successfully:', data.Location);
//     return res.send('File uploaded to Wasabi successfully.');
//   });
// });
// function generateUniqueFileName(originalName: string): string {
//   const uniqueName = Date.now() + '_' + originalName;
//   return uniqueName;
// }
// export default router;
// import { Request, Response, Router } from 'express';
// import { upload, s3 } from '../Auth/bucketUpload';
// import { S3 } from 'aws-sdk';
// const router = Router();
// router.post('/upload', upload.single('file'), (req: Request, res: Response) => {
//   const file = req.file as Express.Multer.File;
//   if (!file) {
//     return res.status(400).send('No file uploaded.');
//   }
//   const params: S3.PutObjectRequest = {
//     Bucket: process.env.WASABI_BUCKET as string,
//     Key: generateUniqueFileName(file.originalname),
//     Body: file.buffer,
//   };
//   s3.upload(params, (err, data) => {
//     if (err) {
//       console.error('Error uploading file:', err);
//       return res.status(500).send('Error uploading file to Wasabi: ' + err.message);
//     }
//     console.log('File uploaded successfully:', data.Location);
//     // You can send a success response here
//     return res.status(200).send('File uploaded to Wasabi successfully.');
//   });
// });
// function generateUniqueFileName(originalName: string): string {
//   const uniqueName = Date.now() + '_' + originalName;
//   return uniqueName;
// }
// export default router;
