"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const testimonialsSchema = new mongoose_1.default.Schema({
    testimonial_author: { type: String, required: true },
    testimonial_content: { type: String, required: true },
    testimonial_service: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    created_by: { type: String, required: true }
});
const TestimonialModel = mongoose_1.default.model("Testimonials", testimonialsSchema);
exports.default = TestimonialModel;
