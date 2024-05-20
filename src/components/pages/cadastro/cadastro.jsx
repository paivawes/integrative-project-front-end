import React, { useState } from 'react';
import { Input } from "../../atoms/input/input";
import { CadastroContainer, CadastroStyles, Title, TableRows, TableStyles } from './cadastro-styles';
import { Button } from '../../atoms/button/button';

const RoomTeste = [
  { id: 1, name: 'Sala 1', capacity: 100 },
  { id: 2, name: 'Sala 2', capacity: 50 },
  { id: 3, name: 'Sala 3', capacity: 36 },
  { id: 4, name: 'Sala 4', capacity: 83 },
];

const AgendaTeste = [
  {id: 1, user_id: 1, room_id: 1, created_at: '2024-05-12T10:00:00', start_time: '2024-05-12T11:00:00', end_time: '2024-05-12T14:30:00', description: 'Lorem ipsum dolor sit amet', status: 'Pendente'},
  {id: 2, user_id: 1, room_id: 2, created_at: '2024-05-04T11:00:00', start_time: '2024-05-04T11:00:00', end_time: '2024-05-05T11:00:00', description: 'Sem observações', status: 'Aprovada'},
  {id: 3, user_id: 2, room_id: 3, created_at: '2024-12-02T10:00:00', start_time: '2024-12-02T11:00:00', end_time: '2024-12-02T14:30:00', description: 'Sem observações', status: 'Reprovada'}
];

const AgendaHistorico = [
  {id: 1, user_id: 1, room_id: 1, created_at: '2024-05-01T10:00:00', start_time: '2024-05-01T11:00:00', end_time: '2024-05-01T14:30:00', description: 'Reunião discussão aulas UNIVESP'},
  {id: 2, user_id: 1, room_id: 1, created_at: '2024-05-10T11:00:00', start_time: '2024-05-10T11:00:00', end_time: '2024-05-10T13:00:00', description: 'Uso de sala para leitura - UNIVESP '},
  {id: 3, user_id: 2, room_id: 2, created_at: '2024-04-20T10:00:00', start_time: '2024-04-20T11:00:00', end_time: '2024-04-20T14:30:00', description: 'Reunião funcionários do Polo'},
  {id: 1, user_id: 1, room_id: 2, created_at: '2024-05-11T10:00:00', start_time: '2024-05-11T11:00:00', end_time: '2024-05-11T15:30:00', description: 'Uso da sala para estudos para provas - UNIVESP'},
  {id: 2, user_id: 1, room_id: 3, created_at: '2024-04-19T11:00:00', start_time: '2024-04-19T11:00:00', end_time: '2024-04-19T11:30:00', description: 'Reunião discussão aulas UNIVESP'},
  {id: 3, user_id: 2, room_id: 3, created_at: '2024-05-12T10:00:00', start_time: '2024-05-12T11:00:00', end_time: '2024-05-12T16:00:00', description: 'Reunião para discussão PI - Reunião discussão aulas UNIVESP'}
];

export const Cadastro = () => {
  const [Sala, setSala] = useState('');
  const [Capacidade, setCapacidade] = useState('');
  const [Salas, setSalas] = useState(RoomTeste);

  const handleSalvar = () => {
    const novaSala = {
      id: Salas.length + 1,
      name: Sala,
      capacity: parseInt(Capacidade, 10),
    };
    setSalas([...Salas, novaSala]);
    setSala('');
    setCapacidade('');
  };

  return (
    <CadastroContainer>
      <Title>{'Cadastros'}</Title>
      <CadastroStyles>
        <div>
          <h2>Registrar Salas</h2>
          <Input
            label={'Sala'}
            type={'text'}
            value={Sala}
            onChange={(e) => setSala(e.target.value)}
          />
       
          <div>
          
            <Input
              label={'Capacidade'}
              type={'number'}
              value={Capacidade}
              onChange={(e) => setCapacidade(e.target.value)}
            />
            <Button
              label={'Salvar'}
              onClick={handleSalvar}
            />
          </div>
        </div>
        <div>
          <h2>Salas Cadastradas</h2>
          <div id="TabelaSala">
            {Salas.map(salaE => (
              <TableRows key={salaE.id}>
                <p>{salaE.name}</p>
                <p>{salaE.capacity}</p>
              </TableRows>
            ))}
          </div>
        </div>
      </CadastroStyles>
      
      <TableStyles>
        <div>
          <h2>Solicitações Pendentes</h2>
        </div>
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Sala</th>
              <th>Início</th>
              <th>Término</th>
              <th>Descrição</th>
              <th>Data</th>
              <th>Aprovações</th>
              
            </tr>
          </thead>
          <tbody>
            {AgendaTeste.map(agenda => (
              <tr key={agenda.id}>
                <td>{agenda.status}</td>
                <td>{agenda.room_id}</td>
                <td>{new Date(agenda.start_time).toLocaleString()}</td>
                <td>{new Date(agenda.end_time).toLocaleString()}</td>
                <td>{agenda.description}</td>
                <td>{new Date(agenda.created_at).toLocaleDateString()}</td>
                <td>
                  <Button label="✅" />
                  <Button label="❌" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableStyles>

       
      <TableStyles>
      <div>
          <h2>Histórico</h2>
        </div>
        <table>
          <thead>
            <tr>
              
              <th>Sala</th>
              <th>Início</th>
              <th>Término</th>
              <th>Descrição</th>
              <th>Data</th>
                           
            </tr>
          </thead>
          <tbody>
            {AgendaHistorico.map(agendahst => (
              <tr key={agendahst.id}>
                <td>{agendahst.room_id}</td>
                <td>{new Date(agendahst.start_time).toLocaleString()}</td>
                <td>{new Date(agendahst.end_time).toLocaleString()}</td>
                <td>{agendahst.description}</td>
                <td>{new Date(agendahst.created_at).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableStyles>
    </CadastroContainer>
  );
};