"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_js_1 = require("./config.js");
const router_js_1 = require("./routes/router.js");
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.set("view engine", "ejs");
const staticPath = path_1.default.join(__dirname, "..", "public");
app.use(express_1.default.static(staticPath));
app.use("/", router_js_1.router);
app.listen(config_js_1.PORT, () => { console.log(`El puerto en esccucha es el ${config_js_1.PORT}`); });
