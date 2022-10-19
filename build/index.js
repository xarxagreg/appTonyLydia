"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const env_js_1 = require("./env.js");
const app = (0, express_1.default)();
app.get("/", (request, response) => {
    response.send("Hola Mundo");
});
app.listen(env_js_1.PORT, () => { console.log(`El puerto en esccucha es el ${env_js_1.PORT}`); });
