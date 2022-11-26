"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const indexapp_js_1 = require("../handlers/indexapp.js");
const listRankingStudents_js_1 = require("../handlers/listRankingStudents.js");
const router = express_1.default.Router();
exports.router = router;
router.get("/rankstudents", listRankingStudents_js_1.rankingStudents);
router.get("/ranking", indexapp_js_1.indexappTonyLydia);
