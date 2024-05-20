import React, { useState } from 'react';
import { Input } from "../../atoms/input/input";
import { RegisterContainer, RegisterStyles, Title } from './create-user-styles';
import { Button } from '../../atoms/button/button';
import { UserService } from '../../../service/user-service/user-service';
import { useNavigate } from 'react-router-dom';


export const Register = () => {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate()
  const userService = new UserService()

  const fetch = () => {
    userService.create({
      name: name,
      email: email,
      password: password
    }).then((res) => {
      navigate('/login')
    })
  }

  return (
    <RegisterContainer>
      <RegisterStyles>
        <Title>{'Cadastro de novo usuário'}</Title>
        <Input
          label={'Nome completo'}
          type={'text'}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label={'E-mail'}
          type={'email'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label={'Senha'}
          type={'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <Button
            label={'Cadastrar'}
            onClick={fetch}
          />
        </div>
      </RegisterStyles>
    </RegisterContainer>
  );
}