import express from "express";
import {PORT} from "./config.js";
import {router} from "./routes/router.js"
import path from "path";

const app=express();
app.set("view engine", "ejs");
const staticPath= path.join(__dirname, "..", "public");


app.use(express.static(staticPath));

app.use("/", router);





app.listen(PORT,()=>{console.log(`El puerto en esccucha es el ${PORT}`)});