import React, { useEffect, useState } from 'react';
import { format, formatISO } from 'date-fns';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';

function UserRequests({ requests }) {
  const [userRequests, setUserRequests] = useState(requests);

  const getStatusAndColor = (status) => {
    if(status === `pending`) return  { text: 'Pendente', color: 'warning' }
    if(status === `denied`) return { text: 'Reprovada', color: 'error' }
    if(status === `approved`) return { text: 'Aprovada', color: 'success' }
  }
  
  useEffect(() => {
    setUserRequests(requests)
    console.log(userRequests, `userResquets`)
  }, [requests])

  return (
    <div>
      <h2>Solicitações</h2>
      <TableContainer sx={{ maxWidth: 800 }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Status</TableCell>
              <TableCell align="right">Sala</TableCell>
              <TableCell align="right">Início</TableCell>
              <TableCell align="right">Término</TableCell>
              <TableCell align="right">Descrição</TableCell>
              <TableCell align="right">Data</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userRequests?.map((request) => (
              <TableRow
                key={request.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Chip label={getStatusAndColor(request.status).text} color={getStatusAndColor(request.status).color} variant="outlined" />
                </TableCell>
                <TableCell align="right" sx={{ maxWidth: 150, whiteSpace: 'nowrap', overflow: "hidden", textOverflow: "ellipsis" }}>{request.roomId.name}</TableCell>
                <TableCell align="right">{format(new Date(request.startToScheduling), "dd/MM/yyyy HH:mm")}</TableCell>
                <TableCell align="right">{format(new Date(request.endToScheduling), "dd/MM/yyyy HH:mm")}</TableCell>
                <TableCell align="right" sx={{ maxWidth: 150, whiteSpace: 'nowrap', overflow: "hidden", textOverflow: "ellipsis" }}>{request.description}</TableCell>
                <TableCell align="right">{format(new Date(formatISO(request.createdAt)), "dd/MM/yyyy")}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default UserRequests;
