import React, { useState, useEffect } from 'react';

const teste = [
  {id: 1, name: 'Sala 1', capacity: 100},
  {id: 2,name: 'Sala 2', capacity: 50},
  {id: 3,name: 'Sala 3', capacity: 36},
  {id: 4,name: 'Sala 4', capacity: 83}
]

function RoomList({ token }) {
  const [rooms, setRooms] = useState(teste);

  // useEffect(() => {
  //   const fetchRooms = async () => {
  //     try {
  //       const response = await api.get('/rooms', {
  //         headers: {
  //           Authorization: token,
  //         },
  //       });
  //       setRooms(response.data);
  //     } catch (error) {
  //       console.error('Erro ao buscar salas:', error);
  //     }
  //   };

  //   fetchRooms();
  // }, [token]);

  return (
    <div>
      <h2>Salas Disponíveis</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>
            {room.name} - Capacidade: {room.capacity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoomList;
