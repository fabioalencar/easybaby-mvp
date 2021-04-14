import React from 'react';
import Container from './styles';
import Link from 'next/link';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

export default function Avatar({ url }) {
  const avatarUrl = `${publicRuntimeConfig.STRAPI_API_URL}${url}`;

  return (
    <Container>
      <Link href="/dashboard">
        <a>
          <img
            src={avatarUrl}
            alt="User"
            width={42}
            height={42}
            layout="fixed"
          />
        </a>
      </Link>
    </Container>
  );
}
