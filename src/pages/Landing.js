import React from 'react'
import {Navbar} from '../components/Navbar'
import {Header} from '../components/Header'
import {ProjectTable} from '../components/Table'
import {Modal} from '../components/Modal'


const Landing = () => {
    return (
    <>
    <Navbar/>
    <Header />
    <Modal />
    <ProjectTable/>
    </>
    )
}

export default Landing;