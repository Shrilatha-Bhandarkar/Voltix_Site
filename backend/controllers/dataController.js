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
exports.getDataById = void 0;
const aboutModel_1 = __importDefault(require("../models/aboutModel"));
const getDataById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Id = req.query.id;
        const data = yield aboutModel_1.default.findById(Id);
        if (data) {
            res.status(200).json(data);
        }
        else {
            // const allProjects = await AboutModel.find();
            // res.status(404).json({ error: "Project not found", allProjects: allProjects });
            res.status(404).json({ error: "Error"
            });
        }
    }
    catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.getDataById = getDataById;
