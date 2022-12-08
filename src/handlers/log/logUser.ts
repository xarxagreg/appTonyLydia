import {db} from "../../config.js";
import express from "express";
import axios from "axios";
import { resourceLimits } from "worker_threads";

async function userValidation(req: express.Request, res: express.Response){
    const result = await axios.get (`http://localhost:3000/users/${req.body.email}`)
    if (req.body.password== result.data.password){
        res.status(200).send("Login Ok");
    }
    res.status(401).render("pages/login",{errorMessage:"El usuario y la contraseña están validados"});
}

export {userValidation}