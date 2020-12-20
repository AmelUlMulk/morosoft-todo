import React,{Fragment,useEffect} from "react";

import {BrowserRouter as Router,Route} from 'react-router-dom';
import Header from './components/Header';
import Login from './screens/LoginScreen';
import DashBoard from './screens/DashBoard'
import Register from './screens/RegisterScreen';
import {Provider} from 'react-redux'
import store from './store'

import "./App.css";

const App = () => {
  
  return (
        
    <>
 <Provider store={store}>
    <Router>
      <Header/>
         <main className='main-screen'>
         <Route path='/login' component={Login}/>
         <Route path='/register' exact component={Register}/>
         <Route path='/dashboard' exact component={DashBoard}/>
         </main>
      
    </Router>
    </Provider>
    </>
    
  );
};
export default App;
