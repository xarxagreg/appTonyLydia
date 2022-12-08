"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOneUser = void 0;
const config_1 = require("../../config");
function findOneUser(user_email, callback) {
    const queryString = "SELECT id, email,password, role FROM user WHERE email = ?";
    config_1.db.query(queryString, [user_email], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const studentFound = result[0];
        callback(null, studentFound);
    });
}
exports.findOneUser = findOneUser;
