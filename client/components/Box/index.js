import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Box(data) {
  const maternidade = data.hit;
  return (
    <Link href="/">
      <a>
        <h2>
          <Link href={`/maternidade/${maternidade.slug}`}>
            <a>{maternidade.NAME}</a>
          </Link>
        </h2>
        <p>{maternidade.CNPJ}</p>
        <p>{maternidade.WEBSITE}</p>
      </a>
    </Link>
  );
}
