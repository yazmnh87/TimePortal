import React from 'react'
import {GlobalStyle} from '../styles/GlobalStyle'
import style from 'styled-components'

export const Container = style.div`
height: 100vh;
width: 100vw;
padding: 0px;
margin: 0px;
background-color: #333;
`


const Login = () => {
    return (
        <>
        <GlobalStyle/>
        <Container>
        <div>Hello</div>
        </Container>
        </>
        
    )
}

export default Login;