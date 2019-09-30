import React,{useState,useEffect} from 'react'
import style from 'styled-components'
import firebase from '../utils/Firebase'
import {GlobalStyle} from '../styles/GlobalStyle'
import {Navbar} from '../components/Navbar'
import {FaAngleDown} from 'react-icons/fa'
import {TableContainer, TableData} from '../components/Table'

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
export const Table = style.table`
border-collapse: collapse;
`;

export const TableHead = style.th`
border: 1px solid black;
padding-right: 15px;
padding-left: 15px;
font-size: 14px;
height: 30px;
`;

export const TableRow = style.tr`
height: 30px;
text-align: center;
`;

 const Admin = (props) => {

    const [isAdminPage, setIsAdminPage] = useState(false)
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [users, setUsers] = useState([])
    const [showUserInfo, setShowUserInfo] = useState(false)

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
        return <>
            <TableRow>
                <TableHead style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}><div><span style={{marginRight:5}}>{user.name}</span></div><FaAngleDown onClick={()=> setShowUserInfo(!showUserInfo)}/></TableHead>
            </TableRow>
            {showUserInfo ? 
            <TableRow>
                <td colSpan="1"><div style={{borderColor:'black', borderWidth:1}}>Hello</div>
                </td>
            </TableRow>
            : null
        }
        </>
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
                {mappedUsers}
            </Table>
        </TableContainer>
        </Container>
        </>
    )
}


export default Admin;