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
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [rooms, setRooms] = useState()
  const [schedules, setSchedules] = useState()
  const [availableRooms, setAvailableRooms] = useState()
  const [userRequests, setUserRequests] = useState([]);
  const { user } = useUser()

  // const roomService = new RoomService();
  // const scheduleService = new ScheduleService()

  // const fetch = () => {
  //   roomService.findAll().then((response) => {
  //     setRooms(response.data)
  //   })

  //   scheduleService.findAll().then((response) => {
  //     setSchedules(response.data)
  //   })
  // }

  // const unavailableRoom = () => {
    
  // }

  const getUserRequests = async () => {
    await scheduleService.findAll({
      user: user.id
    }).then((res) => {
      // console.log(res.data)
      setUserRequests(res.data);
    })
  }

  useEffect(() => {
    fetch()
    getUserRequests()
  }, [])

  return (
    <ScheduleContainer>
      <ScheduleStyles>
        <Title>{'Reservar Sala'}</Title>
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
            <AvailableRooms startDate={startDate} endDate={endDate} />
            <UserRequests />
          </SpaceBetween>
        ) : (
          <div>
            <p>Escolha as datas para ver as salas disponíveis.</p>
            <UserRequests requests={userRequests}/>
          </div>
        )}
      </ScheduleStyles>
    </ScheduleContainer>
  );
}