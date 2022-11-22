import express from "express";
import {PORT} from "./config.js";
import {router} from "./routes/router.js"
import path from "path";

const app=express();
const staticPath= path.join(__dirname, "..", "public");
console.log(staticPath);

app.use(express.static(staticPath));

app.use("/", router);





app.listen(PORT,()=>{console.log(`El puerto en esccucha es el ${PORT}`)});