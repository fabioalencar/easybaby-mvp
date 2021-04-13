import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from './styles';

export default function Navigation() {
  return (
    <Container>
      <Link href="/servicos-essenciais-para-a-gravidez">
        <a>
          <Image
            src="/icon-servicos.png"
            alt="Serviços"
            width={30}
            height={30}
            layout="fixed"
          />
          Serviços
        </a>
      </Link>
      <Link href="/">
        <a>
          <Image
            src="/icon-home.png"
            alt="Home"
            width={30}
            height={30}
            layout="fixed"
          />
          Home
        </a>
      </Link>
      <Link href="/ajuda-financeira-para-a-gravidez">
        <a>
          <Image
            src="/icon-financie.png"
            alt="Financie"
            width={30}
            height={30}
            layout="fixed"
          />
          Financie
        </a>
      </Link>
    </Container>
  );
}
