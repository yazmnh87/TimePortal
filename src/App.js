import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {GlobalStyle} from './styles/GlobalStyle'
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
        modalVisible: true
        };
     default: {
        return state;  
     }
  }
 }

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
     <Router>
    {/* <GlobalStyle/> */}
    <Route exact path="/" strict component={Landing}/>
    </Router> 
    </StateProvider>
  );
}

export default App;
