import React from 'react';
import Container from './styles';
import Link from 'next/link';

export default function CTA({ children, path = '/' }) {
  return (
    <Container>
      <Link href={path}>
        <a>{children}</a>
      </Link>
    </Container>
  );
}
