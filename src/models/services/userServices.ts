import {User} from "../types/user";
import {RowDataPacket} from "mysql2";
import { db } from "../../config";


function findOneUser(user_email: string, callback: Function){
 
    const queryString = "SELECT id, email,password, role FROM user WHERE email = ?";
    db.query(queryString, [user_email], (err, result)=>{
      if(err){ callback(err, null)};
      
      const studentFound: User = (<RowDataPacket>result)[0];
     
      callback(null, studentFound);

    })
  }
  export{findOneUser};