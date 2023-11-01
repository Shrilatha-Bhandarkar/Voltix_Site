"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = exports.storage = exports.s3 = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const multer_1 = __importDefault(require("multer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// Configure AWS S3 client with your Wasabi credentials
exports.s3 = new aws_sdk_1.default.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    endpoint: 'https://s3.wasabisys.com', // Wasabi S3 endpoint
});
// Set up CORS to allow cross-origin requests
// Set up multer to handle file uploads
exports.storage = multer_1.default.memoryStorage();
exports.upload = (0, multer_1.default)({
    storage: exports.storage,
    limits: { fileSize: 1024 * 1024 * 5 }, // Limit file size to 5MB
});
