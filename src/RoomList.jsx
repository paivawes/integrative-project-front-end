import React, { useState, useEffect } from 'react';
import api from './api';

function RoomList({ token }) {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await api.get('/rooms', {
          headers: {
            Authorization: token,
          },
        });
        setRooms(response.data);
      } catch (error) {
        console.error('Erro ao buscar salas:', error);
      }
    };

    fetchRooms();
  }, [token]);

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
