import React, {useEffect} from 'react';
import {GlobalStyle} from './styles/GlobalStyle'
import {Navbar} from './components/Navbar'
import {Header} from './components/Header'
import {ProjectTable} from './components/Table'
import {Modal} from './components/Modal'
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
    <GlobalStyle/>
    <Navbar/>
    <Header />
    <Modal />
    <ProjectTable/>
    </StateProvider>
  );
}

export default App;
