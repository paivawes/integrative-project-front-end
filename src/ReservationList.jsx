import React, { useState, useEffect } from 'react';
import api from './api';

function ReservationList({ token }) {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const response = await api.get('/reservations', {
          headers: {
            Authorization: token,
          },
        });
        setReservations(response.data);
      } catch (error) {
        console.error('Erro ao buscar reservas:', error);
      }
    };

    fetchReservations();
  }, [token]);

  return (
    <div>
      <h2>Minhas Reservas</h2>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            Sala: {reservation.room_id} - Data: {reservation.date} - Início: {reservation.start_time} - Fim: {reservation.end_time}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReservationList;
