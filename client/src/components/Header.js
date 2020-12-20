import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {logOut} from '../action/userAction';
import {Redirect} from 'react-router-dom'


const Header = ({history,LoggedIn,logOut}) => {

    const onLogout=()=>{
        logOut() 
    
    }
   
    return (
        <div className='navbar'>
            <div className="container">
                 <div className="nav-content">
                     
                     <h2 className='title'>MoroSoft-TodoList</h2>
                     
                    {LoggedIn.user&&LoggedIn.isAuthenticated?
                     <div className='links'>
                         <p>Welcome {LoggedIn.user.name}</p>
                        <button onClick={onLogout}>Logout</button>
                     </div>:<div className='links'>
                         <Link to='/login'>Login</Link>
                         <Link to='/register'>Register</Link>
                     </div>}     
                
                
                 </div>
            </div>
        </div>
    )
}
const mapStateToProps=state=>({
    LoggedIn:state.LoggedIn
})
export default  connect(mapStateToProps,{logOut})(Header)
