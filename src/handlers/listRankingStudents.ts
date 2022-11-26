import { Student } from "../models/types/student.js";
import { findRankingStudents } from "../models/services/studentServices.js";
import express from 'express';


async function rankingStudents(req: express.Request, res: express.Response){
    findRankingStudents((err:Error, students:Student[])=>{
        if(err){
            return res.status(404).json({"message": err.message});
        }
        
        res.status(200).json(students);
    })
}

export {rankingStudents};