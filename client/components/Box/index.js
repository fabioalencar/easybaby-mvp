import React from 'react';
import Link from 'next/link';

export default function Box(data) {
  const maternidade = data.hit;
  return (
    <Link href={`/maternidade/${maternidade.slug}`}>
      <a>
        <h2>{maternidade.NAME}</h2>
        <p>{maternidade.CNPJ}</p>
        <p>{maternidade.WEBSITE}</p>
        <strong>R$ {maternidade.price}</strong>
      </a>
    </Link>
  );
}
