"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const contactSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    phone_no: { type: Number, required: true },
    email: { type: String, required: true, match: emailPattern },
    message: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
});
const ContactModel = mongoose_1.default.model("Contacts", contactSchema);
exports.default = ContactModel;
