"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOneUser = void 0;
const userServices_js_1 = require("../../models/services/userServices.js");
function getOneUser(req, res) {
    const user_email = req.params.user_email;
    (0, userServices_js_1.findOneUser)(user_email, (err, result) => {
        if (err) {
            res.status(404).render("pages/login", { errorMessage: "El usuario no está registrado" });
        }
        res.status(200).json(result);
    });
}
exports.getOneUser = getOneUser;
