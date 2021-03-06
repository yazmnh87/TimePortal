import React from 'react'
import style from 'styled-components'
import { useStateValue } from '../context/context'



export const HeaderContainer = style.div`
width: 100%;
`

export const Button = style.button`
background-color: blue;
border-radius: 7px;
height: 45px;
margin-top: 20px;
`

export const Header = () => {
    const [{ modalVisible },dispatch] = useStateValue();
    console.log(modalVisible)
    return <HeaderContainer>
        <Button style={{marginLeft: 10}}  onClick={()=> dispatch({
            type: 'setModal'
        })}>
            Create Project
        </Button>
        <h1 style={{marginLeft: 10}}>Projects</h1>
    </HeaderContainer>
}