import React, { useEffect, useState } from 'react';
import { Input } from "../../atoms/input/input";
import { LoginContainer, LoginStyles, Title } from './login-styles';
import { Button } from '../../atoms/button/button';
import { UserService } from '../../../service/user-service/user-service';
import { useUser } from '../../../context/user-context';
import { RoomService } from '../../../service/room-service/room-service';


export const Login = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const { login } = useUser();

  const userService = new UserService()

  const roomservice = new RoomService()

  const fetch = () => {
    userService.log({
      email: email,
      password: password
    }).then((res) => {
      const token = res.token
      const user = res.user
      login(user, token)

      
    }).finally(() => {

      // roomservice.findAll().then((res) => console.log(res, 'room'))
    })
    
  }
  
  useEffect(() => {


  }, [])

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
      </LoginStyles>
    </LoginContainer>
  );
}