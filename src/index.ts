import express from "express";
import {PORT} from "./env.js";
import {router} from "./routes/router.js"

const app=express();

app.use("/", router)





app.listen(PORT,()=>{console.log(`El puerto en esccucha es el ${PORT}`)});