import React, { useState, useEffect } from "react";
import { ScheduleContainer, ScheduleStyles, Title, ScheduleInputs, SpaceBetween } from './schedule-styles';
import DateTime from "../../../DateTime";
import AvailableRooms from "../../../AvailableRooms";
import UserRequests from "../../../UserRequests";
import { Input } from "../../atoms/input/input";
import ScheduleService from "../../../service/schedule-service/schedule-service";
import RoomService from "../../../service/room-service/room-service";
import { useUser } from "../../../context/user-context";

export const Schedule = () => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [rooms, setRooms] = useState()
  const [schedules, setSchedules] = useState()
  const [availableRooms, setAvailableRooms] = useState()
  const [userRequests, setUserRequests] = useState([])
  const [scheduleDescription, setScheduleDescription] = useState('')
  
  const { user, hasConnection } = useUser()
  
  const roomService = new RoomService()
  const scheduleService = new ScheduleService()
  
  useEffect(() => {
    
    hasConnection()
  }, [])
  console.log(user, 'aqui')
  
  useEffect(() => {
    roomService.findAll().then((response) => {
      setRooms(response.data)
    })

    scheduleService.findAll({
      user: user.id,
      startPeriod: null,
      endPeriod: null
    }).then((res) => {
      const request = res.data
      setUserRequests(request)
    })
  }, [])

  useEffect(() => {
    scheduleService.findAll({
      user: null,
      startPeriod: startDate,
      endPeriod: endDate
    }).then((response) => {
      setSchedules(response.data)
      const findApproved = schedules.filter(schedule => schedule.status === 'approved')
      const approvedRoomIds = findApproved?.map(schedule => schedule.roomId.id)
      const removeRooms = rooms.filter(room => !approvedRoomIds.includes(room.id))
      setAvailableRooms(removeRooms)
    })
  }, [startDate, endDate])
  

  return (
    <ScheduleContainer>
      <ScheduleStyles>
        <Title>{'Reservar Sala'}</Title>
        <ScheduleInputs>
          <DateTime
            onChangeStartDate={date => setStartDate(date.toISOString())}
            onChangeEndDate={date => setEndDate(date.toISOString())}
          />
          {startDate && endDate && (
            <div>
              <h2>Descrição</h2>
              <Input
                width={300}
                label={'Observações (opcional)'}
                value={scheduleDescription}
                onChange={(e) => setScheduleDescription(e.target.value)}
                type={'text'}
              />
            </div>
          )}
        </ScheduleInputs>
        {(startDate && endDate) ? (
          <SpaceBetween>
            <AvailableRooms 
            startDate={startDate} 
            endDate={endDate} 
            availableRoom={availableRooms} 
            scheduleDescription={scheduleDescription}
            />
            <UserRequests />
          </SpaceBetween>
        ) : (
          <div>
            <p>Escolha as datas para ver as salas disponíveis.</p>
            <UserRequests requests={userRequests} />
          </div>
        )}
      </ScheduleStyles>
    </ScheduleContainer>
  );
}