import axios from 'axios';
import { getUserDetails } from '../util/GetUser';

const SERVER_URL = 'http://localhost:4000/api/list';

const authHeaders = ()=>{
    let  userToken = getUserDetails()?.token;
    return {headers:{'Authorization':userToken}}

}

const createTask = (data)=>{
    return axios.post(SERVER_URL+'/create-task',data,authHeaders());
}

const getAllTasks = (userId)=>{
    return axios.get(SERVER_URL+'/get-all-task/'+userId,authHeaders());
}

const deleteTask = (id)=>{
    return axios.delete(SERVER_URL+'/delete-task/'+id,authHeaders());
}

const updateTask = (id,data)=>{
    return axios.patch(SERVER_URL+'/update-task/'+id,data,authHeaders());
}



const listServices = {
    createTask,
    getAllTasks,
    deleteTask,
    updateTask
}


export default listServices;