const express = require('express');
const app = express(); 
const dotenv = require('dotenv');
const router = require('./aplication/routes/index');

dotenv.config();
app.use(express.json());

app.use(router);

app.listen(process.env.PORT, () =>{
    console.log(`APP listening in ${process.env.PORT}`)
}) 
