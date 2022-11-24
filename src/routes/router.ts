import express from "express";

import { FormularioProcesado } from "../handlers/procesarFormulario.js";
import { indexapp } from "../handlers/indexapp.js";

const router=express.Router();


router.post("/contactForm", FormularioProcesado.respuestaFormulario)

router.get("/hola", indexapp)


export {router};