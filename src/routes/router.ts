import express from "express";
import { Handler } from "../handlers/handle.js";

const router=express.Router();

router.get("/hola", Handler.salute)




export {router};