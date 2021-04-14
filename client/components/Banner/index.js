import React from 'react';
import Container from './styles';
import Image from 'next/image';

export default function Navigation() {
  return (
    <Container>
      <Image src="/gestante.png" alt="Gestante" width={414} height={349} />
      <div className="content">
        <h2>
          <strong>Encontre a maternidade</strong> perfeita e serviços essenciais
          para sua gestação.
        </h2>
      </div>
    </Container>
  );
}
