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
exports.refreshToken = exports.loginUser = exports.registerUser = exports.validateUserInput = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const usersModel_1 = __importDefault(require("../models/usersModel"));
const express_validator_1 = require("express-validator");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const secretKey = process.env.ACCESS_TOKEN_SECRET;
const refreshSecretKey = process.env.REFRESH_TOKEN_SECRET;
const generateAccessToken = (userId) => {
    return jsonwebtoken_1.default.sign({ userId }, secretKey, { expiresIn: "30m" });
};
const generateRefreshToken = (userId) => {
    return jsonwebtoken_1.default.sign({ userId }, refreshSecretKey, { expiresIn: "7d" });
};
exports.validateUserInput = [
    (0, express_validator_1.check)("email").notEmpty().isString(),
    (0, express_validator_1.check)("password").notEmpty().isString(),
];
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        const existingUser = yield usersModel_1.default.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "Email already in use" });
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const newUser = new usersModel_1.default({
            email,
            password: hashedPassword,
        });
        yield newUser.save();
        res.json({ email: newUser.email, message: "Registration successful" });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Registration failed" });
    }
});
exports.registerUser = registerUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        const user = yield usersModel_1.default.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "Authentication failed" });
        }
        const passwordMatch = yield bcrypt_1.default.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: "Authentication failed" });
        }
        const accessToken = generateAccessToken(user._id);
        const refreshToken = generateRefreshToken(user._id);
        res.json({ accessToken, refreshToken });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Authentication failed" });
    }
});
exports.loginUser = loginUser;
const refreshToken = (req, res) => {
    try {
        const refreshToken = req.body.refreshToken;
        if (!refreshToken) {
            return res.status(400).json({ error: "No refresh token provided" });
        }
        jsonwebtoken_1.default.verify(refreshToken, refreshSecretKey, (err, decoded) => {
            if (err) {
                return res
                    .status(401)
                    .json({ error: "Invalid or expired refresh token" });
            }
            const accessToken = generateAccessToken(decoded.userId);
            res.json({ accessToken });
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Refresh token failed" });
    }
};
exports.refreshToken = refreshToken;
