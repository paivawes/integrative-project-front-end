import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { Button } from './components/atoms/button/button';

const roomsTest = [
  {id: 1, name: 'Sala 1', capacity: 100},
  {id: 2, name: 'Sala 2', capacity: 50},
  {id: 3, name: 'Sala 3', capacity: 36},
  {id: 4, name: 'Sala 4', capacity: 83}
];

const schedulesTest = [
  {id: 1, user_id: 1, room_id: 1, created_at: '2024-05-12T10:00:00', start_time: '2024-05-12T11:00:00', end_time: '2024-05-12T14:30:00', description: 'Lorem ipsum dolor sit amet', status: 'Pendente'},
  {id: 2, user_id: 1, room_id: 2, created_at: '2024-05-04T11:00:00', start_time: '2024-05-04T11:00:00', end_time: '2024-05-05T11:00:00', description: 'Sem obervações', status: 'Aprovada'},
  {id: 3, user_id: 2, room_id: 3, created_at: '2024-12-02T10:00:00', start_time: '2024-12-02T11:00:00', end_time: '2024-12-02T14:30:00', description: 'Sem obervações', status: 'Reprovada'}
];

// const userRequestsTest = [
//   {id: 1, user_id: 1, room_name: 'Sala 1', created_at: '2024-05-12T10:00:00', start_time: '2024-05-12T11:00:00', end_time: '2024-05-12T14:30:00', description: 'Lorem ipsum dolor sit amet', status: 'Pendente'},
//   {id: 2, user_id: 1, room_name: 'Sala 2', created_at: '2024-05-04T11:00:00', start_time: '2024-05-04T11:00:00', end_time: '2024-05-05T11:00:00', description: 'Sem obervações', status: 'Aprovada'}
// ];

function AvailableRooms({ startDate, endDate, availableRooms }) {
  const [rooms, setRooms] = useState(availableRooms);
  const [error, setError] = useState(null);
  const [reservedRooms, setReservedRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        if (startDate >= endDate) {
          setError('O horário de término deve ser posterior ao horário de início.');
          setRooms([]);
          return;
        }

        const filteredRooms = rooms.filter(room => {
          const conflictedSchedule = schedulesTest.find(schedule =>
            schedule.room_id === room.id &&
            (
              (startDate >= new Date(schedule.start_time) && startDate < new Date(schedule.end_time)) ||
              (endDate > new Date(schedule.start_time) && endDate <= new Date(schedule.end_time)) ||
              (startDate <= new Date(schedule.start_time) && endDate >= new Date(schedule.end_time))
            )
          );

          return !conflictedSchedule || conflictedSchedule.status !== 'Aprovada';
        });

        setRooms(filteredRooms);
        setError(null);
      } catch (error) {
        console.error('Erro ao buscar salas:', error);
        setError('Erro ao buscar salas');
      }
    };    

    fetchRooms();
  }, [startDate, endDate]);

  const handleReserve = (roomId) => {
    setReservedRooms([...reservedRooms, roomId]);
  };

  return (
    <div>
      <h2>Salas Disponíveis</h2>
      {!error ? (
        <List sx={{ width: 400 }} component={Paper}>
          {rooms.map((room) => (
            <ListItem key={room.id}>
              <ListItemText
                primary= {room.name}
                secondary= {"Capacidade: " + room.capacity}
              />
              <Button
                label={reservedRooms.includes(room.id) ? 'Solicitada' : 'Reservar'}
                onClick={() => handleReserve(room.id)}
                disabled={reservedRooms.includes(room.id)}
              />
            </ListItem> 
          ))}
        </List>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}

export default AvailableRooms;