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
exports.deleteProject = exports.updateProject = exports.createProject = exports.getProjectByTitle = exports.getProjectById = exports.getAllProjects = void 0;
const auth_1 = require("../Auth/auth"); // access token verification middleware
const projectsModel_1 = __importDefault(require("../models/projectsModel"));
const getAllProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projects = yield projectsModel_1.default.find();
        res.status(200).json(projects);
    }
    catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.getAllProjects = getAllProjects;
const getProjectById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projectId = req.params.id;
        const project = yield projectsModel_1.default.findById(projectId);
        if (project) {
            res.status(200).json(project);
        }
        else {
            res.status(404).json({ error: "Project not found" });
        }
    }
    catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.getProjectById = getProjectById;
const getProjectByTitle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project_title = req.params.title;
        const project = yield projectsModel_1.default.findOne({
            project_title: project_title,
        });
        if (project) {
            res.status(200).json(project);
        }
        else {
            res.status(404).json({ error: "Project not found" });
        }
    }
    catch (err) {
        res.status(500).json({ error: "Internal server error" });
        console.log(err);
    }
});
exports.getProjectByTitle = getProjectByTitle;
exports.createProject = [
    auth_1.verifyAccessToken,
    (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const projectData = req.body;
            const createdProject = yield projectsModel_1.default.create(projectData);
            res.status(201).json(createdProject);
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ error: "Internal server error" });
        }
    }),
];
exports.updateProject = [
    auth_1.verifyAccessToken,
    (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const projectId = req.params.id;
            const projectData = req.body;
            const updatedProject = yield projectsModel_1.default.findByIdAndUpdate(projectId, projectData, { new: true });
            if (updatedProject) {
                res.status(200).json(updatedProject);
            }
            else {
                res.status(404).json({ error: "Project not found" });
            }
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ error: "Internal server error" });
        }
    }),
];
exports.deleteProject = [
    auth_1.verifyAccessToken,
    (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const projectId = req.params.id;
            const deletedProject = yield projectsModel_1.default.findByIdAndDelete(projectId);
            if (deletedProject) {
                res.status(200).send('Deleted successfully');
            }
            else {
                res.status(404).json({ error: "Project not found" });
            }
        }
        catch (err) {
            console.error(err);
            res.status(500).json({ error: "Internal server error" });
        }
    }),
];
