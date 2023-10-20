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
exports.deleteTestimonial = exports.updateTestimonial = exports.createTestimonial = exports.getTestimonialById = exports.getAllTestimonials = void 0;
const auth_1 = require("../Auth/auth");
const testimonialsModel_1 = __importDefault(require("../models/testimonialsModel"));
const getAllTestimonials = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const testimonials = yield testimonialsModel_1.default.find();
        res.status(200).json(testimonials);
    }
    catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.getAllTestimonials = getAllTestimonials;
exports.getTestimonialById = [auth_1.verifyAccessToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const testimonialId = req.params.id;
            const testimonial = yield testimonialsModel_1.default.findById(testimonialId);
            if (testimonial) {
                res.status(200).json(testimonial);
            }
            else {
                res.status(404).json({ error: "Testimonial not found" });
            }
        }
        catch (err) {
            res.status(500).json({ error: "Internal server error" });
        }
    }),];
exports.createTestimonial = [
    auth_1.verifyAccessToken,
    (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const testimonialData = req.body;
            const createdTestimonial = yield testimonialsModel_1.default.create(testimonialData);
            res.status(201).json(createdTestimonial);
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ error: "Internal server error" });
        }
    }),
];
exports.updateTestimonial = [
    auth_1.verifyAccessToken,
    (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const testimonialId = req.params.id;
            const testimonialData = req.body;
            const updatedTestimonial = yield testimonialsModel_1.default.findByIdAndUpdate(testimonialId, testimonialData, { new: true });
            if (updatedTestimonial) {
                res.status(200).json(updatedTestimonial);
            }
            else {
                res.status(404).json({ error: "Testimonial not found" });
            }
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ error: "Internal server error" });
        }
    }),
];
exports.deleteTestimonial = [
    auth_1.verifyAccessToken,
    (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const testimonialId = req.params.id;
            const deletedTestimonial = yield testimonialsModel_1.default.findByIdAndDelete(testimonialId);
            if (deletedTestimonial) {
                res.status(200).send('Deleted successfully');
            }
            else {
                res.status(404).json({ error: "Testimonial not found" });
            }
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ error: "Internal server error" });
        }
    }),
];
