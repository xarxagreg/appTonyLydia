import express from "express";

import { indexappTonyLydia } from "../handlers/indexapp.js";

const router=express.Router();


router.get("/ranking", indexappTonyLydia)


export {router};