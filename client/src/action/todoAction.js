import axios from 'axios';
import { LOAD_USER_TODO_FAIL, LOAD_USER_TODO_REQUEST,
     LOAD_USER_TODO_SUCCESS,ADD_TODO_REQUEST,ADD_TODO_SUCCESS,
     ADD_TODO_FAIL,DELETE_TODO_FAIL,DELETE_TODO_SUCCESS,DELETE_TODO_REQUEST,
     UPDATE_TODO_REQUEST,UPDATE_TODO_SUCCESS,UPDATE_TODO_FAIL
    } from './types';

export const getUserTodos=(token)=>async (dispatch)=>{
    dispatch({
        type:LOAD_USER_TODO_REQUEST
    })
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    try {
        const {data}=await axios.get('/api/todos',config)
        dispatch({
            type:LOAD_USER_TODO_SUCCESS,
            payload:data
        })

    } catch (error) {
        dispatch({
            type:LOAD_USER_TODO_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
    }
}
//Adding Todo
export const addTodo=(token,todo)=>async (dispatch)=>{
    dispatch({
        type:ADD_TODO_REQUEST
    })
    
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    try {
        const {data}=await axios.post('/api/todos',{todo:todo},config)
        dispatch({
            type:ADD_TODO_SUCCESS,
            payload:data
        })

    } catch (error) {
        dispatch({
            type:ADD_TODO_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
    }
}
//Deleting Todo
export const deleteTodo=(token,id)=>async (dispatch)=>{
    dispatch({
        type:DELETE_TODO_REQUEST
    })
    
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    try {
        const {data}=await axios.delete(`/api/todos/${id}`,config)
        dispatch({
            type:DELETE_TODO_SUCCESS,
            payload:data
        })

    } catch (error) {
        dispatch({
            type:DELETE_TODO_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
    }
}
//update Todo
export const updateTodo=(token,id)=>async (dispatch)=>{
    dispatch({
        type:UPDATE_TODO_REQUEST
    })
    
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    try {
        const {data}=await axios.put(`/api/todos/${id}`,{done:true},config)
        dispatch({
            type:UPDATE_TODO_SUCCESS,
            payload:data
        })

    } catch (error) {
        dispatch({
            type:UPDATE_TODO_FAIL,
            payload:error.response && error.response.data.message
            ? error.response.data.message
            : error.message
        })
    }
}