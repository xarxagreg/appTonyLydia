import express from "express";


function indexappTonyLydia (req: express.Request, res: express.Response){
    res.render ("pages/ranking");
}
export {indexappTonyLydia}