import React, { useState, useEffect } from 'react';
import { formatISO } from 'date-fns';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import { Button } from './components/atoms/button/button';

const teste = [
  {id: 1, name: 'Sala 1', capacity: 100},
  {id: 2,name: 'Sala 2', capacity: 50},
  {id: 3,name: 'Sala 3', capacity: 36},
  {id: 4,name: 'Sala 4', capacity: 83}
]

function AvailableRooms({ token, startTime, endTime, updateUserRequests }) {
  const [rooms, setRooms] = useState(teste);
  const [error, setError] = useState(null);
  const [scheduleMessage, setReservationMessage] = useState('');
  const [disabledButtons, setDisabledButtons] = useState({});

  // useEffect(() => {
  //   const fetchRooms = async () => {
  //     try {
  //       if (!startTime || !endTime) {
  //         setError(null);
  //         return;
  //       }

  //       // Verifica se o início e o término são diferentes e se o término é após o início
  //       if (startTime >= endTime) {
  //         setError('O horário de término deve ser posterior ao horário de início.');
  //         setRooms([]);
  //         return;
  //       }

  //       const formattedStartTime = formatISO(startTime);
  //       const formattedEndTime = formatISO(endTime);

  //       const response = await api.get('/rooms', {
  //         headers: {
  //           Authorization: token,
  //         },
  //         params: {
  //           startTime: formattedStartTime,
  //           endTime: formattedEndTime,
  //         },
  //       });

  //       setRooms(response.data); // Define as salas disponíveis
  //       setError(null);
  //     } catch (error) {
  //       console.error('Erro ao buscar salas:', error);
  //       setError('Erro ao buscar salas');
  //     }
  //   };

  //   fetchRooms();
  // }, [token, startTime, endTime]);

  // const handleReserve = async (roomId) => {
  //   try {
  //     const response = await api.post('/schedules', {
  //       room_id: roomId,
  //       date: startTime.toISOString().substring(0, 10), // Somente a parte da data
  //       start_time: startTime.toISOString(),
  //       end_time: endTime.toISOString(),
  //     }, {
  //       headers: {
  //         Authorization: token,
  //       },
  //     });
  //     console.log(response.data);
  //     updateUserRequests(); // Atualiza o estado para exibir a lista de reservas
  //     setReservationMessage('Reserva feita com sucesso.');
  //     setDisabledButtons({ ...disabledButtons, [roomId]: true }); // Desativa o botão de reserva apenas para a sala clicada
  //   } catch (error) {
  //     console.error('Erro ao fazer reserva:', error);
  //     setReservationMessage('Erro ao fazer a reserva.');
  //   }
  // };

  return (
    <div>
      {/* {startTime && endTime && (
        <> */}
          <h2>Salas Disponíveis</h2>
          {error && <p>{error}</p>}
          <List sx={{ width: 400 }} component={Paper}>
            {rooms.map((room) => (
              // <List
                // key={room.id}
                // label={'Senha'}
                // type={'password'}
                // value={'Teste'}
                // onChange={(e) => setPassword(e.target.value)}
              // />
              
              <ListItem key={room.id}>
                <ListItemText
                  primary= {room.name}
                  secondary= {"Capacidade: " + room.capacity}
                />
                <Button
                  label= {disabledButtons[room.id] ? 'Reservado' : 'Reservar'}
                  onClick={() => handleReserve(room.id)} disabled={disabledButtons[room.id]}
                />
              </ListItem> 
            ))}
          </List>
        {/* </> */}
      {/* )} */}
      {scheduleMessage && <p>{scheduleMessage}</p>}
    </div>
  );
}

export default AvailableRooms;
