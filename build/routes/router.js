"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const procesarFormulario_js_1 = require("../handlers/procesarFormulario.js");
const router = express_1.default.Router();
exports.router = router;
router.post("/contactForm", procesarFormulario_js_1.FormularioProcesado.respuestaFormulario);
