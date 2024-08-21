const mongoose = require('mongoose');
const {Schema} = mongoose;

const taskSchema = new Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    isCompleted:{type:Boolean,required:true},
    completedOn:String,
    createdBy:{
        ref:"User",
        type:Schema.ObjectId
    }
},
{
    timestamps:true
});


const Task = mongoose.model("Task",taskSchema);

module.exports = Task;