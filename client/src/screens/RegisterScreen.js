import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import {registerUser} from '../action/userAction'
const RegisterScreen = ({history,registerUser,user}) => {

    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
   
useEffect(()=>{
    if(user.isAuthenticated){
        history.push('/dashboard')
    }

},[user.isAuthenticated])
    
const onSubmitHander=(e)=>{
    e.preventDefault()
    registerUser(name,email,password)
    
   
}
    return (
        <div className='login-screen'>
            <form onSubmit={ (e)=>onSubmitHander(e)}>
            <label htmlFor="name">Name</label>
             <input type="text" placeholder='Enter Name' name='name' onChange={(e)=>setName(e.target.value)}/>
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
export default connect(mapStateToProps,{registerUser}) (RegisterScreen)
