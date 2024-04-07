import React from 'react';
import RoomList from './RoomList';
import ReservationList from './ReservationList';

function Dashboard({ token, handleLogout }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Sair</button>
      <RoomList token={token} />
      <ReservationList token={token} />
    </div>
  );
}

export default Dashboard;
