import express from "express";
import mysql from 'mysql2'

const app = express();
const PORT = 3000;

app.get( '/' , (req,res) => {
    res.send('emm sever is running ');

}) 



const connection = mysql.createConnection({
    host: '',
    user: '',
    password: '', 
    database: '',

  });

connection.connect((err) => {
    if(err){
        console.log("Error connecting to the database -" + err)
        return;
    }
    console.log('Connected to the MySQL database as ID ' + connection.threadId);
})




app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT} port`)
    
})