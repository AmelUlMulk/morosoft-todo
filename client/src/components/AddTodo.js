import React,{useState} from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../action/todoAction';

const AddTodo = ({addTodo,token}) => {
    
    const [todo,setTodo]=useState('');
    const onSubmitHandler=(e)=>{
       e.preventDefault();
       addTodo(token.user.token,todo);
       setTodo('');
    }
    return <form onSubmit={e=>onSubmitHandler(e)} className='add-todo'>
            <textarea
              class="text-input message-input"
              placeholder="Enter Message"
              name="todo"
              value={todo}
              onChange={e=>setTodo(e.target.value)}
              
              style={{padding:'2rem'}}
            ></textarea>
            <input type="submit" value='Add-Todo' style={{padding:'1rem'}}/>
           </form>
}
const mapStateToProps=state=>({
    token:state.LoggedIn
})
export default connect(mapStateToProps,{addTodo})(AddTodo)
