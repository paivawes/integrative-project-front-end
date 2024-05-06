import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';

const teste = [
  {id: 1, room_id: 1, date: '12/02/2024', start_time: '11:00', end_time: '14:30', description: 'Lorem ipsum dolor sit amet', status: 'Pendente'},
  {id: 2, room_id: 2, date: '12/02/2024', start_time: '11:00', end_time: '14:30', description: 'Sem obervações', status: 'Aprovada'},
  {id: 3, room_id: 3, date: '12/02/2024', start_time: '11:00', end_time: '14:30', description: 'Vel rerum assumenda quidem magnam explicabo', status: 'Recusada'}
]


function UserRequests({ token }) {
  const [schedules, setSchedules] = useState(teste);

  // useEffect(() => {
  //   const fetchSchedules = async () => {
  //     try {
  //       const response = await api.get('/schedules', {
  //         headers: {
  //           Authorization: token,
  //         },
  //       });
  //       setSchedules(response.data);
  //     } catch (error) {
  //       console.error('Erro ao buscar reservas:', error);
  //     }
  //   };
  //   fetchSchedules();
  // }, [token, refresh]);


  return (
    <div>
      <h2>Solicitações</h2>
      {/* <ul>
        {schedules.map((schedule) => (
          <li key={schedule.id}>
            Sala: {schedule.room_id} - Data: {schedule.date} - Início: {schedule.start_time} - Fim: {schedule.end_time} - Status: {schedule.status}
          </li>
        ))}
      </ul> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Sala</TableCell>
              <TableCell align="right">Data</TableCell>
              <TableCell align="right">Horário</TableCell>
              <TableCell align="right">Descrição</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedules.map((schedule) => (
              <TableRow
                key={schedule.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Nome da Sala
                </TableCell>
                <TableCell align="right">{schedule.date}</TableCell>
                <TableCell align="right">{schedule.start_time + " - " + schedule.end_time}</TableCell>
                <TableCell align="right">{schedule.description}</TableCell>
                <TableCell align="right">
                  <Chip label={schedule.status} color="success" variant="outlined" />
                  </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default UserRequests;
