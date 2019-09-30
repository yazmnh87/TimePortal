import React, {useState} from 'react'
import {GlobalStyle} from '../styles/GlobalStyle'
import style from 'styled-components'
import {scopeUser} from '../utils/scopeUser'
import { withRouter } from 'react-router-dom'
import firebase from '../utils/Firebase'
import format from 'date-format'

export const Container = style.div`
display: flex;
height: 100vh;
width: 100vw;
padding: 0px;
margin: 0px;
background-color: #333;
justify-content: center;
align-items: center;
`

export const LoginContainer = style.div`
height: 200px;
width: 200px;
background-color: #fff;
`


const Login = (props) => {


const [email, setEmail] = useState("")
const [name, setName] = useState("")
const [date, setDate] = useState(format(new Date(), 'YYYY-MM-DD'))
const [password, setPassword] = useState("")
const [register, setRegister] = useState(false)
const [error, setError] = useState("")

const logUserData = () => {
   const userInformation = {
        role: "user",
        name,
        date,
        email: firebase.auth().currentUser.email  
    }

    const userRef = scopeUser("userInfo")
    firebase.database().ref(userRef).set(userInformation).then(() => props.history.push('/landing') )
}

const registerUser = (email, password) => {
if(email === "" && password === ""){
    setError("Please enter email and password")
} else if (email === ""){
    setError("Please enter email")
} else if (password === ""){
    setError("Please enter password")
} else firebase.auth().createUserWithEmailAndPassword(email, password).then(()=> logUserData() ).catch((err)=> setError(err))
}

const loginUser = (email, password) => {
    if(email === "" && password === ""){
        setError("Please enter email and password")
    } else if (email === ""){
        setError("Please enter email")
    } else if (password === ""){
        setError("Please enter password")
    } else firebase.auth().signInWithEmailAndPassword(email, password).then(()=> props.history.push('/admin'))
}

    return (
        <>
        <GlobalStyle/>
        <Container>
        <LoginContainer>
           {!register ?
           <>
            <label>Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)}/>
            <label>Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)}/>
        <button onClick={()=> loginUser(email,password)}>Login</button>
        <button onClick={()=> setRegister(true)}>Register</button>
        </>
        :
        <>
        <label>Email</label>
            <input name="email" value={email} onChange={e => setEmail(e.target.value)}/>
            <label>Full Name</label>
            <input name="name" value={name} onChange={e => setName(e.target.value)}/>
            <label>Password</label>
            <input name="password" value={password} onChange={e => setPassword(e.target.value)}/>
        <button onClick={()=> registerUser(email,password)}>Register</button>
        </>
        }

        </LoginContainer>
        </Container>
        </>
        
    )
}

export default withRouter(Login);