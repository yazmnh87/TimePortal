import {createGlobalStyle} from 'styled-components'
import {mainBackground} from './color'

export const GlobalStyle = createGlobalStyle`
body, html{
padding: 0px 0px 0px 0px;
margin: 0px;
background-color: ${mainBackground};
}

`