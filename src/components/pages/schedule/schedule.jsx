import React from "react";
import ReservationList from "../../../ReservationList";
import RoomList from "../../../RoomList";

export const Schedule = () => {
    return (
        <div>
            <RoomList />
            <ReservationList />
        </div>
    )
}