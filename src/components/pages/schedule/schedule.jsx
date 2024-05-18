import React, { useState } from "react";
import { ScheduleContainer, ScheduleStyles, Title, ScheduleInputs, SpaceBetween } from './schedule-styles';
import DateTime from "../../../DateTime";
import AvailableRooms from "../../../AvailableRooms";
import UserRequests from "../../../UserRequests";
import { Input } from "../../atoms/input/input";

export const Schedule = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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
            <UserRequests />
          </div>
        )}
      </ScheduleStyles>
    </ScheduleContainer>
  );
}