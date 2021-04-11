import getConfig from 'next/config';
import { useState } from 'react';
import { setCookie } from 'nookies';
import Router from 'next/router';

function Index() {
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

    const cookieToken = setCookie(null, 'user', JSON.stringify(loginResponse), {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });

    if (cookieToken) {
      Router.push('/contracts');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <img
        src="/easy-baby.svg"
        alt="Easy Baby"
        width={150}
        height={106}
        className="mx-auto h-18 w-auto p-4"
      />
      <div className="container max-w-md mx-auto xl:max-w-3xl h-full flex bg-white rounded-lg shadow overflow-hidden">
        <div className="w-full xl:w-1/2 p-8">
          <form method="post" action="#">
            <div className="mb-4 mt-6">
              <label
                className="block text-secondary-100  text-sm font-semibold mb-2"
                htmlFor="email"
              >
                Usuário
              </label>
              <input
                className="text-sm appearance-none rounded w-full py-2 px-3 border-gray-300 text-gray-700 bg-gray-100 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="email"
                type="text"
                placeholder="Insira seu usuário"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div className="mb-6 mt-6">
              <label
                className="block text-secondary-100  text-sm font-semibold mb-2"
                htmlFor="password"
              >
                Senha
              </label>
              <input
                className="text-sm bg-gray-100 appearance-none rounded w-full border-gray-300 py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline h-10"
                id="password"
                type="password"
                placeholder="Insira sua senha"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <a
                className="inline-block align-baseline text-sm text-gray-600 hover:text-gray-800"
                href="/forgot"
              >
                Esqueceu a senha?
              </a>
            </div>
            <div className="flex w-full mt-8">
              <button
                className="w-full bg-primary-100 hover:bg-primary-50 text-white text-sm py-2 px-4 font-semibold rounded focus:outline-none focus:shadow-outline h-10"
                type="button"
                onClick={() => handleLogin()}
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const { publicRuntimeConfig } = getConfig();

export default Index;
