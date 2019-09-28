import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Login from './pages/Login'
import Landing from './pages/Landing'
import {StateProvider} from './context/context'

function App() {



 const initialState = {
   modalVisible: false
 }


 const reducer = (state,action) => {
   switch (action.type){
     case 'setModal':
       return {...state,
        modalVisible: !state.modalVisible
        };
     
     default: {
        return state;  
     }
  }
 }

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
     <Router>
    <Route exact path="/" strict component={Login}/>
    <Route exact path="/landing" component={Landing}/>
    </Router> 
    </StateProvider>
  );
}

export default App;
