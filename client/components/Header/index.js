import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from './styles';
import Avatar from '../Avatar';

export default function Header({ user }) {
  const avatarUrl = user ? user.user.avatar.url : null;

  return (
    <Container>
      <Link href="/busca">
        <a>
          <Image
            src="/icon-search.png"
            alt="Buscar"
            width={30}
            height={30}
            layout="fixed"
          />
        </a>
      </Link>
      <Link href="/">
        <a>
          <Image src="/easy-baby.svg" alt="Easy Baby" width={100} height={72} />
        </a>
      </Link>
      {user && <Avatar url={avatarUrl} />}
      {!user && (
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
      )}
    </Container>
  );
}
