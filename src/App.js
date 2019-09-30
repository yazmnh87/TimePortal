import React, {useState,useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import firebase from './utils/Firebase'
import Login from './pages/Login'
import Landing from './pages/Landing'
import Admin from './pages/Admin'
import {StateProvider} from './context/context'

function App(props) {

const [authenticated, setAuthenticated] = useState(false)

useEffect(()=> {
 

  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      setAuthenticated(true)
    }
  })
},[])

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
    <Route exact path="/admin" component={Admin}/>
    </Router> 
    </StateProvider>
  );
}

export default App;
