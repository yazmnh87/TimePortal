import React from 'react'
import style from 'styled-components'
import {alternate} from '../styles/color'
import firebase from 'firebase'


export const NavbarStyled = style.div`
padding: 0px;
margin: 0px;
display: flex;
flex-direction: row;
background-color: ${alternate};
width: 100%;
position: fixed;
z-index: 999;
top: 0;
height: 100px;
justify-content: space-between;
`

const Logo = style.div`
margin-left: 10px;
align-self: center;
font-size: 30px;
text-shadow: 1px 1px 4px #380502;
`
const MenuContainer = style.div`

`

const MenuItems = style.div`
display: flex;
align-self:flex-end;
width: 300px;
height: 100px;
border: 1px solid black;
`

export const Navbar = (props) =>{


    return <NavbarStyled>
            <Logo>
                WildCard Dev
            </Logo>
            <MenuItems>
            {!props.Admin ? <> <div style={{alignSelf:'center', marginRight:'2%'}}><a style={{fontSize:22}}>Forms</a></div>
            <div style={{alignSelf:'center', marginRight:'2%'}}><a style={{fontSize:22}}>Account</a></div>
            <div style={{alignSelf:'center', marginRight:'2%'}}><a style={{fontSize:22}}>Support</a></div>
            <div style={{alignSelf:'center'}}><button style={{fontSize:22}} onClick={()=> firebase.auth().signOut().then(()=> props.history())}>Sign Out</button></div> </>
            :
           <>
            <div style={{alignSelf:'center'}}><button style={{fontSize:22}} onClick={()=> firebase.auth().signOut().then(()=> props.history())}>Sign Out</button></div>
            </>
        }
            </MenuItems>
    </NavbarStyled>
}

