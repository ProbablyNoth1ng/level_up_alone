import express from "express";
const app = express();
const PORT = 3000;



app.get( '/' , (req,res) => {
    res.send('emm sever is running ');

}) 


app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT} port`)
    
})