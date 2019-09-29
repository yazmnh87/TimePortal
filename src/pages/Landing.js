import React from 'react'
import {GlobalStyle} from '../styles/GlobalStyle'
import {Navbar} from '../components/Navbar'
import {Header} from '../components/Header'
import {ProjectTable} from '../components/Table'
import {Modal} from '../components/Modal'
import { withRouter } from 'react-router-dom'


const Landing = (props) => {
    return (
    <>
    <GlobalStyle/>
    <Navbar history={()=> props.history.push('/')}/>
    <Header />
    <Modal />
    <ProjectTable/>
    </>
    )
}

export default withRouter(Landing);