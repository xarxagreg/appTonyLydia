import express from "express";

import { indexappTonyLydia } from "../handlers/indexapp.js";
import { rankingStudents } from "../handlers/listRankingStudents.js";
import { getOneStudent } from "../handlers/getOneStudent.js";

const router=express.Router();

router.get("/rankstudents", rankingStudents);
//router.post("/puntos",enviarPuntos);

router.get("/students/:id_student", getOneStudent);
router.get("/ranking", indexappTonyLydia)


export {router};