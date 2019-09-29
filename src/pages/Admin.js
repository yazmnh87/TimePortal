import React,{useState,useEffect} from 'react'
import style from 'styled-components'
import {GlobalStyle} from '../styles/GlobalStyle'
import {Navbar} from '../components/Navbar'
import {TableContainer, Table, TableRow, TableHead, TableData} from '../components/Table'

export const Container = style.div`
height: 100vh;
width: 100vw;
background-color: #fff;
padding: 0px;
margin: 0px;
`





 const Admin = () => {

    const [isAdminPage, setIsAdminPage] = useState(false)

useEffect(()=>{
    setIsAdminPage(true)
},[])

    return (
        <>
        <GlobalStyle/>
        <Navbar Admin={isAdminPage}/>
        <Container>
        <TableContainer>
            <Table style={{ marginLeft: 15, width: "90%" }}>

            </Table>
        </TableContainer>
        </Container>
        </>
    )
}


export default Admin;