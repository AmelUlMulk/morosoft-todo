import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {userLoginReducer,userRegisterReducer} from './reducers/userReducer';
import {getUserTodoReducer,AddTodoReducer,deleteTodoReducer,updateTodoReducer} from './reducers/todoReducer';

const middleware=[thunk];
const reducer=combineReducers({
  LoggedIn:userLoginReducer,
  SignedUp:userRegisterReducer,
  UserTodos:getUserTodoReducer,
  TodoAdded:AddTodoReducer,
  DeleteTodo:deleteTodoReducer,
  UpdateTodo:updateTodoReducer

})
const userInfo=localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null

const store = createStore(
   reducer,
   composeWithDevTools(applyMiddleware(...middleware))
)
export default store