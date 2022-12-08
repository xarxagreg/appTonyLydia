import {db} from "../../config.js";
import express from "express";
import { User } from "../../models/types/user.js";
import { findOneUser } from "../../models/services/userServices.js";

function getOneUser(req: express.Request, res: express.Response){
    const user_email = req.params.user_email;
    findOneUser(user_email, (err:Error, result: User)=>{
        if (err){
            res.status(404).render("pages/login", {errorMessage: "El usuario no está registrado"})
        }
        res.status(200).json(result);

    })
}



export {getOneUser}