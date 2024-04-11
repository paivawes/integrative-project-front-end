import React, { useState, useEffect } from 'react';

const teste = [
  {id: 1, room_id: 1, date: '12/02/2024', start_time: '11:00', end_time: '14:30', status: 'pendente'}
]

function ReservationList({ token }) {
  const [reservations, setReservations] = useState(teste);

  // useEffect(() => {
  //   const fetchReservations = async () => {
  //     try {
  //       const response = await api.get('/reservations', {
  //         headers: {
  //           Authorization: token,
  //         },
  //       });
  //       setReservations(response.data);
  //     } catch (error) {
  //       console.error('Erro ao buscar reservas:', error);
  //     }
  //   };

  //   fetchReservations();
  // }, [token]);

  return (
    <div>
      <h2>Minhas Reservas</h2>
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            Sala: {reservation.room_id} - Data: {reservation.date} - Início: {reservation.start_time} - Fim: {reservation.end_time} - Status: {reservation.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ReservationList;
