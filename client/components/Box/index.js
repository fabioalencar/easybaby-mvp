import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Box(data) {
  const maternidade = data.hit;
  return (
    <Link href={`/maternidade/${maternidade.slug}`}>
      <a>
        <h2>
          <a>{maternidade.NAME}</a>
        </h2>
        <p>{maternidade.CNPJ}</p>
        <p>{maternidade.WEBSITE}</p>
      </a>
    </Link>
  );
}
