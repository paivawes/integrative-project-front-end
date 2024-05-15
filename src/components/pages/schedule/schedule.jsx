import React from "react";
import { ScheduleContainer, ScheduleStyles, Title, ScheduleInputs, SpaceBetween } from './schedule-styles';
import DateTime from "../../../DateTime";
import UserRequests from "../../../UserRequests";
import AvailableRooms from "../../../AvailableRooms";
import { Input } from "../../atoms/input/input";

export const Schedule = () => {
    return (
        // Falta o menu...
        <ScheduleContainer>
            <ScheduleStyles>
              <Title>{'Reservar Sala'}</Title>
              <ScheduleInputs>
                <DateTime />
                <div>
                  <h2>Descrição</h2>
                  <Input
                    width={300}
                    label={'Observações (opcional)'}
                  />
                </div>
              </ScheduleInputs>
              <SpaceBetween>
                <AvailableRooms />
                <UserRequests />
              </SpaceBetween>
            </ScheduleStyles>
        </ScheduleContainer>
    )
}