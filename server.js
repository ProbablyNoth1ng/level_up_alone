import express from "express";
import pkg from 'pg';
const { Client } = pkg;

const app = express();
const PORT = 3000;





    const client = new Client({
      user: 'root',
      host: 'localhost',
      database: 'node_test',
      password: 'root',
      port: 5432,
    });
  
    client.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => console.error('Connection error', err.stack));


  

    app.get('/data', async (req,res) =>{
        try {
            // SQL query to fetch all rows from the table
            const result = await client.query('SELECT text FROM test');
            
            // Send the data as JSON response
            res.status(200).json(result.rows);

          } catch (error) {
            console.error('Error fetching data', error);
            res.status(500).json({ error: 'Failed to retrieve data' });
          }
    })
  
    





app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT} port`)
    
})