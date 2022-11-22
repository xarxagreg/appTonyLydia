import express from "express";
export class FormularioProcesado{
    static respuestaFormulario(request: express.Request, response:express.Response){

     response.send("formulario enviado")   
    }
}