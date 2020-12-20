import {REGISTER_REQUEST,REGISTER_SUCCESS,REGISTER_FAIL,LOGIN_SUCCESS,LOGIN_FAIL,LOGIN_REQUEST,LOAD_USER_REQUEST,LOAD_USER_SUCCESS,LOAD_USER_FAIL, LOGOUT}from './types'
import axios from 'axios'

export const registerUser=(name ,email,password)=> async dispatch=>{
   try {
    dispatch({
        type:REGISTER_REQUEST,
    })
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    const {data}= await axios.post('/api/users/register',{name,email,password},config);
    dispatch({
        type:REGISTER_SUCCESS,
        payload:data
    })
    dispatch({
        type:LOGIN_SUCCESS,
        payload:data
    })   
   } catch (error) {
      dispatch({
          type:REGISTER_FAIL,
          payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
      })
   }
    
    
}
export const loginUser=(email ,password)=> async dispatch=>{

    try {
     dispatch({
         type:LOGIN_REQUEST,
     })
     const config={
         headers:{
             'Content-Type':'application/json'
         }
     }
     const {data}= await axios.post('/api/users/login',{email,password},config);
     dispatch({
         type:LOGIN_SUCCESS,
         payload:data
     })
    
    } catch (error) {
       dispatch({
           type:LOGIN_FAIL,
           payload:
         error.response && error.response.data.message
           ? error.response.data.message
           : error.message,
       })
    }
     
     
 }
 
 export const logOut=()=>async dispatch=>{
          dispatch({
              type:LOGOUT
          })
          
 }