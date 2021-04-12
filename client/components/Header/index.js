import React from 'react';
import Image from 'next/image';
import Navigation from '../Navigation';
import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a>
          <Image src="/easy-baby.svg" alt="Easy Baby" width={100} height={72} />
        </a>
      </Link>
      <Navigation />
    </div>
  );
}
