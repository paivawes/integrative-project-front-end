import React, { useState} from 'react';

const teste = [
  {id: 1, room_id: 1, date: '12/02/2024', start_time: '11:00', end_time: '14:30'},
  {id: 2, room_id: 2, date: '12/02/2024', start_time: '11:00', end_time: '14:30'},
  {id: 3, room_id: 3, date: '12/02/2024', start_time: '11:00', end_time: '14:30'}
]

function Schedules() {
  const [schedules, setSchedules] = useState(teste);

  return (
    <div>
      
    </div>
  );
}

export default Schedules;
