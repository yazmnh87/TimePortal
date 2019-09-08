import React from 'react'
import style from 'styled-components'
import {alternate} from '../styles/color'

export const NavbarStyled = style.div`
padding: 0px;
margin: 0px;
display: flex;
background-color: ${alternate};
width: 100%;
position: fixed;
z-index: 999;
top: 0;
height: 100px;
`

const Logo = style.div`
margin-left: 10px;
align-self: center;
font-size: 20px;
text-shadow: 1px 1px 4px #380502;
`
const MenuContainer = style.div`

`

const MenuItems = style.div`
display: flex;
align-self: flex-end;
width: 200px;
height: 100px;
border: 1px solid black;
`
export const Navbar= () =>{
    return <NavbarStyled>
            <Logo>
                WildCard Dev
            </Logo>
            <MenuItems>
            </MenuItems>
    </NavbarStyled>
}