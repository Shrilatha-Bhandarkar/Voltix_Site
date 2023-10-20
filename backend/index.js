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
const projectsRoutes_1 = __importDefault(require("./routes/projectsRoutes"));
const servicesRoutes_1 = __importDefault(require("./routes/servicesRoutes"));
const testimonialRoutes_1 = __importDefault(require("./routes/testimonialRoutes"));
const contactRoutes_1 = __importDefault(require("./routes/contactRoutes"));
const usersRoute_1 = __importDefault(require("./routes/usersRoute"));
dotenv.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
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
app.use("/api", usersRoute_1.default);
app.use("/api", usersRoute_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
