import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(id, fullname, dob, email) {
  return { id, fullname, dob, email };
}

const rows = [
  createData(1, "Hammad Ali", "27/07/2003", "hammad@outlook.com"),
  createData(2, "Junaid Akram", "12/06/2007", "junaid@gmail.com"),
  createData(3, "Danish Ghaffar", "01/01/2004", "danish@hotmail.com"),
  createData(4, "Tahir Ali", "14/09/2001", "tahir@gmail.com"),
  createData(5, "Basit Nazir", "07/01/2008", "basit@yahoo.com"),
];

const table = () => {
  return (
    <div className="table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Full Name</TableCell>
              <TableCell align="left">DOB</TableCell>
              <TableCell align="left">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">{row.fullname}</TableCell>
                <TableCell align="left">{row.dob}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default table;
