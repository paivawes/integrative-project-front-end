import styled from "styled-components";

export const CadastroContainer = styled.div`
  width: 94%;
  max-width: 1920px;
  margin: 3em auto;
  box-shadow: 0 7px 16px 0 rgba(0, 0, 0, .2), 0 1px 3px 0 rgba(0, 0, 0, .1);
  background-color: white;
  border-radius: 8px;
`;

export const CadastroStyles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 50px;
  padding-bottom: 2em;
`;

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
