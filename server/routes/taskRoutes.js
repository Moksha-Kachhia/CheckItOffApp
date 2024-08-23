const express = require('express');
const {createTask, getAllTasks,deleteTask,updateTask} = require('../controllers/taskController');
const authenticateToken = require('../middleware/authJwt');
const router = express.Router();


router.post('/create-task',authenticateToken,createTask)
router.get('/get-all-tasks/:userId',authenticateToken,getAllTasks);
router.delete('/delete-task/:id',authenticateToken,deleteTask);
router.patch('/update-task/:id',authenticateToken,updateTask);

module.exports = router;