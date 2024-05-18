import React, { useState } from 'react';
import { format, formatISO } from 'date-fns';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';

const requestsTest = [
  {id: 1, user_id: 1, room_name: 'Sala 1', created_at: '2024-05-12T10:00:00', start_time: '2024-05-12T11:00:00', end_time: '2024-05-12T14:30:00', description: 'Lorem ipsum dolor sit amet', status: 'Pendente'},
  {id: 2, user_id: 1, room_name: 'Sala 2', created_at: '2024-05-04T11:00:00', start_time: '2024-05-04T11:00:00', end_time: '2024-05-05T11:00:00', description: 'Sem obervações', status: 'Aprovada'}
];

function UserRequests() {
  const [userRequests, setUserRequests] = useState(requestsTest);
  const hasRequests = userRequests.length > 0;

  if (!hasRequests) {
    return null;
  }

  return (
    <div>
      <h2>Solicitações</h2>
      <TableContainer sx={{maxWidth: 800}} component={Paper}>
        <Table sx={{minWidth: 650}} aria-label="simple table">
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
            {userRequests.map((request) => (
              <TableRow
                key={request.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Chip label={request.status} color={getStatusColor(request.status)} variant="outlined" />
                </TableCell>
                <TableCell align="right" sx={{maxWidth: 150, whiteSpace: 'nowrap', overflow: "hidden", textOverflow: "ellipsis"}}>{request.room_name}</TableCell>
                <TableCell align="right">{format(new Date(request.start_time), "dd/MM/yyyy HH:mm")}</TableCell>
                <TableCell align="right">{format(new Date(request.end_time), "dd/MM/yyyy HH:mm")}</TableCell>
                <TableCell align="right" sx={{maxWidth: 150, whiteSpace: 'nowrap', overflow: "hidden", textOverflow: "ellipsis"}}>{request.description}</TableCell>
                <TableCell align="right">{format(new Date(formatISO(request.created_at)), "dd/MM/yyyy")}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

function getStatusColor(status) {
  switch (status) {
    case 'Aprovada':
      return 'success';
    case 'Pendente':
      return 'warning';
    case 'Reprovada':
      return 'error';
    default:
      return 'default';
  }
}

export default UserRequests;
