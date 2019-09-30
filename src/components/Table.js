import React, { useEffect, useState } from "react";
import style from "styled-components";
import { Data } from "../Data";
import { ExpandedView } from "./ExpandedView";
import { useStateValue } from '../context/context'

export const TableContainer = style.div`
width: 100%;
margin-top: 10px;
margin-left: 10px;
top: 250px;
`;
export const Table = style.table`
border: 1px solid black;
border-collapse: collapse;
`;
export const TableRow = style.tr`
height: 30px;
text-align: center;
`;

export const TableHead = style.th`
border: 1px solid black;
padding-right: 15px;
padding-left: 15px;
font-size: 14px;
`;
export const TableData = style.td`
border: 1px solid black;
padding: 2px;
font-size: 18px;
`;
export const Button = style.button`
height: 30px;
width: 50px;
background-color: blue;
border-radius: 7px;
`;
export const ButtonContainer = style.div`
display: grid;
`;

export const ProjectTable = () => {
  const [rowExpanded, expandRow] = useState(false);

  const hourlyRate = 60;



  const mappedProjects = Data.map(project => {
    const {
      projectID,
      projectName,
      dateCreated,
      expectedCompletionDate,
      estimatedProjectHours,
      totalHoursWorked,
      totalHoursWorkedThisWeek
    } = project;
    return (
      
      <>
        <TableRow>
          <TableHead>{projectName}</TableHead>
          <TableHead style={{ characterSpacing: 1 }}>
            {dateCreated.toString().slice(0, 15)}
          </TableHead>
          <TableHead>
            {expectedCompletionDate.toString().slice(0, 15)}
          </TableHead>
          <TableHead>{estimatedProjectHours}</TableHead>
          <TableHead>{totalHoursWorked}</TableHead>
          <TableHead>{totalHoursWorkedThisWeek}</TableHead>
          <TableHead>${totalHoursWorkedThisWeek * hourlyRate}</TableHead>
          <TableHead>
            <Button
              name="view"
              onClick={() => expandRow(prevState => !prevState)}
            >
              View
            </Button>
            <Button name="delete">Delete</Button>
            <Button>Pay</Button>
          </TableHead>
        </TableRow>
        {rowExpanded ? (
          <TableRow><td colspan="8">
          <div style={{height: 400, display:'flex', flexDirection:'row-reverse'}}>
          <div style={{borderColor: 'black', borderWidth: 1, height: '100%', width: '20%', backgroundColor:'blue', alignSelf:'flex-end'}}>
          <span>Tasks Completed</span>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
            <li>item 5</li>
            <li>item 6</li>
          </ul>

          </div>
          <div style={{height: '100%', width:'80%', backgroundColor:'orange'}}>

          </div>
         </div>
          </td>
          </TableRow>
        ) : null}
      </>
    );
  });

  return (
    <TableContainer>
      <Table style={{ marginLeft: 15, width: "90%" }}>
        <TableRow>
          <TableHead>Project Name</TableHead>
          <TableHead>Date Created</TableHead>
          <TableHead>
            Expected <br /> Completion Date
          </TableHead>
          <TableHead>
            Estimated <br /> Project Hours
          </TableHead>
          <TableHead>
            Total
            <br /> Hours Worked
          </TableHead>
          <TableHead>
            Total
            <br /> Hours Worked <br /> this Week
          </TableHead>
          <TableHead>Total Amount Due</TableHead>
          <TableHead>Select Action</TableHead>
        </TableRow>
        {mappedProjects}
      </Table>
    </TableContainer>
  );
};

const styles = {
  expandedViewContainer: {
    height: 300,
    width: "100%",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black"
  }
};
