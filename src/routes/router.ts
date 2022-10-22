import express from "express";
import { Handler } from "../handlers/handle.js";
import { FormHandler } from "../handlers/formHandler.js";

const router=express.Router();

router.get("/hola", Handler.salute)
router.post("/contactForm", FormHandler.returnEmail)




export {router};