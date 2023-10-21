"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const storage = multer_1.default.memoryStorage();
const upload = (0, multer_1.default)({ storage: storage });
aws_sdk_1.default.config.update({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
    region: process.env.REGION,
});
const s3 = new aws_sdk_1.default.S3();
app.post('/upload', upload.single('file'), (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).send('No file uploaded.');
    }
    const params = {
        Bucket: process.env.WASABI_BUCKET,
        Key: generateUniqueFileName(file.originalname),
        Body: file.buffer,
    };
    s3.upload(params, (err, data) => {
        if (err) {
            console.error('Error uploading file:', err);
            return res.status(500).send('Error uploading file to Wasabi: ' + err.message);
        }
        console.log('File uploaded successfully:', data.Location);
        return res.send('File uploaded to Wasabi successfully.');
    });
});
function generateUniqueFileName(originalName) {
    const uniqueName = Date.now() + '_' + originalName;
    return uniqueName;
}
