import React from 'react';
import Container from './styles';
import Card from '../Card';
import getConfig from 'next/config';
import { useState } from 'react';
import { setCookie } from 'nookies';
import Router from 'next/router';

const { publicRuntimeConfig } = getConfig();

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const logininfo = {
      identifier: username,
      password: password,
    };

    const login = await fetch(
      `${publicRuntimeConfig.STRAPI_API_URL}/auth/local`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(logininfo),
      }
    );

    const loginResponse = await login.json();

    /* const cookieToken = setCookie(null, 'user', JSON.stringify(loginResponse), {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });*/
    console.log(loginResponse);
    /*
    if (JSON.stringify(loginResponse.jwt)) {
      Router.push('/maternidade/checkout');
    } else {
      window.alert('Usuário inválido!');
    }*/
  };
  return (
    <Container>
      <Card>
        <form method="post" action="#" align="center">
          <div>
            <label htmlFor="email">Usuário</label>
            <input
              id="email"
              type="text"
              placeholder="Insira seu usuário"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="Insira sua senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="flex w-full mt-8">
            <button type="button" onClick={() => handleLogin()}>
              Entrar
            </button>
          </div>
        </form>
      </Card>
    </Container>
  );
}
