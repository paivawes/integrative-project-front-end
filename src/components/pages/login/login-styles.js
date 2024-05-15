import styled from "styled-components";

export const LoginContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    background-color: white;
    width: 500px;
    height: 500px;
    border-radius: 50px;
    transform: translate(-50%, -50%);
    box-shadow: 0 7px 16px 0 rgba(0, 0, 0, .2), 0 1px 3px 0 rgba(0, 0, 0, .1);
`
export const LoginStyles = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    justify-items: center;
    height: 100%;
`

export const Title = styled.p`
    font-size: 40px;
    font-weight: 700;
`