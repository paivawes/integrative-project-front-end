import styled from "styled-components";

export const ScheduleContainer = styled.div`
    width: 94%;
    max-width: 1920px;
    margin: 3em auto;
`
export const ScheduleStyles = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 7px 16px 0 rgba(0, 0, 0, .2), 0 1px 3px 0 rgba(0, 0, 0, .1);
    padding: 1em 3em;
    padding-bottom: 2em;
`

export const Title = styled.p`
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 0.5em;
`

export const Subtitle = styled.h2 `
    margin-bottom: 0.5em;
`

export const ScheduleInputs = styled.div`
    display: flex;
    gap: 3em;
    margin-bottom: 2em;
`

export const SpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
`