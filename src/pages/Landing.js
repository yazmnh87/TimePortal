import React from 'react'
import {GlobalStyle} from '../styles/GlobalStyle'
import {Navbar} from '../components/Navbar'
import {Header} from '../components/Header'
import {ProjectTable} from '../components/Table'
import {Modal} from '../components/Modal'


const Landing = () => {
    return (
    <>
    <GlobalStyle/>
    <Navbar/>
    <Header />
    <Modal />
    <ProjectTable/>
    </>
    )
}

export default Landing;