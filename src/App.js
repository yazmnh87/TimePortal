import React, {useEffect} from 'react';
import {GlobalStyle} from './styles/GlobalStyle'
import {Navbar} from './components/Navbar'
import {Header} from './components/Header'
import {ProjectTable} from './components/Table'

function App() {

 

  return (
    <>
    <GlobalStyle/>
    <Navbar/>
    <Header />
    <ProjectTable/>
    </>
  );
}

export default App;
