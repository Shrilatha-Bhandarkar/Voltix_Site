"use strict";
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
exports.getFaq = exports.getData = void 0;
const aboutModel_1 = __importDefault(require("../models/aboutModel"));
const faqModel_1 = __importDefault(require("../models/faqModel"));
const getData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield aboutModel_1.default.find();
        res.status(200).json(data);
    }
    catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.getData = getData;
const getFaq = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const faq = yield faqModel_1.default.find();
        res.status(200).json(faq);
    }
    catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.getFaq = getFaq;
