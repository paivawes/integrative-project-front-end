import React, { useState } from 'react';
import { Input } from "../../atoms/input/input";
import { cadastroContainer, cadastroStyles, Title } from './cadastro-styles';
import { Button } from '../../atoms/button/button';


export const Cadastro = () => {
    const [Nome, setNome] = useState()
    const [Email, setemail] = useState()
    const [CEP, setCEP] = useState()
    const [Endereco, setEndereço] = useState()
    const [Instituição, setInstituição] = useState()
    const [Curso, setCurso] = useState()
    const [Sala, setSala] = useState()
    const [qtdeAssentos, setqtdeAssentos] = useState()
  
  
    return (
      <cadastroContainer>
        <cadastroStyles>
          <Title>{'Cadastros'}</Title>
          <Input
            label={'Nome'}
            type={'text'}
            value={Nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Input
            label={'Email'}
            type={'email'}
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label={'CEP'}
            type={'number'}
            value={CEP}
            onChange={(e) => setCEP(e.target.value)}
          />
          <Input
            label={'Endereço'}
            type={'text'}
            value={Endereco}
            onChange={(e) => setEndereço(e.target.value)}
          />
          <Input
            label={'Instituição'}
            type={'text'}
            value={Instituição}
            onChange={(e) => setInstituição(e.target.value)}
          />
          <Input
            label={'Curso'}
            type={'text'}
            value={Curso}
            onChange={(e) => setCurso(e.target.value)}
          />
          <div>
          <Button
          label={'Salvar'}
          onClick={() => {}}
          />
          </div>
        </cadastroStyles>

        <cadastroStyles>
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
