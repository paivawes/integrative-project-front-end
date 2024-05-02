import React from "react";
import { ScheduleContainer, ScheduleStyles, Title } from './schedule-styles';
import DateTime from "../../../DateTime";
import ReservationList from "../../../ReservationList";
import RoomList from "../../../RoomList";

export const Schedule = () => {
    return (
        // Falta o menu...
        <ScheduleContainer>
            <ScheduleStyles>
                <Title>{'Reservar Sala'}</Title>
                {/* Falta exibir todas as salas que já foram reservadas */}
                <DateTime />
                <RoomList />
                <ReservationList />
            </ScheduleStyles>
        </ScheduleContainer>
    )
}