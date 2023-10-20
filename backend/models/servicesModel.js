"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const servicesSchema = new mongoose_1.default.Schema({
    service_title: { type: String, required: true, unique: true, trim: true },
    service_description: { type: String, required: true },
    service_category: { type: String, required: true },
    image_url: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
});
const ServiceModel = mongoose_1.default.model("Services", servicesSchema);
exports.default = ServiceModel;
