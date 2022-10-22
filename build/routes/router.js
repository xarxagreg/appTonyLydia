"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const handle_js_1 = require("../handlers/handle.js");
const formHandler_js_1 = require("../handlers/formHandler.js");
const router = express_1.default.Router();
exports.router = router;
router.get("/hola", handle_js_1.Handler.salute);
router.post("/contactForm", formHandler_js_1.FormHandler.returnEmail);
