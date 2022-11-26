import {Student} from "../types/student.js";
import {db} from "../../config.js";
import {OkPacket, RowDataPacket} from "mysql2";

function createStudent(student: Student, callback: Function){
    const queryString = "INSERT INTO student (name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code) VALUES (?, ?, ?, ?, ?, ?, ?)"
  
    db.query(
      queryString,
      [student.name, student.firstSurname, student.secondSurname, student.personalEmailAddress, student.activaEmailAddress, student.phoneNumber, student.zipCode],
      (err, result) => {
        if (err) {callback(err, null)};
        
        const insertId = (<OkPacket> result).insertId;
        callback(null, insertId);
      }
    );
  };

function findRankingStudents(callback:Function){
  const queryString = "SELECT id, name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code FROM student";
  db.query(queryString, (err, result)=>{
    if(err) callback(err, null);

    const students = result;
    callback(null, students);
  } )
}

function findOneStudent(id: string, callback: Function){
 
  const queryString = "SELECT name, first_surname, second_surname, activa_points_balance FROM student";
  db.query(queryString, [id], (err, result)=>{
    if(err){ callback(err, null)};
    
    const studentFound: Student = (<RowDataPacket>result)[0];
   
    callback(null, studentFound);
  })
}

function deleteOneStudent(id: string, callback: Function){
  const queryString = "DELETE FROM student WHERE id = ?";
  db.query(queryString, [id], (err, result)=>{
    if(err){ callback(err, null)};
    
    const studentDeleted:String = "deleted succesfull";
   
    callback(null, studentDeleted);
  })
}

function putOneStudent(id: string, student: Student, callback: Function){

    const queryString = "UPDATE student SET name=?, first_surname=?, second_surname=?, email_personal=?, email_activa=?, phone_number=?, zip_code=? WHERE id=?";
    db.query(queryString, [student.name, student.firstSurname, student.secondSurname, student.personalEmailAddress, student.activaEmailAddress, student.phoneNumber, student.zipCode, id],
      (err, result)=>{
        if(err){ callback(err, null)};
        
        const studentUpdated:String = "update succesfull";
       
        callback(null, studentUpdated);
      })
  }

export {createStudent, findRankingStudents, findOneStudent, deleteOneStudent, putOneStudent};