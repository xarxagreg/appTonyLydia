"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findRankingStudents = void 0;
const config_js_1 = require("../../config.js");
function findRankingStudents(callback) {
    const queryString = "SELECT name, first_surname, second_surname,activa_points_balance FROM student ORDER BY activa_points_balance DESC ";
    config_js_1.db.query(queryString, (err, result) => {
        if (err)
            callback(err, null);
        const students = result;
        callback(null, students);
    });
}
exports.findRankingStudents = findRankingStudents;
