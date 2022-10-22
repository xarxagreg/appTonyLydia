"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const env_js_1 = require("./env.js");
const router_js_1 = require("./routes/router.js");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const staticPath = path_1.default.join(__dirname, "..", "public");
console.log(staticPath);
app.use(express_1.default.static(staticPath));
app.use("/", router_js_1.router);
app.listen(env_js_1.PORT, () => { console.log(`El puerto en esccucha es el ${env_js_1.PORT}`); });
