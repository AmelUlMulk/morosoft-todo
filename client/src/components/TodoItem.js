import React from 'react';
import {connect} from 'react-redux';
import {deleteTodo,updateTodo} from '../action/todoAction';

const TodoItem = ({todo,deleteTodo,token,updateTodo}) => {
    const onDelete=()=>{
      deleteTodo(token,todo._id)
    }
    const onEdit=()=>{
       updateTodo(token,todo._id)
    }
    return <div className='todo-item'>
             <p>{todo.todo}:{todo.done?<strong>completed</strong>:<strong>pending</strong>}</p> 
              
             <div>
               <button onClick={onEdit}>Mark Done</button>
               <button onClick={onDelete}>Delete</button>
            </div>
             
           </div>
        
    }
const mapStateToProps=state=>({
  
})
export default connect(mapStateToProps,{deleteTodo,updateTodo}) (TodoItem)
