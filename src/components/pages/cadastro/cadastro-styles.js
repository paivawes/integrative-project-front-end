import styled from "styled-components";

export const cadastroContainer = styled.div`
    display: flex;
    justify-content: space-between;
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
export const cadastroStyles = styled.div`
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
  text-align: center;
  padding-bottom: 0.5em;
`;

export const TableRows = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: 0 7px 16px 0 rgba(0, 0, 0, .2), 0 1px 3px 0 rgba(0, 0, 0, .1);
  border-radius: 8px;
  padding: 8px 20px;
  margin: 10px 0px;

  p {
    margin: 0 1em;
  }
`;

export const TableStyles = styled.div`
  margin: 50px;
  display: flex; 
  justify-content: center;
  flex-direction: column;

  table {
    width: 100%;
    margin: 10px auto;
    border-collapse: collapse;
  }

  th, td {
    padding: 12px;
    border: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;
