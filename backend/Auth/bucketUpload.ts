import express from 'express';
import multer from 'multer';
import AWS from 'aws-sdk';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_KEY,
  region: process.env.REGION,
});

const s3 = new AWS.S3();

app.post('/upload', upload.single('file'), (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).send('No file uploaded.');
  }

  const params: AWS.S3.Types.PutObjectRequest = {
    Bucket: process.env.WASABI_BUCKET as string,
    Key: generateUniqueFileName(file.originalname),
    Body: file.buffer,
  };

  s3.upload(params, (err: Error, data: AWS.S3.ManagedUpload.SendData) => {
    if (err) {
      console.error('Error uploading file:', err);
      return res.status(500).send('Error uploading file to Wasabi: ' + err.message);
    }

    console.log('File uploaded successfully:', data.Location);
    return res.send('File uploaded to Wasabi successfully.');
  });
});


function generateUniqueFileName(originalName: string): string {
  const uniqueName = Date.now() + '_' + originalName;
  return uniqueName;
}
