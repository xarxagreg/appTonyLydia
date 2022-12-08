import express from "express";
import { userValidation } from "../handlers/log/logUser.js";
import { getOneUser } from "../handlers/user/getOneUser.js";

import { indexappTonyLydia } from "../handlers/indexapp.js";

const router=express.Router();


router.get("/ranking", indexappTonyLydia);

router.post("/logUser", userValidation);
router.get("/users/:user_email",getOneUser);


export {router};