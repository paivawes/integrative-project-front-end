import React, { useState } from 'react';
import { Input } from "../../atoms/input/input";
import { LoginContainer, LoginStyles, Title } from './login-styles';
import { Button } from '../../atoms/button/button';


export const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()


  return (
    <LoginContainer>
      <LoginStyles>
        <Title>{'Login'}</Title>
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
        label={'Entrar'}
        onClick={() => {}}
        />
        </div>
      </LoginStyles>
    </LoginContainer>
  );
}