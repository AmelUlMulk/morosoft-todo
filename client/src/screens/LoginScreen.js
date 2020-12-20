import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {loginUser} from '../action/userAction'
const LoginScreen = ({history,loginUser,user}) => {

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
   
useEffect(()=>{
    if(user.isAuthenticated){
        history.push('/dashboard')
    }

},[user.isAuthenticated])
    
const onSubmitHander=(e)=>{
    e.preventDefault()
    loginUser(email,password)
    
   
}
    return (
        <div className='login-screen'>
            <form onSubmit={ (e)=>onSubmitHander(e)}>
            <label htmlFor="name">Email</label>
             <input type="email" placeholder='Enter Email' name='email' onChange={(e)=>setEmail(e.target.value)}/>
             <label htmlFor="name">Password</label>
             <input type="password" placeholder='Enter password' name='password' onChange={(e)=>setPassword(e.target.value)}/>
              <input type="submit" />
            </form>
        </div>
    )
}
const mapStateToProps=state=>({
    user:state.LoggedIn
})
export default connect(mapStateToProps,{loginUser}) (LoginScreen)
