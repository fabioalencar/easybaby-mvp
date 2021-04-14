import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from './styles';
import { useRouter } from 'next/router';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export default function HeaderMaternidade({ title, brand }) {
  const router = useRouter();
  return (
    <Container>
      <header>
        <Link href="/busca" onClick={() => router.back()}>
          <a>
            {' '}
            <Image src="/icon-back.png" alt="Voltar" width={30} height={30} />
          </a>
        </Link>
        <Link href="/">
          <a>
            <img
              src={`${publicRuntimeConfig.STRAPI_API_URL}${brand}`}
              alt={title}
              width={80}
              height={80}
            />
          </a>
        </Link>
        <Link href="/login">
          <a>
            <Image
              src="/icon-user.png"
              alt="Entrar"
              width={30}
              height={30}
              layout="fixed"
            />
            Entrar
          </a>
        </Link>
      </header>
      <h1>{title}</h1>
    </Container>
  );
}
