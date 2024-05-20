import React, { useState } from 'react';
import { Input } from "../../atoms/input/input";
import { LoginContainer, LoginStyles, Title } from './login-styles';
import { Button } from '../../atoms/button/button';
import { UserService } from '../../../service/user-service/user-service';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../../context/user-context';
import { Link } from '@mui/material';


export const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const { setUser } = useUser()

  const navigate = useNavigate()
  const userService = new UserService()

  const fetch = () => {
    userService.log({
      email: email,
      password: password
    }).then((res) => {
      setUser(res.data.user)
      navigate('/agendamento')
    })
  }

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
            onClick={fetch}
          />
        </div>
        <Link onClick={() => navigate('/criar-conta')}>
        {'realizar cadastro '}
        </Link>
      </LoginStyles>
    </LoginContainer>
  );
}