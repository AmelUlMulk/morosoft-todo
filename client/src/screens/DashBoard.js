import React,{useEffect,useState} from 'react';
import {connect}from 'react-redux';
import {getUserTodos} from '../action/todoAction';
import AddTodo from '../components/AddTodo';
import TodoItem from '../components/TodoItem';
import {Redirect} from 'react-router-dom';

const DashBoard = ({history,isAuthenticated,user,getUserTodos,todo,todos,Delete,Update,success}) => {
    useEffect(()=>{
        if(!isAuthenticated){
            history.push('/login')
        }
        if(isAuthenticated){
            getUserTodos(user.token);
        }
        if(success){
        history.push('/login')
        }
        
             
    },[isAuthenticated,getUserTodos,todo,Delete.success,Update.success,success])
    return (
        
        <section className='dashboard'>
             {success&&<Redirect to="/login" />}
              <div className='add-menu'>
                  <AddTodo/>
              </div>
              <div className="todos">
                  <h2>Todos</h2>
      {
         !success&&todos.todos&&todos.todos.length===0?<p> Please Add Todos</p> :<p> </p>  
        }
        {
         !success&&todos.todos?todos.todos.map(todo=><TodoItem todo={todo} key={todo._id} token={user.token} />) :<p>Loading</p>  
        }
        
              </div>
        </section>
    )
}
const mapStateToProps=(state)=>({
    isAuthenticated:state.LoggedIn.isAuthenticated,
    user:state.LoggedIn.user,
    success:state.LoggedIn.success,
    todo:state.TodoAdded,
    todos:state.UserTodos,
    Delete:state.DeleteTodo,
    Update:state.UpdateTodo
})
export default connect(mapStateToProps,{getUserTodos})(DashBoard) 
