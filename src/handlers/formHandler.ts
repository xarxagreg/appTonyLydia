import express from "express";
export class FormHandler{
    static returnEmail(request: express.Request, response:express.Response){

     response.send("formulario enviado")   
    }
}