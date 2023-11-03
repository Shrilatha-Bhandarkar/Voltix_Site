"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors = require('cors');
const projectsRoutes_1 = __importDefault(require("./routes/projectsRoutes"));
const servicesRoutes_1 = __importDefault(require("./routes/servicesRoutes"));
const testimonialRoutes_1 = __importDefault(require("./routes/testimonialRoutes"));
const contactRoutes_1 = __importDefault(require("./routes/contactRoutes"));
const usersRoute_1 = __importDefault(require("./routes/usersRoute"));
const aboutRoutes_1 = __importDefault(require("./routes/aboutRoutes"));
const faqRoutes_1 = __importDefault(require("./routes/faqRoutes"));
const bucketUpload_1 = require("./Auth/bucketUpload");
const path_1 = __importDefault(require("path"));
dotenv.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const _dirname = path_1.default.dirname("");
const buildPath = path_1.default.join(_dirname, "../backend/dist");
app.use(express_1.default.static(buildPath));
app.get("/*", function (req, res) {
    res.sendFile(path_1.default.join(_dirname, "../backend/dist/index.html"), function (err) {
        if (err) {
            res.status(500).send(err);
        }
    });
});
app.use(express_1.default.json());
app.use(cors());
const mongoURI = process.env.MONGO;
mongoose_1.default
    .connect(mongoURI)
    .then(() => {
    console.log("Connected to MongoDB");
})
    .catch((err) => {
    console.error("MongoDB connection error:", err);
});
app.use("/papi", projectsRoutes_1.default);
app.use("/sapi", servicesRoutes_1.default);
app.use("/tapi", testimonialRoutes_1.default);
app.use("/capi", contactRoutes_1.default);
app.use("/api", usersRoute_1.default);
// app.use("/api",userRoutes);
// app.use("/api", userRoutes);
app.use("/api", aboutRoutes_1.default);
app.use("/api", faqRoutes_1.default);
app.post('/upload', bucketUpload_1.upload.single('file'), (req, res) => {
    if (!req.file) {
        console.log(req.file);
        return res.status(400).json({ error: 'No file uploaded' });
    }
    const params = {
        Bucket: process.env.WASABI_BUCKET,
        Key: `${Date.now()}_${path_1.default.basename(req.file.originalname)}`,
        Body: req.file.buffer,
        ACL: 'public-read', // Set ACL to public-read for public access
    };
    // Upload the file to the Wasabi S3 bucket
    bucketUpload_1.s3.upload(params, (error, data) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ error: 'File upload failed' });
        }
        const expirationTimeInSeconds = 48 * 60 * 60;
        const fileKey = params.Key;
        const fileUrl = bucketUpload_1.s3.getSignedUrl('getObject', { Bucket: params.Bucket, Key: fileKey, Expires: expirationTimeInSeconds });
        res.json({ key: fileKey, url: fileUrl });
    });
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
