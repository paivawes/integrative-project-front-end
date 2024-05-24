import React, { useEffect, useState } from "react";
import { ScheduleContainer, ScheduleStyles, Title, ScheduleInputs, SpaceBetween } from './schedule-styles';
import DateTime from "../../../DateTime";
import AvailableRooms from "../../../AvailableRooms";
import UserRequests from "../../../UserRequests";
import { Input } from "../../atoms/input/input";
import ScheduleService from "../../../service/schedule-service/schedule-service";
import RoomService from "../../../service/room-service/room-service";
import { useUser } from '../../../context/user-context';


export const Schedule = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [rooms, setRooms] = useState()
  const [schedules, setSchedules] = useState()
  const [availableRooms, setAvailableRooms] = useState()
  const [allSchedules, setAllSchedules] = useState([])

  const { user } = useUser()


  const roomService = new RoomService();
  const scheduleService = new ScheduleService()

  const fetch = () => {
    roomService.findAll().then((response) => {
      setRooms(response.data)
    })

    scheduleService.findAll({
      user: 3
    }).then((response) => {
      setSchedules(response.data)
    })
  }

  const unavailableRoom =  async () => {
   await scheduleService.findAll({
      startPeriod: startDate,
      endPeriod: endDate
    }).then((res) => {
      setAllSchedules(res.data)
    })

    const findApproved = allSchedules.filter(schedule => schedule.status === 'approved')
    const approvedRoomIds = findApproved.map(schedule => schedule.roomId.id)
    const removeRooms = rooms.filter(room => !approvedRoomIds.includes(room.id))
    setAvailableRooms(removeRooms)
  }

  useEffect(() => {
    fetch()
  }, [])

  return (
    <ScheduleContainer>
      <ScheduleStyles>
        <Title>{'Reservar Sala'}</Title>
          <button onClick={unavailableRoom}>teste</button>
        <ScheduleInputs>
          <DateTime
            onChangeStartDate={date => setStartDate(date)}
            onChangeEndDate={date => setEndDate(date)}
          />
          {startDate && endDate && (
            <div>
              <h2>Descrição</h2>
              <Input
                width={300}
                label={'Observações (opcional)'}
              />
            </div>
          )}
        </ScheduleInputs>
        {(startDate && endDate) ? (
          <SpaceBetween>
            <AvailableRooms startDate={startDate} endDate={endDate} availableRooms={availableRooms} />
            <UserRequests />
          </SpaceBetween>
        ) : (
          <div>
            <p>Escolha as datas para ver as salas disponíveis.</p>
            <UserRequests />
          </div>
        )}
      </ScheduleStyles>
    </ScheduleContainer>
  );
}