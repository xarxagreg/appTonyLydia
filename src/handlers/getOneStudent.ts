import express from 'express';
import { Student } from '../models/types/student';
import {findOneStudent} from '../models/services/studentServices';


async function getOneStudent(req: express.Request, res: express.Response){
    const studentId = "1";
    await findOneStudent(studentId, (err: Error, result:Student)=>{
        if(err){
            res.status(404).json({"message": err.message});
        }
        res.render("pages/mispuntosEnviados", {
            student: result

        });
})
}

export {getOneStudent};

