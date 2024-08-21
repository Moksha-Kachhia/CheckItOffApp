const Task = require("../models/TaskList");

exports.createTask = async (req,res)=>{
    try{
        const data = req.body;
        const task = new Task(data);
        const result = await task.save();
        console.log(result);
        res.status(201).send({message:"Created New Task!"});

    }catch(err){
        console.log(err);
        res.status(err);
    }
}


exports.getAllTasks = async (req,res)=>{
    let {userId} = req.params;

    try{
        const result = await Task.find({createdBy:userId});
        res.send(result);

    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }

}


exports.updateTask = async (req,res)=>{
    try{
        const {id} = req.params;
        const data = req.body;
        const result = await Task.findByIdAndUpdate(id,{$set:data},{returnOriginal:false});
        console.log(result);
        res.send({message:'Task Updated!'})
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }
}

exports.deleteTask = async (req,res)=>{
    try{
        const {id} = req.params;
        const result = await Task.findByIdAndDelete(id);
        console.log(result);
        res.send({message:"Task Deleted!"});
    }catch(err){
        console.log(err);
        res.status(400).send(err);
    }
}