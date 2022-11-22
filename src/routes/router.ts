import express from "express";

import { FormularioProcesado } from "../handlers/procesarFormulario.js";

const router=express.Router();


router.post("/contactForm", FormularioProcesado.respuestaFormulario)




export {router};