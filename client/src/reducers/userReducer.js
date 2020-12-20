import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAIL,REGISTER_REQUEST,REGISTER_FAIL,REGISTER_SUCCESS,LOGOUT,} from '../action/types';

export const userLoginReducer=(state={success:false},action)=>{
    switch (action.type) {
        case LOGIN_REQUEST:
            return{
                loading:true
            }
        case LOGIN_SUCCESS:
            return{
                loading:false,
                user:action.payload,
                isAuthenticated:true
            }
        case LOGIN_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case LOGOUT:
            return{
                loading:false,
                success:true
            }
        default:
            return state
                
            
    }
}
export const userRegisterReducer=(state={success:false},action)=>{
    switch (action.type) {
        case REGISTER_REQUEST:
            return{
                loading:true
            }
        case REGISTER_SUCCESS:
            return{
                loading:false,
                user:action.payload,
                isAuthenticated:true
            }
        case REGISTER_FAIL:
            return{
                loading:false,
                error:action.payload
            }
        case LOGOUT:
            return{
                loading:false,
                success:true
            }
        default:
            return state
                
            
    }
}
