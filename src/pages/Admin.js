import React,{useState,useEffect} from 'react'
import style from 'styled-components'
import firebase from '../utils/Firebase'
import {GlobalStyle} from '../styles/GlobalStyle'
import {Navbar} from '../components/Navbar'
import {TableContainer, Table, TableRow, TableHead, TableData} from '../components/Table'

export const Container = style.div`
height: 100vh;
width: 100vw;
background-color: #fff;
padding: 0px;
margin: 100px 0px 0px 0px;
border: 5px solid red;
`
export const ControlContainer = style.div`
height: 50px;
width: 100vw;
border: 1px solid black;
`




 const Admin = (props) => {

    const [isAdminPage, setIsAdminPage] = useState(false)
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [users, setUsers] = useState([])

useEffect(()=>{
    setIsAdminPage(true)
    getUsers()
},[])

const getUsers = () => {
firebase.database().ref("userInfo").once('value').then(snap => {
    if(snap.val() !== null){
        console.log()
       return setUsers([...users, snap.val()])
    }
})
}

const mappedUsers = users.map((user,i,arr) => {
    
    return Object.values(user).map(user => {
        return (
            <TableRow>
                <TableHead>{user.name}</TableHead>
                <TableHead>{user.email}</TableHead>
            </TableRow>
        )
    })
})

    return (
        <>
        <GlobalStyle/>
        <Navbar Admin={isAdminPage}/>
        <Container>
        <ControlContainer>
        <button>Add User</button>
        <button>Add Project</button>
        <div>
        <label>Email</label>
        <input />
        <label>Name</label>
        <input />
        <label>Password</label>
        <input />
        <label>Confirm Password</label>
        <input />
        </div>
        </ControlContainer>
        <TableContainer>
            <Table style={{ marginLeft: 15, width: "90%" }}>
                <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>User Email</TableHead>
                </TableRow>
                {mappedUsers}
            </Table>
        </TableContainer>
        </Container>
        </>
    )
}


export default Admin;