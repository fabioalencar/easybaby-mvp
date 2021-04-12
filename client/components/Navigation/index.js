import React from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/servicos-essenciais-para-a-gravidez">
        <a>Serviços</a>
      </Link>
      <Link href="/busca">
        <a>Busca</a>
      </Link>
      <Link href="/ajuda-financeira-para-a-gravidez">
        <a>Financie</a>
      </Link>
      <Link href="/login">
        <a>Entrar</a>
      </Link>
    </nav>
  );
}
