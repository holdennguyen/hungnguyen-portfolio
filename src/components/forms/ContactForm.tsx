import * as React from 'react';

import Link from 'next/link';


export default function ContactForm() {

  return (
    <Link href='mailto:holdennguyen6174@gmail.com'>
      <a className='text-primary hover:text-primary/70'>holdennguyen6174@gmail.com</a>
    </Link>
  );
}
