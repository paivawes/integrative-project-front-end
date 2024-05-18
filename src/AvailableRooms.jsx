import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { Button } from './components/atoms/button/button';

function AvailableRooms({ startDate, endDate }) {
  const [rooms, setRooms] = useState(roomsTest);
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
    
        const filteredRooms = roomsTest.filter(room => {
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

<<<<<<< HEAD
export default AvailableRooms;
=======
export default AvailableRooms;
>>>>>>> ad0da92 (fix: export schedule)
