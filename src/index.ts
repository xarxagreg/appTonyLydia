import express from "express";

import {PORT} from "./env.js";
const app=express();


app.get("/", (request: express.Request, response:express.Response)=>{

    response.send("Hola Mundo")})


app.listen(PORT,()=>{console.log(`El puerto en esccucha es el ${PORT}`)});