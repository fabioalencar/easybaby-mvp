import React from 'react';
import Container from './styles';
import Card from '../Card';
import getConfig from 'next/config';
import { useState } from 'react';
import { setCookie } from 'nookies';
import Router from 'next/router';
import Link from 'next/link';

const { publicRuntimeConfig } = getConfig();

export default function LoginBox() {
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

    if (loginResponse.jwt) {
      const cookieToken = setCookie(
        null,
        'user_client',
        JSON.stringify(loginResponse),
        {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
        }
      );
      if (cookieToken) {
        Router.push('/dashboard');
      }
    } else {
      alert(loginResponse.message[0].messages[0].message);
    }
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
      <Link href="/cadastro">
        <a>Ainda não tenho uma conta</a>
      </Link>
    </Container>
  );
}
