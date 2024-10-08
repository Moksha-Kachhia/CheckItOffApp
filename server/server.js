const express = require('express'); 
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();

const PORT = process.env.PORT || 4000

app.use(cors());
app.use(express.json()); 

app.use('/api',authRoutes);
app.use('/api/list',taskRoutes);

mongoose.connect(process.env.DB_URL).then((result)=>{
    console.log("DB connected sucessfully!");
}).catch(err=>{
    console.log(err);
})

app.listen(PORT,()=>{
    console.log(`Server started at port ${PORT}`);
})