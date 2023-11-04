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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postContact = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const contactModel_1 = __importDefault(require("../models/contactModel"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
function sendEmailCopy(data) {
    const transporter = nodemailer_1.default.createTransport({
        service: process.env.SERVICE,
        auth: {
            user: process.env.USER,
            pass: process.env.PASS,
        },
    });
    const mailOptions = {
        from: process.env.FROM,
        to: process.env.TO,
        subject: "Contact Form Submission",
        text: JSON.stringify(data),
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
        }
        else {
            console.log("Email sent:", info.response);
        }
    });
}
function postContact(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, phone_no, email, message } = req.body;
        if (!name || !phone_no || !email || !message) {
            return res
                .status(400)
                .json({ error: "Invalid request or missing required fields." });
        }
        // Storing the data in the MongoDB
        const newContact = new contactModel_1.default({
            name,
            phone_no,
            email,
            message,
        });
        try {
            yield newContact.save();
            sendEmailCopy(req.body);
            return res
                .status(201)
                .json({ message: "Contact entry created successfully." });
        }
        catch (err) {
            console.log(err);
            return res.status(500).json({ error: "Internal server error." });
        }
    });
}
exports.postContact = postContact;
