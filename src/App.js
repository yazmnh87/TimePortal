import React, {useEffect} from 'react';
import {GlobalStyle} from './styles/GlobalStyle'
import {Navbar} from './components/Navbar'
import {Header} from './components/Header'
import {ProjectTable} from './components/Table'
import {Modal} from './components/Modal'

function App() {

 

  return (
    <>
    <GlobalStyle/>
    <Navbar/>
    <Header />
    <Modal />
    <ProjectTable/>
    </>
  );
}

export default App;
