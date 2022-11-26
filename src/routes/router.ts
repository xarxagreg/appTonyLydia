import express from "express";

import { indexappTonyLydia } from "../handlers/indexapp.js";
import { rankingStudents } from "../handlers/listRankingStudents.js";

const router=express.Router();

router.get("/rankstudents", rankingStudents);


router.get("/ranking", indexappTonyLydia)


export {router};