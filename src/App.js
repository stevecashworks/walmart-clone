import './App.scss';
import Home from './Pages/HomePage/Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {useReducer,createContext} from 'react';

import defaultState from './state-management/store';
import reducer from './state-management/reducer';
import Cart from './Pages/Cart/Cart';
import Login from './Pages/Login/Login';
export const AppContext=createContext()
 const App=()=>{
  const [state,dispatch]=useReducer(reducer,defaultState)
 
return(
  <AppContext.Provider value={{state,dispatch}}>

  <Router>
    

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/Login" element={<Login/>}/>
    </Routes>

    
  </Router>
  </AppContext.Provider>
)
 }

export default App; 
