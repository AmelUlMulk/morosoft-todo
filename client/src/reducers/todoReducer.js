import {LOAD_USER_TODO_REQUEST,LOAD_USER_TODO_SUCCESS,
    LOAD_USER_TODO_FAIL,ADD_TODO_REQUEST,ADD_TODO_SUCCESS
    ,ADD_TODO_FAIL,DELETE_TODO_FAIL,DELETE_TODO_REQUEST,
    DELETE_TODO_SUCCESS,UPDATE_TODO_REQUEST,UPDATE_TODO_SUCCESS,UPDATE_TODO_FAIL} from '../action/types';

export const getUserTodoReducer=(state={},action)=>{

    switch (action.type) {
        case LOAD_USER_TODO_REQUEST:
            return{
                loading:true
            }
        case LOAD_USER_TODO_SUCCESS:
            return{
                loading:true,
                todos:action.payload
            }
        case LOAD_USER_TODO_FAIL:
            return{
                loading:false,
                error:action.payload
            }
    
        default:
            return state
    }
}

export const AddTodoReducer=(state={},action)=>{

    switch (action.type) {
        case ADD_TODO_REQUEST:
            return{
                loading:true
            }
        case ADD_TODO_SUCCESS:
            return{
                loading:false,
                newtodo:action.payload
            }
        case ADD_TODO_FAIL:
            return{
                loading:false,
                error:action.payload
            }
    
        default:
            return state
    }
}
//deleting 
export const deleteTodoReducer=(state={success:false},action)=>{

    switch (action.type) {
        case DELETE_TODO_REQUEST:
            return{
                loading:true
            }
        case DELETE_TODO_SUCCESS:
            return{
                loading:false,
                success:'true'
            }
        case DELETE_TODO_FAIL:
            return{
                loading:false,
                error:action.payload
            }
    
        default:
            return state
    }
}
//update
export const updateTodoReducer=(state={success:false},action)=>{

    switch (action.type) {
        case UPDATE_TODO_REQUEST:
            return{
                loading:true
            }
        case UPDATE_TODO_SUCCESS:
            return{
                loading:false,
                success:'true'
            }
        case UPDATE_TODO_FAIL:
            return{
                loading:false,
                error:action.payload
            }
    
        default:
            return state
    }
}