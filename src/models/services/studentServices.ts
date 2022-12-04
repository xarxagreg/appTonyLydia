import {Student} from "../types/student.js";
import {db} from "../../config.js";
import {OkPacket, RowDataPacket} from "mysql2";
import { SendPoints } from "../types/sendPoints.js";

function sendPoints(point: SendPoints, callback: Function){
    const queryString = "INSERT INTO activa_work_student_rel(xp_points) VALUES (?)"
  
    db.query(
      queryString,
      [point.xp_points],
      (err, result) => {
        if (err) {callback(err, null)};
        
        const insertId = (<OkPacket> result).insertId;
        callback(null, insertId);
      }
    );
  };

function findRankingStudents(callback:Function){
  const queryString = "SELECT name, first_surname, second_surname,activa_points_balance FROM student ORDER BY activa_points_balance DESC ";
  db.query(queryString, (err, result)=>{
    if(err) callback(err, null);

    const students = result;
    callback(null, students);
  } )
}
function findOneStudent(id: string, callback: Function){
 
  const queryString = "SELECT id, name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code FROM student WHERE id = ?";
  db.query(queryString, [id], (err, result)=>{
    if(err){ callback(err, null)};
    
    const studentFound: Student = (<RowDataPacket>result)[0];
   
    callback(null, studentFound);
  })
}






export {findRankingStudents, sendPoints, findOneStudent};