import {Student} from "../types/student.js";
import {db} from "../../config.js";




function findRankingStudents(callback:Function){
  const queryString = "SELECT name, first_surname, second_surname,activa_points_balance FROM student ORDER BY activa_points_balance DESC ";
  db.query(queryString, (err, result)=>{
    if(err) callback(err, null);

    const students = result;
    callback(null, students);
  } )
}






export {findRankingStudents};