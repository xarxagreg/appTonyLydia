"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const logUser_js_1 = require("../handlers/log/logUser.js");
const getOneUser_js_1 = require("../handlers/user/getOneUser.js");
const indexapp_js_1 = require("../handlers/indexapp.js");
const router = express_1.default.Router();
exports.router = router;
router.get("/ranking", indexapp_js_1.indexappTonyLydia);
router.post("/logUser", logUser_js_1.userValidation);
router.get("/users/:user_email", getOneUser_js_1.getOneUser);
