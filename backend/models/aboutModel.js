"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const aboutSchema = new mongoose_1.default.Schema({
    title: String,
    content: String
});
const AboutModel = mongoose_1.default.model("Contacts", aboutSchema);
exports.default = AboutModel;
