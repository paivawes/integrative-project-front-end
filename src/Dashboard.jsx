import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ptBR from 'date-fns/locale/pt-BR';
import RoomList from './RoomList';
import ReservationList from './ReservationList';

function Dashboard({ token, handleLogout }) {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [refreshReservationList, setRefreshReservationList] = useState(false); // Estado para atualizar a lista de reservas

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, [token]);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleStartTimeChange = (time) => {
    setStartTime(time);
    setRefreshReservationList(!refreshReservationList); // Atualiza a lista de reservas ao alterar o horário de início
  };

  const handleEndTimeChange = (time) => {
    setEndTime(time);
    setRefreshReservationList(!refreshReservationList); // Atualiza a lista de reservas ao alterar o horário de término
  };

  const updateReservationList = () => {
    setRefreshReservationList(!refreshReservationList); // Atualiza o estado para exibir a lista de reservas
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {isLoggedIn ? (
        <>
          <button onClick={handleLogout}>Sair</button>
          <h2>Datas e horários</h2>
          <div>
            <label>Início:</label>
            <DatePicker
              selected={startTime}
              onChange={handleStartTimeChange}
              showTimeSelect
              timeInputLabel="Horário"
              timeIntervals={15}
              dateFormat="dd/MM/yyyy HH:mm"
              locale={ptBR}
            />
          </div>
          <div>
            <label>Término:</label>
            <DatePicker
              selected={endTime}
              onChange={handleEndTimeChange}
              showTimeSelect
              timeInputLabel="Horário"
              timeIntervals={15}
              dateFormat="dd/MM/yyyy HH:mm"
              locale={ptBR}
            />
          </div>
          <RoomList token={token} startTime={startTime} endTime={endTime} updateReservationList={updateReservationList} />
          <ReservationList token={token} />
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}

export default Dashboard;
