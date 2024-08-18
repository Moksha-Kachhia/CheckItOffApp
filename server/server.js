const express = require('express'); 
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config;

const PORT = process.env.PORT || 4000

app.use(cors());
app.use(express.json()); 

// mongoose.connect(process.env.DB_URL).then((result)=>{
//     console.log("DB connected sucessfully!");
// }).catch(err=>{
//     console.log(err);
// })

app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
})