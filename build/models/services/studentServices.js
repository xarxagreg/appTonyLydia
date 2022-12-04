"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOneStudent = exports.sendPoints = exports.findRankingStudents = void 0;
const config_js_1 = require("../../config.js");
function sendPoints(point, callback) {
    const queryString = "INSERT INTO activa_work_student_rel(xp_points) VALUES (?)";
    config_js_1.db.query(queryString, [point.xp_points], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const insertId = result.insertId;
        callback(null, insertId);
    });
}
exports.sendPoints = sendPoints;
;
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
function findOneStudent(id, callback) {
    const queryString = "SELECT id, name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code FROM student WHERE id = ?";
    config_js_1.db.query(queryString, [id], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const studentFound = result[0];
        callback(null, studentFound);
    });
}
exports.findOneStudent = findOneStudent;
